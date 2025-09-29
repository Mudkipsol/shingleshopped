import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="https://i.ibb.co/ZR4r3k0J/Untitled-design-3-1.png" alt="ShingleShop" className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule Free Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ShingleShop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing B2C roofing supply operations through modern technology and streamlined business management.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Born from a vision to modernize an industry still relying on outdated processes.
              </p>
            </div>

            <div className="space-y-12">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">The Problem We Saw</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Our founders witnessed firsthand how roofing supply companies were struggling with outdated technology.
                    Fax machines, manual inventory tracking, and paper-based customer management were the norm in an age
                    where automation, artificial intelligence, and digitized business management systems were transforming
                    every other industry.
                  </p>
                  <p>
                    These companies were missing out on efficiency gains, losing customers to poor service experiences,
                    and struggling to compete with businesses that had embraced modern technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    ShingleShop was created to help streamline the logistics of sales for B2C roofing supply companies.
                    We focus on streamlining sales operations while providing broader and more efficient oversight of
                    company inventory, customer relationships, and financial management.
                  </p>
                  <p>
                    Our platform bridges the gap between traditional roofing supply operations and modern business
                    management, enabling companies to serve their customers better while reducing operational overhead.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">The Solution</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    We've built a comprehensive B2B e-commerce platform that replaces fax machines with real-time
                    digital ordering, manual inventory tracking with automated systems, and disconnected processes
                    with integrated business management tools.
                  </p>
                  <p>
                    Our technology empowers roofing supply companies to operate efficiently in the digital age while
                    providing their contractor customers with the modern, seamless experience they expect.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-blue-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Innovation</CardTitle>
                <CardDescription>
                  We continuously evolve our platform to stay ahead of industry needs and technological advances.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-blue-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Reliability</CardTitle>
                <CardDescription>
                  Our platform is built to be dependable, ensuring your business operations run smoothly every day.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-blue-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Partnership</CardTitle>
                <CardDescription>
                  We work closely with our clients to understand their unique needs and provide tailored solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Modernize Your Operations?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the roofing supply companies that have already transformed their business with ShingleShop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-gray-400 mb-6">Streamlining roofing supply operations nationwide</p>
          <p className="text-gray-500 text-sm">© 2025 ShingleShop, LLC. All Rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
