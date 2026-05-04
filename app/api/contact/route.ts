import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { Resend } from "resend";

// Initialize Firebase Admin SDK
if (!getApps().length) {
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  initializeApp({
    credential: cert(serviceAccount as any),
  });
}

const db = getFirestore();
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name is too long"),
  contact: z
    .string()
    .min(1, "Contact is required")
    .max(20, "Contact is too long"),
  email: z.string().email("Invalid email format"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});

type ContactData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.issues.map((err: any) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      );
    }

    const { fullName, contact, email, message }: ContactData =
      validationResult.data;

    // Save to Firestore
    const docRef = await db.collection("contacts").add({
      fullName,
      contact,
      email,
      message,
      timestamp: new Date(),
      status: "unread",
    });

    // Send email notification
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Replace with your verified domain
        to: "nfjunia@gmail.com",
        subject: `New Contact Form Submission from ${fullName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request if email fails, but log it
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        id: docRef.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
