import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Input from '../components/Input';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    {
      title: 'Fast Development',
      description: 'Pre-built components to speed up your hackathon project',
      icon: '⚡',
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first design with Tailwind CSS',
      icon: '📱',
    },
    {
      title: 'Easy to Customize',
      description: 'Clean code structure for quick modifications',
      icon: '🎨',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your Hackathon Boilerplate
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Everything you need to build your project fast
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
        <p className="text-gray-600 mb-6">
          All components are ready to use. Just customize and deploy!
        </p>
        <Link to="/dashboard">
          <Button variant="success" size="lg">
            Go to Dashboard
          </Button>
        </Link>
      </section>

      {/* Modal Example */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Learn More About This Template"
      >
        <div className="space-y-4">
          <p>
            This boilerplate includes everything you need for a hackathon project:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pre-built UI components (Button, Input, Card, Modal, etc.)</li>
            <li>React Router setup with Layout</li>
            <li>Custom hooks (useFetch, useLocalStorage, etc.)</li>
            <li>API utilities and helpers</li>
            <li>Authentication context</li>
            <li>Responsive navigation</li>
          </ul>
          
          <div className="mt-6">
            <Input
              label="Get Updates"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              variant="primary" 
              className="mt-4 w-full"
              onClick={() => {
                alert(`Thanks for subscribing with ${email}!`);
                setIsModalOpen(false);
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
