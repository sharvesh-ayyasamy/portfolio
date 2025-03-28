import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-timmerman-navy text-white p-4">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-timmerman-green" />
        </div>
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="text-lg">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
        <Button asChild className="bg-timmerman-green hover:bg-timmerman-greenDark text-white">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}

