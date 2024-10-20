"use client";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: 0, // Initialize as a number
    email: '',
    phone: '',
    membershipType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Convert 'age' field from string to number
    if (name === 'age') {
      setFormData({
        ...formData,
        [name]: Number(value), // Explicitly convert to number
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); 
    // Send formData to an API or handle it according to your needs
  };

  return (
    <div className="flex justify-center text-black p-6 bg-gray-100 h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Membership Type:</label>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select Membership</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <Button type="submit" className="w-full py-2 px-4 bg-red-800 text-white rounded-md">Submit</Button>
      </form>
    </div>
  );
};

export default AdmissionForm;
