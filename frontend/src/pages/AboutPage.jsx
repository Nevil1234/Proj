import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function AboutPage() {
  const team = [
    { name: 'John Doe', role: 'Full Stack Developer', emoji: '👨‍💻' },
    { name: 'Jane Smith', role: 'UI/UX Designer', emoji: '🎨' },
    { name: 'Mike Johnson', role: 'Backend Developer', emoji: '⚙️' },
  ];

  const techStack = [
    'React 19',
    'React Router',
    'Tailwind CSS',
    'Vite',
    'ESLint',
  ];

  return (
    <div className="space-y-12">
      {/* About Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Project</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a complete boilerplate designed to help you build your hackathon project 
          quickly and efficiently. It includes all the essential components and utilities 
          you need to get started right away.
        </p>
      </section>

      {/* Tech Stack */}
      <Card title="Tech Stack" subtitle="Built with modern technologies">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center" hover>
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features List */}
      <Card title="What's Included" subtitle="Everything you need to start building">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Components</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Button, Input, Card</li>
              <li>Modal, Alert, Loading</li>
              <li>Header, Footer</li>
              <li>Fully responsive</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Utilities</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>API helpers</li>
              <li>Custom hooks</li>
              <li>Helper functions</li>
              <li>Constants & config</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">State Management</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Auth context</li>
              <li>Theme context</li>
              <li>Local storage hooks</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Pages</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Home page</li>
              <li>Dashboard</li>
              <li>404 page</li>
              <li>Routing setup</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Customize?</h2>
        <p className="text-gray-600 mb-6">
          Fork this project and make it your own!
        </p>
        <Button variant="primary" size="lg">
          Start Building
        </Button>
      </div>
    </div>
  );
}
