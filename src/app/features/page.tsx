import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function FeaturesPage() {
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
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700">Demo Video</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise B2B E-Commerce Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Comprehensive solution for professional contractors and roofing companies with advanced inventory management, sophisticated ordering systems, and enterprise-grade admin capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-600">
            <span className="bg-blue-50 px-3 py-1 rounded-full">Multi-Location Support</span>
          </div>
        </div>
      </section>

      {/* Customer Side Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Streamline your workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An easy to use user interface, combined with powerful backend database functionality, comprehensive ordering and delivering for material orders, and enterprise level administrative capabilities and control. All integrated seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Account System */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  Professional Account System
                </CardTitle>
                <CardDescription>
                  Complete business profiles with 6 dashboard sections including order history, credit management, and account insights.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Inventory System */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  Live Inventory (11+ Categories)
                </CardTitle>
                <CardDescription>
                  Real-time stock tracking across Shingles, Underlayment, Ventilation, Flashings, and more with multi-location support and brand filtering.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Ordering System */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  Professional Ordering
                </CardTitle>
                <CardDescription>
                  Multiple delivery options, bulk pricing with automatic discounts, recurring orders with 5% savings, and flexible payment terms.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Credit Management */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  Credit Management
                </CardTitle>
                <CardDescription>
                  Professional credit applications, Net 30 payment terms, real-time credit tracking, and automated credit limit management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Admin Side Features */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Administrative Control
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete business oversight with powerful analytics and management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products Management */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  Products Management
                </CardTitle>
                <CardDescription>
                  Complete catalog management with categories, brands, pricing, and stock control across multiple locations.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  Revenue tracking, top products, customer analysis, and growth metrics with real-time business intelligence.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Orders Management */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  Orders Management
                </CardTitle>
                <CardDescription>
                  Process all order types including delivery, will call, desk orders, and counter sales with status tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Customer Management */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  Customer Management
                </CardTitle>
                <CardDescription>
                  Credit applications, account management, spending analysis, and customer relationship tools.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Forecasting */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  Forecasting & Planning
                </CardTitle>
                <CardDescription>
                  Inventory forecasting, low stock alerts, seasonal demand analysis, and automated reorder predictions.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Returns Management */}
            <Card className="border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  Returns Management
                </CardTitle>
                <CardDescription>
                  Process returns and exchanges, track return rates, automated refunds, and inventory restoration.
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See how ShingleShop's comprehensive platform can modernize your roofing supply business and boost customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <img src="https://i.ibb.co/ZR4r3k0J/Untitled-design-3-1.png" alt="ShingleShop" className="h-10 w-auto brightness-0 invert opacity-70" />
          </div>
          <p className="text-gray-400 mb-6">Streamlining roofing supply operations nationwide</p>
          <p className="text-gray-500 text-sm">© 2024 ShingleShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
