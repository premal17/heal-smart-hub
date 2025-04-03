
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Telemedicine in India",
      excerpt: "How digital healthcare is revolutionizing patient care in urban and rural India.",
      date: "June 15, 2023",
      author: "Dr. Priya Sharma",
      category: "Healthcare Technology"
    },
    {
      id: 2,
      title: "Understanding Preventive Healthcare",
      excerpt: "Why regular check-ups are essential for maintaining optimal health and preventing diseases.",
      date: "May 28, 2023",
      author: "Dr. Rajesh Kumar",
      category: "Wellness"
    },
    {
      id: 3,
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Addressing mental health issues openly and effectively in the Indian healthcare system.",
      date: "April 12, 2023",
      author: "Dr. Ananya Patel",
      category: "Mental Health"
    },
  ];

  return (
    <div className="min-h-screen bg-clinic-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clinic-primary mb-4">Smart Clinic Blog</h1>
          <p className="text-xl text-clinic-text-secondary max-w-3xl mx-auto">
            Insights, tips, and news about healthcare and wellness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{post.category}</div>
                <CardTitle className="text-clinic-primary">{post.title}</CardTitle>
                <CardDescription>{post.date} • {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-clinic-text-secondary">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          ))}
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

export default Blog;
