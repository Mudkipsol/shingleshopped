import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="border-b border-blue-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="https://i.ibb.co/ZR4r3k0J/Untitled-design-3-1.png" alt="ShingleShop" className="h-12 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule Free Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Demo Video */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Simplified Ordering, Inventory, and Administrative Tracking Software to Enhance Your Business
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Advanced inventory management, sophisticated ordering systems, and professional admin capabilities. Everything you need to modernize your roofing supply business.
            </p>

          </div>

          {/* Demo Video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://go.screenpal.com/player/stream/cTQ3fEnDiwZ?width=1920&height=1080&ff=1"
                  frameBorder="0"
                  allowFullScreen
                  title="ShingleShop Demo Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Streamline your workflow
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              An easy to use user interface, combined with powerful backend database functionality, comprehensive ordering and delivering for material orders, and enterprise level administrative capabilities and control. All integrated seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Inventory */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  Advanced Inventory System
                </CardTitle>
                <CardDescription>
                  Allow your customers to view your inventory in real time, as well as place an order at any time, on any day. Even set approvals for orders if you want an admin to confirm before the system puts it through, we offer full customization to fit your companies wants and needs.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Order Management */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  Professional Ordering System
                </CardTitle>
                <CardDescription>
                  Allow your customers to easily view your current inventory, create an order, and even select and set the delivery.
                </CardDescription>
              </CardHeader>
            </Card>


            {/* Dashboard Analytics */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Comprehensive Admin Suite
                </CardTitle>
                <CardDescription>
                  View a broad scope of product analytics, create accounts for sales reps, and maintain complete control over your business operations.
                </CardDescription>
              </CardHeader>
            </Card>


          </div>
        </div>
      </section>





      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Storefront?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              See how ShingleShop will transform the way your customers interact with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View ShingleShop
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <p className="text-gray-400 mb-6">Streamlining roofing supply operations nationwide</p>
            <Separator className="bg-gray-700 mb-6" />
            <p className="text-gray-500 text-sm">
              © 2025 ShingleShop, LLC. All Rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
