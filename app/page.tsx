"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Mail,
  Linkedin,
  Download,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  Award,
  ChevronDown,
  Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

export default function Home() {
  const [formStatus, setFormStatus] = useState<{
    loading: boolean
    error?: string
    success?: boolean
  }>({ loading: false })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus({ loading: true })

    try {
      // Create mailto link with form data
      const subject = `Portfolio Contact Form: ${formData.name}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message || "No message provided"}
      `

      // Create and open mailto link
      const mailtoLink = `mailto:sharveshayyasamy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Try to open the email client
      window.location.href = mailtoLink

      // Set a timeout to check if the email client opened
      setTimeout(() => {
        // Show success message
        setFormStatus({ loading: false, success: true })
        toast({
          title: "Email client opened!",
          description: "Please send the email to complete your message submission.",
        })

        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" })
      }, 500)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        loading: false,
        error: "An unexpected error occurred. Please try again.",
      })
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-timmerman-corporateGreen text-white backdrop-blur supports-[backdrop-filter]:bg-timmerman-corporateGreen/90">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="text-white hover:text-timmerman-beige transition-colors">
              Sharvesh Ayyasamy
            </Link>
          </div>
          <nav className="hidden gap-8 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium transition-colors hover:text-timmerman-beige text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium transition-colors hover:text-timmerman-beige text-white"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium transition-colors hover:text-timmerman-beige text-white"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium transition-colors hover:text-timmerman-beige text-white"
            >
              Get in Touch
            </button>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white hover:text-timmerman-beige"
              onClick={() => {
                // Toggle mobile menu here if you want to add a mobile menu
                // For now, we'll just scroll to the about section
                scrollToSection("about")
              }}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 sm:py-32 bg-timmerman-corporateGreen text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Manufacturing/Process Engineer
              </h1>
              <p className="text-xl text-timmerman-beige font-semibold">
                Quality Systems | Process Optimization | Lean Manufacturing
              </p>
              <p className="text-lg text-white">
                Specialized in implementing ISO 13485/9001 quality management systems, driving lean process
                improvements, and developing manufacturing solutions that enhance efficiency and compliance for medical
                device, aerospace, and precision industrial applications.
              </p>
              <div className="flex justify-center mt-8">
                <Button variant="outline" asChild className="resume-button">
                  <a
                    href="/Sharvesh_Ayyasamy_Resume.pdf"
                    download="Sharvesh_Ayyasamy_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex gap-6 justify-center mt-6">
                <a
                  href="https://linkedin.com/in/sharveshayyasamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-white hover:text-timmerman-beige transition-colors" />
                </a>
                <a
                  href="mailto:sharveshayyasamy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6 text-white hover:text-timmerman-beige transition-colors" />
                </a>
              </div>
              <div className="pt-8 animate-bounce">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-timmerman-beige hover:text-white transition-colors"
                  aria-label="Scroll down to learn more"
                >
                  <ChevronDown className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 sm:py-32 bg-timmerman-offWhite">
          <div className="container">
            <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-timmerman-corporateGreen">
                About Me
              </h2>
              <div className="section-divider"></div>
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 mt-8">
                <Card className="bg-timmerman-corporateGreen text-white border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-timmerman-green/30">
                        <Briefcase className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Vision & Expertise</h3>
                    </div>
                    <p className="text-white leading-relaxed">
                      Results-driven Manufacturing/Process Engineer with extensive experience in product design and
                      development. Focused on driving value-stream optimization to create efficient, profitable, and
                      compliant products and processes in complex industries such as Medical, Aerospace, and
                      High-precision Industrial. Committed to continuous improvement in workflows, manufacturing
                      automation, and personnel growth.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-timmerman-beige" />
                        <span className="text-sm text-white">Process Innovation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-timmerman-beige" />
                        <span className="text-sm text-white">Design Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-timmerman-beige" />
                        <span className="text-sm text-white">Quality Assurance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-timmerman-beige" />
                        <span className="text-sm text-white">Technical Leadership</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-timmerman-navy text-white border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-timmerman-blue/30">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Education & Academic Excellence</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lg">M.S in Industrial Engineering</h4>
                        <p className="text-white font-medium">The University of Texas at Arlington</p>
                        <p className="text-sm text-white">May 2023 | GPA: 3.6/4.0</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">B.E in Mechanical Engineering</h4>
                        <p className="text-white font-medium">Sri Krishna College of Technology</p>
                        <p className="text-sm text-white">April 2021 | GPA: 3.3/4.0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 bg-timmerman-brownDark rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 text-white">Professional Summary</h3>
                <p className="mb-4">
                  Versatile Manufacturing and Quality Engineering professional with comprehensive experience across
                  medical device, aerospace, and high-precision industrial sectors. My dual expertise in Industrial and
                  Mechanical Engineering enables me to bridge the gap between design intent and manufacturing reality,
                  delivering solutions that optimize production while maintaining stringent quality standards.
                </p>
                <p className="mb-4">
                  My technical proficiency spans precision fixture design, process automation implementation, quality
                  management system development, and lean manufacturing methodologies. I've successfully led
                  cross-functional teams in implementing ISO 13485 and ISO 9001 quality systems, resulting in
                  significant reductions in non-conformances and improved product consistency.
                </p>
                <p>
                  I excel at translating complex engineering challenges into practical, efficient solutions that drive
                  measurable improvements in productivity, quality, and cost-effectiveness. My data-driven approach to
                  problem-solving, combined with hands-on manufacturing experience, allows me to identify optimization
                  opportunities that others might miss, creating sustainable value throughout the production lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 sm:py-32 bg-timmerman-navy text-white">
          <div className="container">
            <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Engineering Projects
              </h2>
              <div className="section-divider"></div>
              <p className="text-white text-lg">
                Transforming concepts into reality through engineering excellence and innovative problem-solving.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Project 1: Quality Management System - Most important for manufacturing */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image src="/images/QMS.png" alt="Quality Management System Project" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-green mb-2 text-white">Quality Systems</Badge>
                      <h3 className="text-xl font-bold text-white">Quality Management System</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Architected and implemented a comprehensive quality management ecosystem aligned with ISO 13485
                    standards, featuring innovative documentation systems, advanced statistical monitoring tools, and
                    proactive risk management protocols that reduced non-conformances by 25% and established new
                    benchmarks for product consistency.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      ISO 13485
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Quality Systems
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Risk Management
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2: Inventory Classification System - Core to manufacturing efficiency */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image
                    src="/images/Warehouse.png"
                    alt="Inventory Classification System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-green mb-2 text-white">Process Optimization</Badge>
                      <h3 className="text-xl font-bold text-white">Inventory Classification System</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Engineered a revolutionary inventory classification system utilizing advanced ABC Analysis
                    algorithms, resulting in a remarkable 17% productivity surge and transforming warehouse operations
                    through data-driven decision making and strategic resource allocation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Lean Six Sigma
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Data Analytics
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Optimization Algorithms
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3: 3D Printing Applications - Modern manufacturing technology */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image
                    src="/images/3D print.png"
                    alt="3D Printing and Scanning Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-green mb-2 text-white">Advanced Manufacturing</Badge>
                      <h3 className="text-xl font-bold text-white">3D Printing Applications</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Pioneered revolutionary manufacturing solutions through advanced 3D printing technologies and
                    high-precision scanning methodologies. Designed complex fixtures, functional prototypes, and custom
                    tooling that dramatically reduced lead times by 35% while enhancing dimensional accuracy to within
                    0.05mm tolerances for critical medical and aerospace applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Additive Manufacturing
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      3D Scanning
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Rapid Prototyping
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Fixture Design
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 4: Fuel Injector Redesign - Product design relevant to manufacturing */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image src="/images/Fuel Inj.png" alt="Fuel Injector Redesign" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-blue mb-2 text-white">Product Design</Badge>
                      <h3 className="text-xl font-bold text-white">Fuel Injector Redesign</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Revolutionized diesel engine performance through innovative atomizer component redesign, leveraging
                    computational fluid dynamics and advanced materials science to achieve superior fuel atomization,
                    dramatically enhanced combustion efficiency, and significant emissions reduction.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      SolidWorks
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      CFD Analysis
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      Performance Engineering
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 5: Electric Go-Kart Design & Fabrication - Complex manufacturing project */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image
                    src="/images/go-kart-render.jpeg"
                    alt="Electric Go Kart Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-blue mb-2 text-white">Mechanical Design</Badge>
                      <h3 className="text-xl font-bold text-white">Electric Go-Kart Design & Fabrication</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Spearheaded the comprehensive development of a competition-grade electric racing vehicle, from
                    conceptualization through advanced 3D modeling to fabrication and competition. Implemented
                    innovative chassis design principles and cutting-edge drivetrain integration, culminating in a
                    successful entry in the prestigious National Electric Kart Championship in India.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      SolidWorks
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      Structural Analysis
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      Electromechanical Systems
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-blue/30 px-2 py-1 text-xs font-medium text-white">
                      DFM/DFA
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 6: Ride-Sharing Process Improvement - Less directly related to manufacturing */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image
                    src="/images/Ride share.png"
                    alt="Ride-Sharing Process Improvement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-brown mb-2 text-white">Process Improvement</Badge>
                      <h3 className="text-xl font-bold text-white">Ride-Sharing Process Improvement</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Pioneered a groundbreaking DMAIC-driven transformation of ride-sharing operations, implementing
                    sophisticated algorithms that eliminated critical bottlenecks and revolutionized service delivery,
                    resulting in exceptional customer satisfaction metrics and operational efficiency gains.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-brown/30 px-2 py-1 text-xs font-medium text-white">
                      Six Sigma
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-brown/30 px-2 py-1 text-xs font-medium text-white">
                      DMAIC
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-brown/30 px-2 py-1 text-xs font-medium text-white">
                      System Analysis
                    </span>
                  </div>
                </CardContent>
              </Card>
              {/* Project 7: Combination Square Manufacturing - Showcasing GD&T and manufacturing expertise */}
              <Card className="overflow-hidden bg-timmerman-navyDark border-none shadow-lg project-card">
                <div className="relative aspect-video">
                  <Image
                    src="/images/square-head.png"
                    alt="Combination Square Manufacturing Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-timmerman-green mb-2 text-white">Manufacturing Engineering</Badge>
                      <h3 className="text-xl font-bold text-white">Combination Square Manufacturing</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mt-2 text-white">
                    Developed comprehensive manufacturing processes for a precision combination square tool, including
                    detailed GD&T specifications, process planning, and cost analysis. The project encompassed forging,
                    CNC machining, heat treatment, and assembly operations with a focus on achieving high precision and
                    durability for quality measurement applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      GD&T
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Process Planning
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Manufacturing Engineering
                    </span>
                    <span className="inline-flex items-center rounded-md bg-timmerman-green/30 px-2 py-1 text-xs font-medium text-white">
                      Cost Analysis
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 sm:py-32 bg-timmerman-offWhite">
          <div className="container relative">
            <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
            <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-timmerman-corporateGreen">
                Technical Expertise
              </h2>
              <div className="section-divider"></div>
              <p className="text-timmerman-corporateGreenDark text-lg">
                Mastering cutting-edge technologies and methodologies to drive innovation and excellence.
              </p>
            </div>
            <div className="mt-16">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-timmerman-corporateGreen to-timmerman-corporateGreenDark p-1 rounded-lg shadow-md">
                  <TabsTrigger
                    value="technical"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-timmerman-green data-[state=active]:to-timmerman-greenLight data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Manufacturing
                  </TabsTrigger>
                  <TabsTrigger
                    value="quality"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-timmerman-green data-[state=active]:to-timmerman-greenLight data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Award className="mr-2 h-5 w-5" />
                    Quality Systems
                  </TabsTrigger>
                  <TabsTrigger
                    value="lean"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-timmerman-green data-[state=active]:to-timmerman-greenLight data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Lean Manufacturing
                  </TabsTrigger>
                  <TabsTrigger
                    value="software"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-timmerman-green data-[state=active]:to-timmerman-greenLight data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Software & Data
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-8">
                  <Card className="skill-card">
                    <CardContent className="p-8">
                      <h3 className="skill-category-title">Manufacturing & Technical Skills</h3>
                      <div className="mb-6">
                        <Badge className="skill-badge">Process Automation</Badge>
                        <Badge className="skill-badge-secondary">Lean Manufacturing</Badge>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Fixture Design</span>
                            <span className="skill-percentage">95%</span>
                          </div>
                          <Progress value={95} className="progress-bar" />
                          <p className="skill-description">Design of precision fixtures for manufacturing</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Process Automation</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Automating manufacturing processes for efficiency</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">CAD/CAM Software</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Using CAD/CAM software for design and manufacturing</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">DFM/DFA</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Design for Manufacturing and Assembly principles</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Lean Principles</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Applying lean principles to manufacturing processes</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Root Cause Analysis</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">
                            Identifying and resolving root causes of manufacturing issues
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="quality" className="mt-8">
                  <Card className="skill-card">
                    <CardContent className="p-8">
                      <h3 className="skill-category-title">Quality Systems & Standards</h3>
                      <div className="mb-6">
                        <Badge className="skill-badge mb-2 mr-2">ISO 13485 Certified</Badge>
                        <Badge className="skill-badge-secondary">Quality Management Professional</Badge>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">PPAP</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Production Part Approval Process implementation</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">APQP</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Advanced Product Quality Planning methodology</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">FMEA</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Failure Mode and Effects Analysis</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">DQ/IQ/OQ/PQ</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">
                            Design, Installation, Operational, Performance Qualification
                          </p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">ISO 9001</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Quality Management System standard</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">ISO 13485</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Medical devices Quality Management System</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">CAPA Management</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Corrective and Preventive Action processes</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">MRB & RMA Processes</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Material Review Board and Return Material Authorization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="lean" className="mt-8">
                  <Card className="skill-card">
                    <CardContent className="p-8">
                      <h3 className="skill-category-title">Lean Manufacturing & Continuous Improvement</h3>
                      <div className="mb-6 flex flex-wrap gap-2">
                        <Badge className="skill-badge">Six Sigma Green Belt Certified</Badge>
                        <Badge className="skill-badge-secondary">Continuous Improvement Expert</Badge>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Kanban
                            </span>
                            <span className="skill-percentage">95%</span>
                          </div>
                          <Progress value={95} className="progress-bar" />
                          <p className="skill-description">Visual management systems for workflow optimization</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Kaizen
                            </span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Continuous improvement initiatives and events</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Value Stream Mapping (VSM)
                            </span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Identifying and eliminating waste in production processes</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              5S Methodology
                            </span>
                            <span className="skill-percentage">95%</span>
                          </div>
                          <Progress value={95} className="progress-bar" />
                          <p className="skill-description">Workplace organization and standardization</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Poka-Yoke
                            </span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Error-proofing mechanisms and systems</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Six Sigma (Green Belt)
                            </span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Statistical methods for process improvement</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>
                              Time Studies
                            </span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Work measurement and process timing analysis</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name flex items-center">
                              <div className="w-2 h-2 rounded-full bg-timmerman-green mr-2"></div>5 Whys Analysis
                            </span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Root cause analysis methodology</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="software" className="mt-8">
                  <Card className="skill-card">
                    <CardContent className="p-8">
                      <h3 className="skill-category-title">Software & Technical Tools</h3>
                      <div className="mb-6">
                        <Badge className="skill-badge">CAD/CAM</Badge>
                        <Badge className="skill-badge-secondary">Engineering Software</Badge>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">SolidWorks</span>
                            <span className="skill-percentage">95%</span>
                          </div>
                          <Progress value={95} className="progress-bar" />
                          <p className="skill-description">3D CAD design and modeling</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">AutoCAD</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">2D and 3D computer-aided design</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">MATLAB</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Technical computing and data analysis</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Microsoft Office Suite</span>
                            <span className="skill-percentage">95%</span>
                          </div>
                          <Progress value={95} className="progress-bar" />
                          <p className="skill-description">Excel, Word, PowerPoint, Project</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">SQL</span>
                            <span className="skill-percentage">80%</span>
                          </div>
                          <Progress value={80} className="progress-bar" />
                          <p className="skill-description">Database management and querying</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">Minitab</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Statistical analysis for quality control</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">CAM Software</span>
                            <span className="skill-percentage">90%</span>
                          </div>
                          <Progress value={90} className="progress-bar" />
                          <p className="skill-description">Computer-aided manufacturing programming</p>
                        </div>
                        <div className="space-y-3 skill-progress hover:translate-x-1 transition-transform duration-300">
                          <div className="flex justify-between items-center">
                            <span className="skill-name">ERP Systems</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <Progress value={85} className="progress-bar" />
                          <p className="skill-description">Enterprise resource planning for manufacturing</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 sm:py-32 bg-timmerman-corporateGreen text-white">
          <div className="container">
            <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Me</h2>
              <div className="section-divider"></div>
              <p className="text-white text-lg">Let's connect and explore how my expertise can drive your success.</p>
            </div>
            <div className="mt-12">
              <div className="mx-auto max-w-md">
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      aria-required="true"
                      aria-invalid={formData.name === ""}
                      className="flex h-10 w-full rounded-md border border-timmerman-beige/20 bg-transparent px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-timmerman-beige/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-timmerman-beige/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="flex h-10 w-full rounded-md border border-timmerman-beige/20 bg-transparent px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-timmerman-beige/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-timmerman-beige/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Your Message"
                      className="flex w-full rounded-md border border-timmerman-beige/20 bg-transparent px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-timmerman-beige/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-timmerman-beige/30 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="bg-timmerman-brownDark hover:bg-timmerman-brown text-white"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? "Sending..." : "Send Message"}
                  </Button>
                  {formStatus.error && <p className="text-red-400 text-sm">{formStatus.error}</p>}
                  {formStatus.success && <p className="text-green-400 text-sm">Message sent successfully!</p>}
                </form>
                <div className="flex gap-6 justify-center mt-6">
                  <a
                    href="https://linkedin.com/in/sharveshayyasamy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6 text-white hover:text-timmerman-beige transition-colors" />
                  </a>
                  <a
                    href="mailto:sharveshayyasamy@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-6 w-6 text-white hover:text-timmerman-beige transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center py-10 bg-timmerman-corporateGreen text-white border-t">
        <div className="mb-4">
          <Link href="/" className="text-white hover:text-timmerman-beige transition-colors">
            Sharvesh Ayyasamy
          </Link>
        </div>
        <p className="text-sm text-timmerman-beige">
          &copy; {new Date().getFullYear()} Sharvesh Ayyasamy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

