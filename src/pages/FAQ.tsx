
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by logging into your patient account, navigating to the Appointments section, and clicking on 'Book New Appointment'. From there, you can select your preferred doctor, date, and time slot."
    },
    {
      question: "Can I change or cancel my appointment?",
      answer: "Yes, you can modify or cancel your appointment up to 24 hours before the scheduled time. Go to 'My Appointments' in your dashboard and select the appointment you wish to modify."
    },
    {
      question: "How do I access my medical records?",
      answer: "Your medical records are available in the 'Medical Records' section of your patient dashboard. You can view past consultations, prescriptions, test results, and other medical documents."
    },
    {
      question: "Is my data secure on Smart Clinic?",
      answer: "Yes, we take data security very seriously. All patient data is encrypted, and we comply with healthcare data protection regulations. We implement strict access controls and regular security audits to ensure your information remains confidential."
    },
    {
      question: "How do I communicate with my doctor?",
      answer: "You can message your doctor directly through the 'Messages' section in your dashboard. For urgent matters, we recommend calling the clinic directly."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, UPI, net banking, and wallet payments. All payment processing is secure and compliant with financial regulations."
    },
    {
      question: "How do I get technical support?",
      answer: "For technical issues, you can contact our support team at support@smartclinic.com or call our helpline at +91 (987) 654-3210. Our technical support is available Monday to Friday, 9 AM to 6 PM."
    },
  ];

  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-clinic-text-secondary">
            Find answers to common questions about Smart Clinic.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-medium text-clinic-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-clinic-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center">
          <p className="text-clinic-text-secondary mb-6">
            Didn't find what you're looking for? Feel free to contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary">
              <Link to="/#contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="text-clinic-secondary">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
