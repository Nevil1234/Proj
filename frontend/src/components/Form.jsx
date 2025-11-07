import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';

export default function Form({ 
  fields = [], 
  onSubmit, 
  submitButtonText = 'Submit',
  submitButtonVariant = 'primary',
  loading = false 
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.validate) {
        const error = field.validate(formData[field.name]);
        if (error) newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setAlert({ type: 'error', message: 'Please fix the errors below' });
      return;
    }

    try {
      await onSubmit(formData);
      setAlert({ type: 'success', message: 'Form submitted successfully!' });
      // Reset form
      setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
    } catch (error) {
      setAlert({ type: 'error', message: error.message || 'Something went wrong!' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type || 'text'}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
          error={errors[field.name]}
          required={field.required}
          disabled={loading}
        />
      ))}

      <Button
        type="submit"
        variant={submitButtonVariant}
        disabled={loading}
        className="w-full"
      >
        {loading ? 'Submitting...' : submitButtonText}
      </Button>
    </form>
  );
}

// Example usage:
/*
const fields = [
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', required: true },
  { 
    name: 'age', 
    label: 'Age', 
    type: 'number', 
    validate: (value) => value < 18 ? 'Must be 18 or older' : null 
  },
];

<Form 
  fields={fields}
  onSubmit={async (data) => {
    await api.post('/signup', data);
  }}
  submitButtonText="Sign Up"
/>
*/
