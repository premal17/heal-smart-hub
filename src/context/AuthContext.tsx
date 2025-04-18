
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { AuthContextType, User, UserRole } from '@/types';
import { authService } from '@/services/api';

// Mock users for development (in a real app, this would be handled by backend)
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Patient',
    email: 'patient@example.com',
    role: 'patient' as UserRole,
    password: 'password123',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Dr. Jane Smith',
    email: 'doctor@example.com',
    role: 'doctor' as UserRole,
    password: 'password123',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin' as UserRole,
    password: 'password123',
    createdAt: new Date().toISOString(),
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('smartClinicUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // In development mode, use mock authentication
      if (process.env.NODE_ENV === 'development' && !import.meta.env.VITE_USE_API) {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        );
        
        if (!foundUser) {
          throw new Error('Invalid email or password');
        }
        
        // Remove password from user object
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword as User);
        
        // Store user in localStorage
        localStorage.setItem('smartClinicUser', JSON.stringify(userWithoutPassword));
        
        toast({
          title: 'Login successful',
          description: `Welcome back, ${foundUser.name}!`,
        });
      } else {
        // Use the actual API for authentication
        const userData = await authService.login(email, password);
        setUser(userData);
        
        // Store user in localStorage
        localStorage.setItem('smartClinicUser', JSON.stringify(userData));
        
        toast({
          title: 'Login successful',
          description: `Welcome back, ${userData.name}!`,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'An error occurred during login',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<User> => {
    setLoading(true);
    
    try {
      // In development mode, use mock registration
      if (process.env.NODE_ENV === 'development' || !import.meta.env.VITE_USE_API) {
        // Check if email is already in use
        const existingUser = MOCK_USERS.find((u) => u.email === email);
        if (existingUser) {
          throw new Error('Email already in use');
        }
        
        // Create a new mock user
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          name,
          email,
          role,
          createdAt: new Date().toISOString(),
        };
        
        // Add to mock users (in a real app, this would be handled by the backend)
        MOCK_USERS.push({ ...newUser, password });
        
        setUser(newUser);
        localStorage.setItem('smartClinicUser', JSON.stringify(newUser));
        
        toast({
          title: 'Registration successful',
          description: `Welcome to Smart Clinic, ${name}!`,
        });

        return newUser;
      } else {
        // Use the actual API for registration
        try {
          const userData = await authService.register(name, email, password, role);
          setUser(userData);
          
          // Store user in localStorage
          localStorage.setItem('smartClinicUser', JSON.stringify(userData));
          
          toast({
            title: 'Registration successful',
            description: `Welcome to Smart Clinic, ${name}!`,
          });

          return userData;
        } catch (apiError) {
          console.error("API registration error:", apiError);
          throw new Error("Registration failed: Unable to connect to the server");
        }
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Registration failed',
        description: error instanceof Error ? error.message : 'An error occurred during registration',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('smartClinicUser');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
