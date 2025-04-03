
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Mock data for doctors and time slots
const DOCTORS = [
  { id: "1", name: "Dr. Priya Sharma", specialty: "Family Medicine" },
  { id: "2", name: "Dr. Arjun Patel", specialty: "Cardiology" },
  { id: "3", name: "Dr. Neha Verma", specialty: "Pediatrics" },
  { id: "4", name: "Dr. Vikram Desai", specialty: "Dermatology" },
];

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
];

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const { toast } = useToast();

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedDoctor || !selectedTime) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a date, doctor, and time slot.",
      });
      return;
    }

    // In a real app, this would send a request to your backend
    console.log({
      date: selectedDate,
      doctorId: selectedDoctor,
      time: selectedTime,
      notes,
    });

    toast({
      title: "Appointment Booked",
      description: `Your appointment has been scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}. Consultation fee: ₹500.`,
    });

    // Reset form and close dialog
    setSelectedDoctor("");
    setSelectedTime("");
    setNotes("");
    setDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-clinic-primary">Schedule Appointment</CardTitle>
        <CardDescription>Select a date to book your appointment</CardDescription>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              disabled={(date) => {
                // Disable weekends and past dates
                const day = date.getDay();
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || day === 0 || day === 6;
              }}
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Selected Date: {selectedDate?.toLocaleDateString()}</h3>
            <p className="text-sm text-muted-foreground">
              Please select a date from the calendar to view available appointments.
            </p>
            
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-clinic-primary hover:bg-clinic-secondary mt-4">
                  Book Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book an Appointment</DialogTitle>
                  <DialogDescription>
                    Fill out the information below to schedule your appointment.
                    <p className="mt-1 font-medium text-sm">Consultation Fee: ₹500</p>
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium col-span-1">
                      Date
                    </label>
                    <div className="col-span-3">
                      <p className="text-sm">{selectedDate?.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium col-span-1">
                      Doctor
                    </label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {DOCTORS.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium col-span-1">
                      Time
                    </label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium col-span-1">
                      Notes
                    </label>
                    <Textarea
                      className="col-span-3"
                      placeholder="Add any special notes or concerns"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button className="bg-clinic-primary hover:bg-clinic-secondary" onClick={handleBookAppointment}>
                    Book Appointment (₹500)
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCalendar;
