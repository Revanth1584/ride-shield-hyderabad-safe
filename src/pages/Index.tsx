
import React, { useState } from 'react';
import { MapPin, Shield, AlertTriangle, Camera, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardHeader from '@/components/DashboardHeader';
import LiveMap from '@/components/LiveMap';
import VehicleRegistration from '@/components/VehicleRegistration';
import TheftReporting from '@/components/TheftReporting';
import CitizenReporting from '@/components/CitizenReporting';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import OwnershipVerification from '@/components/OwnershipVerification';
import IncentivesSection from '@/components/IncentivesSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-2">
            RideShield Command Portal
          </h1>
          <p className="text-blue-200 text-lg">
            Hyderabad Vehicle Safety & Crime Prevention System
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6 bg-slate-800/50 border-slate-600">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-blue-600">
              <Shield className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="register" className="text-white data-[state=active]:bg-blue-600">
              <MapPin className="w-4 h-4 mr-2" />
              Register Vehicle
            </TabsTrigger>
            <TabsTrigger value="theft" className="text-white data-[state=active]:bg-blue-600">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Theft
            </TabsTrigger>
            <TabsTrigger value="violations" className="text-white data-[state=active]:bg-blue-600">
              <Camera className="w-4 h-4 mr-2" />
              e-Sheher Squad
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-blue-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="verify" className="text-white data-[state=active]:bg-blue-600">
              <Users className="w-4 h-4 mr-2" />
              Verify Owner
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <LiveMap />
              </div>
              <div className="space-y-4">
                <Card className="bg-slate-800/80 border-slate-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-blue-300">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Active Trackers</span>
                      <span className="text-green-400 font-bold">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cases Reported Today</span>
                      <span className="text-yellow-400 font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Recovery Rate</span>
                      <span className="text-green-400 font-bold">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Citizen Reports</span>
                      <span className="text-blue-400 font-bold">156</span>
                    </div>
                  </CardContent>
                </Card>
                <IncentivesSection />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="register">
            <VehicleRegistration />
          </TabsContent>

          <TabsContent value="theft">
            <TheftReporting />
          </TabsContent>

          <TabsContent value="violations">
            <CitizenReporting />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="verify">
            <OwnershipVerification />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
