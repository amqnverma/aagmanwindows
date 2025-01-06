import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { MasonryGrid } from "@/components/masonry-grid"

const galleryImages = [
  { src: "/placeholder.svg?height=400&width=300", alt: "Window 1", width: 300, height: 400 },
  { src: "/placeholder.svg?height=600&width=300", alt: "Window 2", width: 300, height: 600 },
  { src: "/placeholder.svg?height=500&width=300", alt: "Window 3", width: 300, height: 500 },
  { src: "/placeholder.svg?height=450&width=300", alt: "Window 4", width: 300, height: 450 },
  { src: "/placeholder.svg?height=550&width=300", alt: "Window 5", width: 300, height: 550 },
  { src: "/placeholder.svg?height=350&width=300", alt: "Window 6", width: 300, height: 350 },
  { src: "/placeholder.svg?height=480&width=300", alt: "Window 7", width: 300, height: 480 },
  { src: "/placeholder.svg?height=420&width=300", alt: "Window 8", width: 300, height: 420 },
  { src: "/placeholder.svg?height=520&width=300", alt: "Window 9", width: 300, height: 520 },
]

export default function WindowBrand() {
  return (
    (<div className="min-h-screen bg-background">
      <header
        className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 12h18" />
                <path d="M12 3v18" />
              </svg>
            </div>
            <span className="text-xl font-bold">AAGMAN</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="gap-2">
              <Calculator className="h-4 w-4" />
              Calculate Your Window
            </Button>
            <Button variant="outline">Purchase</Button>
            <Button variant="ghost">About</Button>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern home with large windows"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20">
          <div className="container h-full flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Transform Your Space with Premium Windows
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Elevate your home with our expertly crafted windows, designed for both beauty and functionality.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="container py-12 space-y-24">
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight">Types of Windows</h2>
              <p className="text-lg text-muted-foreground">
                Discover our premium selection of modern window solutions
              </p>
            </div>
            <Button variant="link" className="gap-2">
              See gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=450&width=600"
                    alt="Slider two track window"
                    width={600}
                    height={450}
                    className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Slider Two Track</CardTitle>
                <CardDescription>
                  Modern sliding windows with dual tracks for smooth operation and maximum ventilation control.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=450&width=600"
                    alt="Slider three track window"
                    width={600}
                    height={450}
                    className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Slider Three Track</CardTitle>
                <CardDescription>
                  Triple-track sliding windows offering enhanced flexibility and broader opening options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=450&width=600"
                    alt="Open window"
                    width={600}
                    height={450}
                    className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Open Window</CardTitle>
                <CardDescription>
                  Traditional open-style windows designed for maximum visibility and natural light.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning window installations and get inspired for your next project
            </p>
          </div>
          <MasonryGrid images={galleryImages} />
        </section>

        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our windows and services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of windows do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of window types including slider two track, slider three track, casement windows, bay windows, and custom designs. Each type is available in various sizes and finishes to suit your specific needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is your warranty policy?</AccordionTrigger>
                <AccordionContent>
                  Our windows come with a comprehensive warranty that covers materials and workmanship for up to 20 years. This includes coverage for frame, glass, and hardware components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer installation services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide professional installation services with all our window purchases. Our team of certified installers ensures proper fitting and sealing for optimal performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How energy efficient are your windows?</AccordionTrigger>
                <AccordionContent>
                  Our windows are designed with energy efficiency in mind, featuring double or triple glazing options, low-E coatings, and thermal breaks. Many of our products exceed energy efficiency standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-8 w-8">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 12h18" />
                  <path d="M12 3v18" />
                </svg>
              </div>
              <span className="text-xl font-bold">AAGMAN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium window solutions for modern homes. Quality craftsmanship since 1995.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="h-auto p-0">Slider Windows</Button></li>
              <li><Button variant="link" className="h-auto p-0">Casement Windows</Button></li>
              <li><Button variant="link" className="h-auto p-0">Bay Windows</Button></li>
              <li><Button variant="link" className="h-auto p-0">Custom Solutions</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="h-auto p-0">About Us</Button></li>
              <li><Button variant="link" className="h-auto p-0">Contact</Button></li>
              <li><Button variant="link" className="h-auto p-0">Careers</Button></li>
              <li><Button variant="link" className="h-auto p-0">Blog</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1234 Window Street</li>
              <li>City, State 12345</li>
              <li>contact@aagman.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Aagman Windows. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Privacy Policy</Button>
              <Button variant="ghost" size="sm">Terms of Service</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>)
  );
}

