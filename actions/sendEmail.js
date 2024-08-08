"use server"

import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "@/email/ContactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value) => {
    if (!value || typeof value !== "string") {
        return false;
    }
    return true;
}

// Practicing error handling
const getErrorMessage = (error) => {
    let message;

    if (error instanceof Error){
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error
    } else {
        message = "Something went wrong"
    }

    return message
}

export const sendEmail = async (formData) => {
    const senderEmail = formData.get("senderEmail")
    const senderName = formData.get("senderName")
    const message = formData.get("message")

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid sender Email"
        }
    }
    if (!validateString(senderName)) {
        return {
            error: "Invalid sender Email"
        }
    }
    if (!validateString(senderEmail)) {
        return {
            error: "Invalid Message"
        }
    }
    
    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['quinonesnn@gmail.com'],
            subject: 'Message from contact form',
            reply_to: senderEmail,
            text: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
        });
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    try {
        await resend.emails.send({
            from: 'Nicolas Quinones <onboarding@resend.dev>',
            to: [senderEmail],
            subject: `Dear ${senderName},`,
            reply_to: 'quinonesnn@gmail.com',
            react: React.createElement(ContactFormEmail, {
                name: senderName
            }),
        })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
}