import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function GetStartedPage() {
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
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Schedule Free Consultation</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Transformation Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule a personalized demo and see how ShingleShop can revolutionize your roofing supply operations.
          </p>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Schedule Your Demo</CardTitle>
                <CardDescription>
                  Tell us about your business and we'll customize a demo just for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input id="company" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select your role</option>
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="operations">Operations</option>
                      <option value="it">IT/Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      id="employees"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">When do you want to start?</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Challenges
                    </label>
                    <Textarea
                      id="challenges"
                      rows={3}
                      placeholder="What challenges is your business facing that ShingleShop could help solve?"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule My Demo
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Discovery Call</h3>
                      <p className="text-gray-600 text-sm">We'll learn about your business, current processes, and specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Customized Demo</h3>
                      <p className="text-gray-600 text-sm">See ShingleShop in action with scenarios relevant to your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Implementation Plan</h3>
                      <p className="text-gray-600 text-sm">Get a detailed roadmap for integrating ShingleShop with your operations.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900">Demo Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Live inventory management walkthrough
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Customer ordering experience
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Dashboard and reporting features
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Integration with your systems
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      ROI analysis and business insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help Choosing?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Not sure if ShingleShop is right for your business? Our team can help you evaluate your options.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Speak with an Expert
                  </Button>
                </Link>
              </div>
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
