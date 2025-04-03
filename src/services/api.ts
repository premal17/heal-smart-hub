
import { User, Appointment, MedicalRecord } from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Helper to get the authentication token from localStorage
const getToken = (): string | null => {
  const user = localStorage.getItem('smartClinicUser');
  return user ? JSON.parse(user).token : null;
};

// Helper to handle API requests
const apiRequest = async <T>(
  endpoint: string, 
  method: string = 'GET', 
  data?: any
): Promise<T> => {
  const token = getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const config: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };
  
  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Something went wrong');
  }
  
  return response.json();
};

// Authentication services
export const authService = {
  login: async (email: string, password: string) => {
    const data = await apiRequest<{ access_token: string; token_type: string }>(
      '/api/auth/login', 
      'POST', 
      { email, password }
    );
    
    // Get user profile after login
    const userProfile = await apiRequest<User>('/api/users/me', 'GET', undefined);
    
    // Combine token and user profile
    return {
      ...userProfile,
      token: data.access_token,
    };
  },
  
  register: async (name: string, email: string, password: string, role: string) => {
    const userData = await apiRequest<User>(
      '/api/auth/register', 
      'POST', 
      { name, email, password, role }
    );
    
    // Login after successful registration
    return authService.login(email, password);
  },
  
  getCurrentUser: async () => {
    return apiRequest<User>('/api/users/me', 'GET', undefined);
  },
};

// Appointment services
export const appointmentService = {
  getAppointments: async () => {
    return apiRequest<Appointment[]>('/api/appointments', 'GET', undefined);
  },
  
  createAppointment: async (appointmentData: Omit<Appointment, 'id'>) => {
    return apiRequest<Appointment>('/api/appointments', 'POST', appointmentData);
  },
  
  updateAppointment: async (id: string, status: string) => {
    return apiRequest<Appointment>(`/api/appointments/${id}/status`, 'PUT', { status });
  },
};

// Medical Records services
export const medicalRecordService = {
  getRecords: async (patientId: string) => {
    return apiRequest<MedicalRecord[]>(`/api/records/${patientId}`, 'GET', undefined);
  },
  
  addRecord: async (recordData: Omit<MedicalRecord, 'id' | 'date'>) => {
    return apiRequest<MedicalRecord>('/api/records/add', 'POST', recordData);
  },
};

// Chat services
export const chatService = {
  getChats: async (userId: string) => {
    return apiRequest<any[]>(`/api/chat/${userId}`, 'GET', undefined);
  },
  
  sendMessage: async (message: { senderId: string, receiverId: string, content: string }) => {
    return apiRequest<any>('/api/chat/send', 'POST', message);
  },
};

export default {
  auth: authService,
  appointments: appointmentService,
  medicalRecords: medicalRecordService,
  chat: chatService,
};
