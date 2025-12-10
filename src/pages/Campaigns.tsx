import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Plus, Play, Pause, BarChart } from "lucide-react";

export default function Campaigns() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-display">Campaigns</h1>
          <p className="text-muted-foreground mt-2">Manage your outreach campaigns and drip sequences.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" /> New Campaign
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Create Campaign Card */}
        <Card className="md:col-span-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
            <CardDescription>Upload a CSV to start a new outreach sequence.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="campaign-name">Campaign Name</Label>
              <Input id="campaign-name" placeholder="e.g. Q4 Cold Outreach - Austin" className="bg-background" />
            </div>
            
            <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer bg-background/50">
               <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                 <Upload className="w-6 h-6 text-muted-foreground" />
               </div>
               <h3 className="font-medium">Upload Contact List (CSV)</h3>
               <p className="text-sm text-muted-foreground mt-1">Drag & drop or click to browse</p>
            </div>

            <div className="flex justify-end">
              <Button>Next Step</Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
               <div className="text-sm text-muted-foreground">Total Sent (Today)</div>
               <div className="text-2xl font-bold font-mono">1,248</div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-[65%]"></div>
               </div>
             </div>
             
             <div className="space-y-2">
               <div className="text-sm text-muted-foreground">Response Rate</div>
               <div className="text-2xl font-bold font-mono">12.4%</div>
             </div>

             <div className="pt-4">
               <Button variant="outline" className="w-full gap-2">
                 <BarChart className="w-4 h-4" /> View Full Reports
               </Button>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold font-display">Active Campaigns</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-semibold">September High Equity List #{i}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>Running</span>
                    <span>•</span>
                    <span>452 Contacts</span>
                    <span>•</span>
                    <span>Drip Sequence A</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Pause className="w-4 h-4" />
                </Button>
                <Button variant="outline">Manage</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
