import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+919731766082'; // Phone number from Footer.tsx

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace('+', '')}`} // WhatsApp link
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security best practice
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat with us on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton; 