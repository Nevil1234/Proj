import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import useToggle from '../hooks/useToggle';

export default function DashboardPage() {
  const [showAlert, toggleAlert] = useToggle(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', color: 'text-blue-600' },
    { label: 'Revenue', value: '$45,678', change: '+23%', color: 'text-green-600' },
    { label: 'Active Projects', value: '56', change: '+8%', color: 'text-purple-600' },
    { label: 'Tasks Completed', value: '892', change: '+15%', color: 'text-orange-600' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toggleAlert();
      setFormData({ title: '', description: '' });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Button variant="primary">New Project</Button>
      </div>

      {/* Alert */}
      {showAlert && (
        <Alert
          type="success"
          message="Your data has been saved successfully!"
          onClose={toggleAlert}
        />
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color} mt-2`}>{stat.value}</p>
            <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Card */}
        <Card title="Create New Item" subtitle="Fill in the details below">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Title"
              placeholder="Enter title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({ title: '', description: '' })}
              >
                Clear
              </Button>
            </div>
          </form>
        </Card>

        {/* Recent Activity Card */}
        <Card title="Recent Activity" subtitle="Latest updates from your projects">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border-b pb-3 last:border-b-0">
                  <h4 className="font-semibold text-gray-800">Activity {item}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item} hours ago</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Charts Placeholder */}
      <Card title="Analytics" subtitle="Performance metrics and insights">
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Chart component placeholder - Add your favorite chart library!</p>
        </div>
      </Card>
    </div>
  );
}
