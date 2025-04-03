
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Mumbai, India",
      type: "Full-time",
      description: "We're looking for an experienced Frontend Developer to join our team and help build innovative healthcare solutions."
    },
    {
      id: 2,
      title: "Healthcare Data Analyst",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Join our analytics team to help transform healthcare data into actionable insights for providers and patients."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote, India",
      type: "Full-time",
      description: "Design intuitive and accessible user interfaces for our healthcare management platform."
    },
  ];

  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Join Our Team</h1>
          <p className="text-xl text-clinic-text-secondary max-w-3xl mx-auto">
            Help us transform healthcare management with technology.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-clinic-primary mb-3">Meaningful Impact</h3>
              <p className="text-clinic-text-secondary">
                Work on solutions that directly improve healthcare delivery and patient outcomes across India.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-clinic-primary mb-3">Innovation-Driven</h3>
              <p className="text-clinic-text-secondary">
                Use cutting-edge technologies to solve complex problems in the healthcare sector.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-clinic-primary mb-3">Growth Opportunities</h3>
              <p className="text-clinic-text-secondary">
                Develop your career with continuous learning, mentorship, and advancement pathways.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-clinic-primary mb-8">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle className="text-clinic-primary">{job.title}</CardTitle>
                  <CardDescription>{job.location} • {job.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-clinic-text-secondary">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-clinic-primary hover:bg-clinic-secondary">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="text-clinic-secondary">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
