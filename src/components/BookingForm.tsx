
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const services = [
    { id: 'comprehensive-eye-exam', name: 'Comprehensive Eye Examination' },
    { id: 'contact-lens', name: 'Contact Lens Fitting' },
    { id: 'pediatric-eye-care', name: 'Pediatric Eye Care' },
    { id: 'prescription-glasses', name: 'Prescription Glasses' },
    { id: 'ocular-disease', name: 'Ocular Disease Management' },
    { id: 'laser-consultation', name: 'Laser Surgery Consultation' },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here would be the actual API call to your backend
    // For now, we'll simulate a successful booking

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: "Booking Successful!",
        description: "Your appointment has been scheduled. You will receive a confirmation email shortly.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="glass-card p-8 animate-scale-in">
      <h3 className="text-2xl font-bold text-optometry-dark mb-6 text-center">Book Your Appointment</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-optometry-dark mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-optometry-dark mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-optometry-dark mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-optometry-dark mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-optometry-dark mb-1">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-optometry-dark mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={today}
              value={formData.date}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-optometry-dark mb-1">
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="input-field"
            >
              <option value="" disabled>Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-optometry-dark mb-1">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="input-field"
            placeholder="Please share any specific concerns or requirements..."
          ></textarea>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Book Appointment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
