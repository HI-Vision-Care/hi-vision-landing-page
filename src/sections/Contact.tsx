import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for appointments or urgent questions",
      info: "(555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a message anytime",
      info: "info@medcarehiv.com",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Visit our modern medical facility",
      info: "123 Medical Center Dr\nHealthcare City, HC 12345",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#70deff]/10 text-[#70deff] border-[#70deff]/20">
            Contact Us
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and help you access the care you
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card
                key={index}
                className="border-gray-100 text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-[#70deff]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <p className="font-semibold text-[#70deff] whitespace-pre-line">
                  {contact.info}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
