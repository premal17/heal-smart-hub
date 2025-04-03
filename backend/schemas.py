
from pydantic import BaseModel, EmailStr, validator
from datetime import datetime
from typing import Optional, List

# User schemas
class UserBase(BaseModel):
    name: str
    email: EmailStr
    role: str
    
    @validator('role')
    def validate_role(cls, v):
        if v not in ['patient', 'doctor', 'admin']:
            raise ValueError('Role must be patient, doctor, or admin')
        return v

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Doctor schemas
class DoctorBase(BaseModel):
    specialty: Optional[str] = None
    experience: Optional[int] = None
    availability: Optional[str] = None

class DoctorCreate(DoctorBase):
    user_id: int

class DoctorResponse(DoctorBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

# Patient schemas
class PatientBase(BaseModel):
    age: Optional[int] = None
    gender: Optional[str] = None
    medical_history: Optional[str] = None

class PatientCreate(PatientBase):
    user_id: int

class PatientResponse(PatientBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

# Appointment schemas
class AppointmentBase(BaseModel):
    patient_id: int
    doctor_id: int
    status: str = "pending"
    scheduled_time: datetime
    notes: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    pass

class AppointmentResponse(AppointmentBase):
    id: int

    class Config:
        from_attributes = True

# Medical Record schemas
class MedicalRecordBase(BaseModel):
    patient_id: int
    doctor_id: int
    diagnosis: str
    prescription: str

class MedicalRecordCreate(MedicalRecordBase):
    pass

class MedicalRecordResponse(MedicalRecordBase):
    id: int
    date: datetime

    class Config:
        from_attributes = True

# Payment schemas
class PaymentBase(BaseModel):
    patient_id: int
    amount: float
    status: str = "pending"
    transaction_id: Optional[str] = None

class PaymentCreate(PaymentBase):
    pass

class PaymentResponse(PaymentBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Message schemas
class MessageBase(BaseModel):
    sender_id: int
    receiver_id: int
    content: str
    read: int = 0

class MessageCreate(MessageBase):
    pass

class MessageResponse(MessageBase):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True

# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str
