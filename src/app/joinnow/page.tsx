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
    <div className="flex justify-center items-center text-black p-6 bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base">Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base">Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base">Membership Type:</label>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          >
            <option value="">Select Membership</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <Button type="submit" className="w-full py-2 px-4 bg-red-800 text-white rounded-md text-sm sm:text-base">Submit</Button>
      </form>
    </div>
  );
};

export default AdmissionForm;
