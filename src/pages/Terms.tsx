
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Terms of Service</h1>
          <p className="text-clinic-text-secondary">Last updated: June 15, 2023</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12 prose max-w-none text-clinic-text-secondary">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4">1. Introduction</h2>
          <p>
            Welcome to Smart Clinic. By accessing our website or using our application, you agree to be bound by these Terms of Service and our Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">2. Use of Service</h2>
          <p>
            Smart Clinic provides an integrated healthcare management platform that connects patients, doctors, and administrators. You may use our Service only as permitted by these Terms and any applicable laws.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">3. Account Registration</h2>
          <p>
            To use certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">4. User Responsibilities</h2>
          <p>
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of the Service complies with these Terms</li>
            <li>Providing accurate personal and health information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">5. Medical Disclaimer</h2>
          <p>
            Smart Clinic is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">6. Payment Terms</h2>
          <p>
            Certain aspects of the Service may require payment. All payments are non-refundable unless otherwise specified. We may change our fees at any time with notice.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Smart Clinic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4 mt-8">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@smartclinic.com<br />
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

export default Terms;
