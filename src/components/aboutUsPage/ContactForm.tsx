import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center mt-10 md:mt-24 border px-2 py-5 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-1/3">
        <div>
          <label htmlFor="name" className="block text-primaryColor">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-primaryColor">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-primaryColor">
            Phone
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-primaryColor">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="bg-primaryColor text-white rounded-3xl w-[120px] "
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
