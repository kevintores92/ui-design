import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Edit2, Plus as PlusIcon, Video, MoreVertical, ChevronRight, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SoftphoneModal } from "@/components/common/SoftphoneModal";
import { ConversationView } from "@/components/messenger/ConversationView";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface RightPanelProps {
  onCollapse: () => void;
  isCollapsed?: boolean;
}

export function RightPanel({ onCollapse, isCollapsed }: RightPanelProps) {
  const [isSoftphoneOpen, setIsSoftphoneOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("messages");

  return (
    <div className="flex flex-col h-full bg-card w-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-0 bg-card border-b border-border/50">
         <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 -ml-2 text-muted-foreground hover:text-foreground"
                onClick={onCollapse}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <div className="h-10 w-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-bold border border-border">
                ER
              </div>
              
              <div>
                 <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-sm text-foreground">Ethan Russo</h2>
                    <Star className="w-3 h-3 text-muted-foreground hover:text-amber-400 cursor-pointer" />
                    <Edit2 className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-primary" />
                 </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10" onClick={() => setIsSoftphoneOpen(true)}>
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
         </div>

         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-10 bg-transparent p-0 gap-6 border-none">
              <TabsTrigger 
                 value="messages" 
                 className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-0 pb-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                 Messages
              </TabsTrigger>
              <TabsTrigger 
                 value="info" 
                 className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-0 pb-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                 Info
              </TabsTrigger>
              <TabsTrigger 
                 value="notes" 
                 className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-0 pb-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                 Notes
              </TabsTrigger>
            </TabsList>
         </Tabs>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <Tabs value={activeTab} className="flex flex-col h-full mt-[-40px]"> 
           <div className="sr-only">
             <TabsList>
               <TabsTrigger value="messages">Messages</TabsTrigger>
               <TabsTrigger value="info">Info</TabsTrigger>
               <TabsTrigger value="notes">Notes</TabsTrigger>
             </TabsList>
           </div>
           
           {/* Messages Tab */}
           <TabsContent value="messages" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col h-full pt-[42px]">
              <ConversationView />
           </TabsContent>

           {/* Info Tab */}
           <TabsContent value="info" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col h-full pt-[42px]">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-6">
                  {/* Form Fields styled like the screenshot */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1.5">
                          <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">First name</Label>
                          <Input defaultValue="Ethan" className="h-9 bg-background/50" />
                       </div>
                       <div className="space-y-1.5">
                          <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Last name</Label>
                          <Input defaultValue="Russo" className="h-9 bg-background/50" />
                       </div>
                    </div>

                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Phone number</Label>
                       <div className="flex gap-2">
                          <Input defaultValue="(727) 756-0779" className="h-9 bg-background/50" />
                          <Button variant="outline" size="sm" className="h-9 px-3 text-xs">Call</Button>
                       </div>
                    </div>

                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Email</Label>
                       <Input defaultValue="ethan.russo@example.com" className="h-9 bg-background/50" />
                    </div>

                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Property address</Label>
                       <div className="flex gap-2">
                          <Input defaultValue="123 Main St, Largo, FL" className="h-9 bg-background/50" />
                          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0"><Edit2 className="w-4 h-4" /></Button>
                       </div>
                    </div>

                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Mailing address</Label>
                       <Input placeholder="Address" className="h-9 bg-background/50" />
                    </div>

                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Outbound number</Label>
                       <Select defaultValue="default">
                          <SelectTrigger className="h-9 bg-background/50">
                             <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="default">FL (727) 555-0123</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>

                     <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Groups</Label>
                       <Select>
                          <SelectTrigger className="h-9 bg-background/50">
                             <SelectValue placeholder="Select group" />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="leads">Leads</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>

                     <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Labels</Label>
                       <Select>
                          <SelectTrigger className="h-9 bg-background/50">
                             <SelectValue placeholder="Select label" />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="hot">Hot</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                  </div>
                </div>
              </ScrollArea>
           </TabsContent>

           {/* Notes Tab */}
           <TabsContent value="notes" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col h-full pt-[42px]">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4">
                   <div className="bg-yellow-500/5 p-3 rounded-lg border border-yellow-500/10">
                      <p className="text-xs text-yellow-500/70 mb-1">Dec 24, 2024 - 2:45 PM</p>
                      <p className="text-sm text-yellow-500/90">Contact mentioned they are looking to sell in Q1 next year. Follow up in January.</p>
                   </div>
                   
                   <div className="relative">
                     <textarea 
                        className="w-full bg-background border border-border rounded-lg p-3 text-sm min-h-[100px] resize-none focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50" 
                        placeholder="Add a note..."
                     ></textarea>
                     <div className="absolute bottom-2 right-2">
                        <Button size="sm" className="h-7 text-xs bg-primary hover:bg-primary/90 text-white">Save</Button>
                     </div>
                   </div>
                </div>
              </ScrollArea>
           </TabsContent>
        </Tabs>
      </div>

      <SoftphoneModal open={isSoftphoneOpen} onOpenChange={setIsSoftphoneOpen} contactName="Ethan Russo" contactNumber="+1 (727) 756-0779" />
    </div>
  );
}
