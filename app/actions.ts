"use server"

// This file is kept for reference but is no longer used
// The contact form now submits directly to FormSubmit.co

export async function sendContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = (formData.get("message") as string) || "No message provided"

    // Validate the form data
    if (!name || !email) {
      return { error: "Name and email are required" }
    }

    // This function is no longer used as we're using FormSubmit.co directly
    return { success: true }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { error: "Failed to send message. Please try again." }
  }
}

