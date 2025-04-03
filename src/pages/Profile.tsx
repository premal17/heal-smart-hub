
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("555-123-4567"); // Mock data
  const [specialty, setSpecialty] = useState("Cardiology"); // For doctors
  const [experience, setExperience] = useState("15"); // For doctors
  const [age, setAge] = useState("42"); // For patients
  const [gender, setGender] = useState("Male"); // For patients
  const [medicalHistory, setMedicalHistory] = useState("No known conditions"); // For patients
  
  const handleSaveProfile = () => {
    // In a real app, this would send an API request to update the profile
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-clinic-primary">Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center">
            <Avatar className="h-32 w-32 bg-clinic-primary text-white text-4xl">
              <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-semibold">{user?.name}</h3>
            <Badge className="mt-2 bg-clinic-primary">
              {user?.role === "patient"
                ? "Patient"
                : user?.role === "doctor"
                ? "Doctor"
                : "Admin"}
            </Badge>
            <p className="text-sm text-muted-foreground mt-2">{user?.email}</p>
            
            <div className="w-full mt-6 space-y-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Feature coming soon",
                    description: "This feature will be available in a future update.",
                  });
                }}
              >
                Change Password
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Feature coming soon",
                    description: "This feature will be available in a future update.",
                  });
                }}
              >
                Upload Photo
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="medical">
                  {user?.role === "doctor" ? "Professional Info" : "Medical Info"}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <div className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="clinic-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="clinic-input"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="clinic-input"
                      />
                    </div>
                    
                    {user?.role === "patient" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Input
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="clinic-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="clinic-input"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="medical">
                <div className="space-y-4 pt-4">
                  {user?.role === "doctor" ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="specialty">Specialty</Label>
                          <Input
                            id="specialty"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            className="clinic-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Input
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="clinic-input"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          placeholder="A brief description of your professional background and expertise"
                          className="clinic-input"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="medicalHistory">Medical History</Label>
                        <Textarea
                          id="medicalHistory"
                          rows={4}
                          value={medicalHistory}
                          onChange={(e) => setMedicalHistory(e.target.value)}
                          className="clinic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="allergies">Allergies</Label>
                        <Input
                          id="allergies"
                          placeholder="e.g. Penicillin, Peanuts"
                          className="clinic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medications">Current Medications</Label>
                        <Input
                          id="medications"
                          placeholder="List any medications you're currently taking"
                          className="clinic-input"
                        />
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6">
            <Button variant="ghost">Cancel</Button>
            <Button onClick={handleSaveProfile} className="bg-clinic-primary hover:bg-clinic-secondary">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
