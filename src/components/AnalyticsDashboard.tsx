
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, AlertTriangle, Shield, MapPin } from 'lucide-react';

const AnalyticsDashboard = () => {
  const theftHotspots = [
    { area: 'LB Nagar', cases: 61, color: '#ef4444' },
    { area: 'Kukatpally', cases: 52, color: '#f97316' },
    { area: 'Dilsukhnagar', cases: 48, color: '#eab308' },
    { area: 'Mehdipatnam', cases: 35, color: '#84cc16' },
    { area: 'KPHB', cases: 28, color: '#06b6d4' },
    { area: 'SR Nagar', cases: 24, color: '#8b5cf6' }
  ];

  const timePatterns = [
    { hour: '6AM', thefts: 2 },
    { hour: '9AM', thefts: 8 },
    { hour: '12PM', thefts: 15 },
    { hour: '3PM', thefts: 22 },
    { hour: '6PM', thefts: 35 },
    { hour: '9PM', thefts: 28 },
    { hour: '12AM', thefts: 12 },
    { hour: '3AM', thefts: 5 }
  ];

  const recoveryData = [
    { name: 'Recovered', value: 78, color: '#10b981' },
    { name: 'Under Investigation', value: 15, color: '#f59e0b' },
    { name: 'Unresolved', value: 7, color: '#ef4444' }
  ];

  const monthlyTrends = [
    { month: 'Jan', thefts: 45, recoveries: 35 },
    { month: 'Feb', thefts: 52, recoveries: 42 },
    { month: 'Mar', thefts: 38, recoveries: 30 },
    { month: 'Apr', thefts: 61, recoveries: 48 },
    { month: 'May', thefts: 55, recoveries: 45 },
    { month: 'Jun', thefts: 42, recoveries: 38 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Cases</p>
                <p className="text-2xl font-bold text-white">248</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-xs text-slate-400 mt-1">This Month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Recovery Rate</p>
                <p className="text-2xl font-bold text-green-400">78%</p>
              </div>
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-xs text-green-400 mt-1">↑ 5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Trackers</p>
                <p className="text-2xl font-bold text-blue-400">2,847</p>
              </div>
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xs text-blue-400 mt-1">↑ 12% new registrations</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Citizen Reports</p>
                <p className="text-2xl font-bold text-orange-400">1,256</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-xs text-orange-400 mt-1">↑ 23% engagement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theft Hotspots */}
        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardHeader>
            <CardTitle className="text-red-400">Theft Hotspots - Hyderabad</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={theftHotspots}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="area" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="cases" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recovery Statistics */}
        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardHeader>
            <CardTitle className="text-green-400">Recovery Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={recoveryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {recoveryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Time Pattern Analysis */}
        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardHeader>
            <CardTitle className="text-yellow-400">Theft Time Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timePatterns}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line type="monotone" dataKey="thefts" stroke="#eab308" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="bg-slate-800/80 border-slate-600 text-white">
          <CardHeader>
            <CardTitle className="text-purple-400">Monthly Trends (2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="thefts" fill="#ef4444" radius={[2, 2, 0, 0]} />
                <Bar dataKey="recoveries" fill="#10b981" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Area-wise detailed stats */}
      <Card className="bg-slate-800/80 border-slate-600 text-white">
        <CardHeader>
          <CardTitle className="text-blue-400">Area-wise Detailed Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {theftHotspots.map((area, index) => (
              <div key={area.area} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{area.area}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    index < 2 ? 'bg-red-900 text-red-300' : 
                    index < 4 ? 'bg-yellow-900 text-yellow-300' : 
                    'bg-green-900 text-green-300'
                  }`}>
                    {index < 2 ? 'High Risk' : index < 4 ? 'Medium Risk' : 'Low Risk'}
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Total Cases:</span>
                    <span className="text-red-400">{area.cases}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recovered:</span>
                    <span className="text-green-400">{Math.floor(area.cases * 0.78)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Patrols:</span>
                    <span className="text-blue-400">{Math.floor(area.cases / 10)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
