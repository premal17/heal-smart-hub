
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">About Smart Clinic</h1>
          <p className="text-xl text-clinic-text-secondary max-w-3xl mx-auto">
            Learn about our mission, vision, and the team behind Smart Clinic.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4">Our Mission</h2>
          <p className="text-clinic-text-secondary mb-6">
            To revolutionize healthcare management by providing an integrated platform that connects patients, 
            doctors, and administrators, making healthcare accessible, efficient, and patient-centric.
          </p>
          
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4">Our Vision</h2>
          <p className="text-clinic-text-secondary mb-6">
            To become the leading healthcare management platform in India, transforming how healthcare 
            services are delivered and accessed, while maintaining the highest standards of patient care and data security.
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

export default About;
