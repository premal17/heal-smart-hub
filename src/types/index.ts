
export type UserRole = 'patient' | 'doctor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface Patient extends User {
  role: 'patient';
  age?: number;
  gender?: string;
  medicalHistory?: string;
}

export interface Doctor extends User {
  role: 'doctor';
  specialty?: string;
  experience?: number;
  availability?: string[];
}

export interface Admin extends User {
  role: 'admin';
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  scheduledTime: string;
  notes?: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  diagnosis: string;
  prescription: string;
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<User>;
  logout: () => void;
}
