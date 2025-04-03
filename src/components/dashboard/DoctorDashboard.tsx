
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, ClockIcon, CheckIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for doctor appointments
const UPCOMING_APPOINTMENTS = [
  {
    id: "1",
    patientName: "John Smith",
    patientAge: 45,
    date: "2023-06-15",
    time: "10:00 AM",
    reason: "Annual checkup",
    status: "confirmed",
  },
  {
    id: "2",
    patientName: "Emily Johnson",
    patientAge: 32,
    date: "2023-06-15",
    time: "11:30 AM",
    reason: "Migraine consultation",
    status: "confirmed",
  },
  {
    id: "3",
    patientName: "Michael Brown",
    patientAge: 58,
    date: "2023-06-15",
    time: "2:00 PM",
    reason: "Follow-up appointment",
    status: "confirmed",
  },
];

const PENDING_APPOINTMENTS = [
  {
    id: "4",
    patientName: "Sarah Wilson",
    patientAge: 29,
    date: "2023-06-18",
    time: "9:00 AM",
    reason: "Skin rash examination",
    status: "pending",
  },
  {
    id: "5",
    patientName: "Robert Davis",
    patientAge: 62,
    date: "2023-06-20",
    time: "3:30 PM",
    reason: "Blood pressure check",
    status: "pending",
  },
];

// Mock data for today's patients
const TODAY_PATIENTS = [
  {
    id: "1",
    name: "John Smith",
    time: "10:00 AM",
    status: "Checked In",
  },
  {
    id: "2",
    name: "Emily Johnson",
    time: "11:30 AM",
    status: "Waiting",
  },
  {
    id: "3",
    name: "Michael Brown",
    time: "2:00 PM",
    status: "Not Arrived",
  },
];

const DoctorDashboard = () => {
  const today = new Date().toLocaleDateString();
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-clinic-primary">Doctor Dashboard</h2>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
              <p className="text-3xl font-bold">{UPCOMING_APPOINTMENTS.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
              <p className="text-3xl font-bold">{PENDING_APPOINTMENTS.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Completed Appointments</p>
              <p className="text-3xl font-bold">142</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Today's Schedule</CardTitle>
              <CardDescription>
                {today} - Your appointments for today
              </CardDescription>
            </div>
            <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary">
              <Link to="/appointments">View All</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {UPCOMING_APPOINTMENTS.map((appointment) => (
              <div 
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-clinic-accent rounded-full flex items-center justify-center text-clinic-primary">
                    {appointment.patientName.substring(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium">{appointment.patientName}</p>
                    <p className="text-sm text-muted-foreground">
                      Age: {appointment.patientAge} • {appointment.reason}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium">{appointment.time}</p>
                  </div>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <XIcon className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Appointment Requests */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Appointment Requests</CardTitle>
          <CardDescription>
            Pending appointment requests that need your approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {PENDING_APPOINTMENTS.length > 0 ? (
              PENDING_APPOINTMENTS.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="flex flex-wrap md:flex-nowrap items-start md:items-center justify-between p-4 border rounded-lg"
                >
                  <div className="mb-3 md:mb-0">
                    <p className="font-medium">{appointment.patientName}</p>
                    <p className="text-sm text-muted-foreground">
                      Age: {appointment.patientAge} • {appointment.reason}
                    </p>
                    <div className="flex items-center text-sm mt-1">
                      <CalendarIcon className="mr-1 h-4 w-4 text-clinic-primary" />
                      <span>{new Date(appointment.date).toLocaleDateString()}</span>
                      <ClockIcon className="ml-3 mr-1 h-4 w-4 text-clinic-primary" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                      <CheckIcon className="h-4 w-4 mr-1" /> Approve
                    </Button>
                    <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700">
                      <XIcon className="h-4 w-4 mr-1" /> Decline
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-4 text-muted-foreground">
                No pending appointment requests.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Patient Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Patient Status</CardTitle>
          <CardDescription>
            Status of your patients for today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 font-medium">Patient Name</th>
                  <th className="pb-3 font-medium">Time</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {TODAY_PATIENTS.map((patient) => (
                  <tr key={patient.id} className="border-b">
                    <td className="py-3">{patient.name}</td>
                    <td className="py-3">{patient.time}</td>
                    <td className="py-3">
                      <Badge variant="outline" 
                        className={`${
                          patient.status === "Checked In" 
                            ? "border-green-500 text-green-700 bg-green-50"
                            : patient.status === "Waiting"
                            ? "border-yellow-500 text-yellow-700 bg-yellow-50" 
                            : "border-gray-500 text-gray-700 bg-gray-50"
                        }`}
                      >
                        {patient.status}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
