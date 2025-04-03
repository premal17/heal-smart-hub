
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { CalendarIcon, FileTextIcon, MessageSquareIcon, UserIcon } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <CalendarIcon className="h-12 w-12 text-clinic-primary" />,
      title: "Schedule Appointments",
      description: "Book appointments with doctors easily using our interactive calendar system.",
    },
    {
      icon: <MessageSquareIcon className="h-12 w-12 text-clinic-primary" />,
      title: "Live Chat Assistance",
      description: "Chat with doctors in real-time for quick medical advice and consultation.",
    },
    {
      icon: <FileTextIcon className="h-12 w-12 text-clinic-primary" />,
      title: "Medical Records",
      description: "Access and manage your medical records, prescriptions, and history securely.",
    },
    {
      icon: <UserIcon className="h-12 w-12 text-clinic-primary" />,
      title: "User-friendly Interface",
      description: "Navigate easily through our intuitive interface designed for all users.",
    },
  ];

  const testimonials = [
    {
      quote: "Smart Clinic has revolutionized how I manage my healthcare needs. Scheduling appointments is now a breeze!",
      name: "Sarah Johnson",
      title: "Patient",
    },
    {
      quote: "As a doctor, I find the platform incredibly useful for managing patient appointments and medical records.",
      name: "Dr. Michael Chen",
      title: "Cardiologist",
    },
    {
      quote: "The system's administrative tools make managing our clinic operations much more efficient.",
      name: "Emily Rodriguez",
      title: "Healthcare Administrator",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-clinic-primary">Smart Clinic</span>
            </div>
            <nav className="hidden md:flex space-x-4 items-center">
              <a href="#features" className="text-clinic-text-secondary hover:text-clinic-primary px-3 py-2">
                Features
              </a>
              <a href="#testimonials" className="text-clinic-text-secondary hover:text-clinic-primary px-3 py-2">
                Testimonials
              </a>
              <a href="#contact" className="text-clinic-text-secondary hover:text-clinic-primary px-3 py-2">
                Contact
              </a>
              {user ? (
                <Button asChild className="ml-4 bg-clinic-primary hover:bg-clinic-secondary">
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <div className="flex space-x-2 ml-4">
                  <Button asChild variant="outline" className="text-clinic-secondary">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary">
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-clinic-background to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-clinic-primary mb-6">
              Smart Clinic: Integrated Healthcare Management
            </h1>
            <p className="text-xl text-clinic-text-secondary max-w-3xl mx-auto mb-8">
              A comprehensive platform for patients, doctors, and administrators with real-time communication and efficient healthcare management.
            </p>
            {user ? (
              <Button asChild size="lg" className="bg-clinic-primary hover:bg-clinic-secondary">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-clinic-primary hover:bg-clinic-secondary">
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-clinic-secondary border-clinic-secondary">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clinic-primary">Key Features</h2>
            <p className="mt-4 text-xl text-clinic-text-secondary">
              Discover how Smart Clinic can transform your healthcare experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-clinic-accent rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-clinic-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-clinic-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clinic-primary">Testimonials</h2>
            <p className="mt-4 text-xl text-clinic-text-secondary">
              What our users say about Smart Clinic
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="italic text-clinic-text-secondary mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-clinic-text-secondary">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-clinic-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already managing their healthcare efficiently
          </p>
          <Button asChild size="lg" className="bg-white text-clinic-primary hover:bg-gray-100">
            <Link to="/register">Create an Account</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clinic-primary">Contact Us</h2>
            <p className="mt-4 text-xl text-clinic-text-secondary">
              Have questions? We're here to help you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-clinic-text-secondary">support@smartclinic.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-clinic-text-secondary">+91 (987) 654-3210</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-clinic-text-secondary">123 Healthcare Ave, Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-semibold text-clinic-primary">Smart Clinic</span>
              <p className="mt-2 text-sm text-clinic-text-secondary max-w-xs">
                Integrated healthcare management system with real-time communication capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-3">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/#features" className="text-clinic-text-secondary hover:text-clinic-primary">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-clinic-text-secondary hover:text-clinic-primary">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-clinic-text-secondary hover:text-clinic-primary">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/about" className="text-clinic-text-secondary hover:text-clinic-primary">About</Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-clinic-text-secondary hover:text-clinic-primary">Blog</Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-clinic-text-secondary hover:text-clinic-primary">Careers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/privacy" className="text-clinic-text-secondary hover:text-clinic-primary">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-clinic-text-secondary hover:text-clinic-primary">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-clinic-text-secondary">
            &copy; {new Date().getFullYear()} Smart Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
