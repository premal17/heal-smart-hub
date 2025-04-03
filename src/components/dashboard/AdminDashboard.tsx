
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { UsersIcon, CalendarIcon, FileTextIcon, CreditCardIcon } from "lucide-react";

// Mock data for charts and stats
const appointmentData = [
  { name: "Jan", appointments: 65 },
  { name: "Feb", appointments: 59 },
  { name: "Mar", appointments: 80 },
  { name: "Apr", appointments: 81 },
  { name: "May", appointments: 90 },
  { name: "Jun", appointments: 125 },
];

const paymentData = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
];

const userStatsData = [
  { name: "Doctors", count: 24 },
  { name: "Patients", count: 487 },
  { name: "Staff", count: 18 },
];

// Recent users
const RECENT_USERS = [
  {
    id: "1",
    name: "Thomas Wilson",
    email: "thomas@example.com",
    role: "Patient",
    joinDate: "2023-06-12",
  },
  {
    id: "2",
    name: "Dr. Emma Johnson",
    email: "emma@example.com",
    role: "Doctor",
    joinDate: "2023-06-10",
    specialty: "Cardiology",
  },
  {
    id: "3",
    name: "Alex Brown",
    email: "alex@example.com",
    role: "Patient",
    joinDate: "2023-06-09",
  },
];

// Recent appointments
const RECENT_APPOINTMENTS = [
  {
    id: "1",
    patientName: "Thomas Wilson",
    doctorName: "Dr. Emma Johnson",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: "2",
    patientName: "Alex Brown",
    doctorName: "Dr. Mark Smith",
    date: "2023-06-16",
    time: "11:30 AM",
    status: "pending",
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-clinic-primary">Admin Dashboard</h2>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Total Users</p>
            <p className="text-3xl font-bold">529</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <CalendarIcon className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Appointments</p>
            <p className="text-3xl font-bold">48</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <FileTextIcon className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Medical Records</p>
            <p className="text-3xl font-bold">157</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
              <CreditCardIcon className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Revenue</p>
            <p className="text-3xl font-bold">$12.5k</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Appointments Overview</CardTitle>
            <CardDescription>Monthly appointment statistics</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={appointmentData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="appointments"
                  stroke="#3BACB6"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue statistics</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={paymentData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#2F8F9D" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="users" className="w-full">
            <div className="border-b px-6">
              <TabsList className="justify-start -mb-px">
                <TabsTrigger value="users" className="data-[state=active]:border-b-2 data-[state=active]:border-clinic-primary rounded-none border-b-2 border-transparent px-4">
                  Users
                </TabsTrigger>
                <TabsTrigger value="appointments" className="data-[state=active]:border-b-2 data-[state=active]:border-clinic-primary rounded-none border-b-2 border-transparent px-4">
                  Appointments
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="users" className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="py-3 px-6 text-left font-medium">Name</th>
                      <th className="py-3 px-6 text-left font-medium">Email</th>
                      <th className="py-3 px-6 text-left font-medium">Role</th>
                      <th className="py-3 px-6 text-left font-medium">Join Date</th>
                      <th className="py-3 px-6 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_USERS.map((user) => (
                      <tr key={user.id} className="border-b">
                        <td className="py-3 px-6">{user.name}</td>
                        <td className="py-3 px-6">{user.email}</td>
                        <td className="py-3 px-6">{user.role}</td>
                        <td className="py-3 px-6">{new Date(user.joinDate).toLocaleDateString()}</td>
                        <td className="py-3 px-6">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t text-center">
                <Button asChild variant="outline">
                  <Link to="/users">View All Users</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="appointments" className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="py-3 px-6 text-left font-medium">Patient</th>
                      <th className="py-3 px-6 text-left font-medium">Doctor</th>
                      <th className="py-3 px-6 text-left font-medium">Date & Time</th>
                      <th className="py-3 px-6 text-left font-medium">Status</th>
                      <th className="py-3 px-6 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_APPOINTMENTS.map((appointment) => (
                      <tr key={appointment.id} className="border-b">
                        <td className="py-3 px-6">{appointment.patientName}</td>
                        <td className="py-3 px-6">{appointment.doctorName}</td>
                        <td className="py-3 px-6">
                          {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        </td>
                        <td className="py-3 px-6">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              appointment.status === "confirmed" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                          </span>
                        </td>
                        <td className="py-3 px-6">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t text-center">
                <Button asChild variant="outline">
                  <Link to="/appointments">View All Appointments</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary py-6">
          <Link to="/users/add">Add New User</Link>
        </Button>
        <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary py-6">
          <Link to="/appointments/manage">Manage Appointments</Link>
        </Button>
        <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary py-6">
          <Link to="/reports">Generate Reports</Link>
        </Button>
        <Button asChild className="bg-clinic-primary hover:bg-clinic-secondary py-6">
          <Link to="/settings">System Settings</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
