
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const PricingPlan = ({
  name,
  price,
  description,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div className={`rounded-lg p-8 ${highlighted ? 'bg-clinic-primary text-white' : 'bg-white'}`}>
    <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-clinic-primary'}`}>{name}</h3>
    <div className="mt-4 mb-6">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-sm"> / month</span>
    </div>
    <p className={`mb-6 ${highlighted ? 'text-white/80' : 'text-clinic-text-secondary'}`}>
      {description}
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className={`mr-2 h-5 w-5 flex-shrink-0 ${highlighted ? 'text-white' : 'text-clinic-primary'}`} />
          <span className={highlighted ? 'text-white/90' : 'text-clinic-text-secondary'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <Button 
      asChild 
      className={`w-full ${highlighted 
        ? 'bg-white text-clinic-primary hover:bg-gray-100' 
        : 'bg-clinic-primary text-white hover:bg-clinic-secondary'
      }`}
    >
      <Link to="/register">Get Started</Link>
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-clinic-text-secondary max-w-3xl mx-auto">
            Choose the plan that's right for your medical practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PricingPlan 
            name="Basic"
            price="₹1,999" 
            description="Essential features for small clinics"
            features={[
              "Appointment scheduling",
              "Basic patient records",
              "Email notifications",
              "5 staff accounts",
              "Standard support"
            ]} 
          />
          <PricingPlan 
            name="Professional"
            price="₹4,999" 
            description="Complete solution for growing practices"
            features={[
              "All Basic features",
              "Advanced patient records",
              "SMS & email notifications",
              "20 staff accounts",
              "Priority support",
              "Video consultations"
            ]}
            highlighted={true}
          />
          <PricingPlan 
            name="Enterprise"
            price="₹9,999" 
            description="For multi-location healthcare providers"
            features={[
              "All Professional features",
              "Multi-location support",
              "Custom branding",
              "Unlimited staff accounts",
              "Dedicated account manager",
              "API access",
              "Advanced analytics"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-4">Need a custom solution?</h2>
          <p className="text-clinic-text-secondary mb-6">
            Contact us for a tailored plan that meets your specific requirements.
          </p>
          <Button asChild variant="outline" className="text-clinic-secondary">
            <Link to="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
