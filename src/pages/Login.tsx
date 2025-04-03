
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-clinic-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <Link to="/">
          <h1 className="text-3xl font-bold text-clinic-primary">Smart Clinic</h1>
        </Link>
        <p className="text-clinic-text-secondary mt-2">Integrated Healthcare Management</p>
      </div>
      
      <LoginForm />
      
      <p className="mt-8 text-sm text-muted-foreground">
        <Link to="/" className="text-clinic-secondary hover:underline">
          Go to home page
        </Link>
      </p>
    </div>
  );
};

export default Login;
