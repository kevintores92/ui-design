import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit2, CreditCard, ShieldCheck, Smartphone, User, Users, MessageSquare, Phone, Bell, LayoutGrid, DollarSign, BookOpen, LogOut } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "sub-accounts", label: "Sub accounts", icon: Users },
    { id: "messaging", label: "Messaging campaign", icon: MessageSquare },
    { id: "calling", label: "Calling campaign", icon: Phone },
    { id: "membership", label: "Membership", icon: CreditCard },
    { id: "settings", label: "Settings", icon: LayoutGrid },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "affiliate", label: "Affiliate program", icon: DollarSign },
    { id: "resources", label: "Resources", icon: BookOpen },
  ];

  return (
    <div className="flex w-full h-[calc(100vh-64px)] overflow-hidden bg-background">
      {/* Left Settings Sidebar */}
      <div className="w-64 border-r border-border bg-card/20 flex flex-col shrink-0 h-full">
        <div className="p-6">
           <h2 className="text-lg font-semibold text-primary">Profile</h2>
        </div>
        <ScrollArea className="flex-1 px-3">
           <div className="space-y-1">
              {sidebarItems.map((item) => (
                 <Button
                    key={item.id}
                    variant="ghost"
                    className={cn(
                       "w-full justify-start font-medium",
                       activeSection === item.id 
                          ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary" 
                          : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setActiveSection(item.id)}
                 >
                    {/* <item.icon className="w-4 h-4 mr-3 opacity-70" /> */}
                    {item.label}
                 </Button>
              ))}
           </div>
        </ScrollArea>
        <div className="p-4 border-t border-border mt-auto">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
               <LogOut className="w-4 h-4 mr-3" />
               Help & Support
            </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <ScrollArea className="flex-1 h-full">
         <div className="max-w-4xl mx-auto p-12">
            <h1 className="text-3xl font-bold mb-10 font-display">Profile</h1>

            <div className="space-y-8">
               {/* Avatar */}
               <div className="grid grid-cols-[200px_1fr] items-start gap-8">
                  <div className="text-sm text-muted-foreground pt-3">Avatar</div>
                  <div className="flex items-center gap-4">
                     <div className="relative group cursor-pointer">
                        <Avatar className="w-16 h-16 border-2 border-border">
                           <AvatarImage src="https://github.com/shadcn.png" />
                           <AvatarFallback>KT</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1.5 rounded-full shadow-lg">
                           <Edit2 className="w-3 h-3" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* First Name */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="firstName" className="text-sm text-muted-foreground font-normal">First name</Label>
                  <Input id="firstName" defaultValue="Kevin" className="max-w-md bg-card/50" />
               </div>

               {/* Last Name */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="lastName" className="text-sm text-muted-foreground font-normal">Last name</Label>
                  <Input id="lastName" defaultValue="Torres" className="max-w-md bg-card/50" />
               </div>

               {/* Email */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="email" className="text-sm text-muted-foreground font-normal">Email address</Label>
                  <div className="relative max-w-md">
                     <Input id="email" defaultValue="kevintorres92@gmail.com" className="bg-muted/50 text-muted-foreground pr-10" disabled />
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-1 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                        <Edit2 className="w-2.5 h-2.5" />
                     </div>
                  </div>
               </div>

               {/* Company */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="company" className="text-sm text-muted-foreground font-normal flex items-center gap-1">
                     Company name <span className="w-3.5 h-3.5 rounded-full border border-muted-foreground text-[8px] flex items-center justify-center">i</span>
                  </Label>
                  <Input id="company" defaultValue="Tesla" className="max-w-md bg-card/50" />
               </div>

               {/* Mobile */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="mobile" className="text-sm text-muted-foreground font-normal">Mobile number</Label>
                  <Input id="mobile" defaultValue="(929) 298-7966" className="max-w-md bg-muted/50 text-muted-foreground" disabled />
               </div>

               {/* Timezone */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="timezone" className="text-sm text-muted-foreground font-normal">Timezone</Label>
                  <Select defaultValue="ny">
                     <SelectTrigger className="max-w-md bg-card/50">
                        <SelectValue placeholder="Select timezone" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="ny">(UTC -4:00) New York</SelectItem>
                        <SelectItem value="la">(UTC -7:00) Los Angeles</SelectItem>
                        <SelectItem value="chi">(UTC -5:00) Chicago</SelectItem>
                     </SelectContent>
                  </Select>
               </div>

               {/* Password */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label htmlFor="password" className="text-sm text-muted-foreground font-normal">Password</Label>
                  <div className="relative max-w-md">
                     <Input id="password" type="password" defaultValue="password123" className="bg-muted/50 text-muted-foreground pr-10" disabled />
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-1 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                        <Edit2 className="w-2.5 h-2.5" />
                     </div>
                  </div>
               </div>

               <Separator className="my-8" />

               {/* Google Account */}
               <div className="grid grid-cols-[200px_1fr] items-center gap-8">
                  <Label className="text-sm text-muted-foreground font-normal">Connect a google account</Label>
                  <Button variant="outline" className="max-w-[200px] border-border text-foreground gap-2 justify-start pl-3">
                     <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                     </svg>
                     Disconnect
                  </Button>
               </div>
            </div>
         </div>
      </ScrollArea>
    </div>
  );
}
