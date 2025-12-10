import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Mic, MicOff, PhoneOff, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SoftphoneModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactName: string;
  contactNumber: string;
}

export function SoftphoneModal({ open, onOpenChange, contactName, contactNumber }: SoftphoneModalProps) {
  const [callStatus, setCallStatus] = useState<"connecting" | "connected" | "ended">("connecting");
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (open) {
      setCallStatus("connecting");
      const timer = setTimeout(() => {
        setCallStatus("connected");
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setDuration(0);
    }
  }, [open]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callStatus === "connected" && open) {
      interval = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus, open]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleHangup = () => {
    setCallStatus("ended");
    setTimeout(() => {
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xs p-6 bg-slate-950 border-slate-800 text-white shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Call with {contactName}</DialogTitle>
          <DialogDescription>Softphone interface</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center space-y-8 py-4">
          
          {/* Contact Info */}
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 relative">
               <User className="w-8 h-8 text-slate-400" />
               <span className={cn(
                 "absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-slate-950",
                 callStatus === "connected" ? "bg-emerald-500" : "bg-amber-500"
               )}></span>
            </div>
            <h3 className="text-xl font-semibold">{contactName}</h3>
            <p className="text-sm text-slate-400">{contactNumber}</p>
            <p className={cn(
              "text-xs font-mono mt-1",
              callStatus === "connected" ? "text-emerald-400" : "text-slate-500"
            )}>
              {callStatus === "connecting" ? "Calling..." : 
               callStatus === "ended" ? "Call Ended" : 
               formatDuration(duration)}
            </p>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-[240px]">
            <Button 
              variant="secondary" 
              size="icon" 
              className={cn(
                "h-14 w-14 rounded-full transition-all",
                isMuted ? "bg-white text-slate-950 hover:bg-slate-200" : "bg-slate-800 text-white hover:bg-slate-700"
              )}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            
            <div className="flex items-center justify-center">
               {/* Spacer or Keypad button */}
            </div>

            <Button 
              variant="destructive" 
              size="icon" 
              className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
              onClick={handleHangup}
            >
              <PhoneOff className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="w-full pt-4 border-t border-slate-800">
             <div className="flex justify-between items-center text-xs text-slate-500">
               <span>From: (512) 555-0123</span>
               <span className="text-emerald-500/80">Twilio Connected</span>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
