
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Privacy Policy</h1>
          <p className="text-clinic-text-secondary">Last updated: June 15, 2023</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12 prose max-w-none text-clinic-text-secondary">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4">Introduction</h2>
          <p>
            Smart Clinic ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Smart Clinic.
          </p>
          <p>
            This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, Smart Clinic. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or use our application.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal Information: Name, email address, phone number, date of birth, gender, and medical history.</li>
            <li>Health Information: Medical records, appointment history, prescriptions, and treatment plans.</li>
            <li>Usage Data: Information on how you use our Service.</li>
            <li>Device Data: Information about your device and internet connection.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our Service</li>
            <li>Improve, personalize, and expand our Service</li>
            <li>Understand and analyze how you use our Service</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and marketing</li>
            <li>Process transactions and manage your account</li>
            <li>Send you appointment reminders and health information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@smartclinic.com<br />
            Phone: +91 (987) 654-3210<br />
            Address: 123 Healthcare Ave, Mumbai, India
          </p>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
