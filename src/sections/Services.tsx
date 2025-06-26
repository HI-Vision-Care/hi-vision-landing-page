"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  Activity,
  Shield,
  Users,
  Calendar,
  Heart,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Services section animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: UserCheck,
      title: "HIV Testing & Diagnosis",
      description:
        "Confidential, rapid HIV testing with immediate results and counseling support.",
    },
    {
      icon: Activity,
      title: "Antiretroviral Therapy",
      description:
        "Personalized ART regimens with the latest HIV medications and monitoring.",
    },
    {
      icon: Shield,
      title: "PrEP & Prevention",
      description:
        "Pre-exposure prophylaxis and comprehensive prevention education programs.",
    },
    {
      icon: Users,
      title: "Support Groups",
      description:
        "Peer support groups and counseling services for patients and families.",
    },
    {
      icon: Calendar,
      title: "Regular Monitoring",
      description:
        "Ongoing health monitoring, lab work, and treatment adjustments.",
    },
    {
      icon: Heart,
      title: "Holistic Care",
      description:
        "Mental health support, nutrition counseling, and wellness programs.",
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#70deff]/10 text-[#70deff] border-[#70deff]/20">
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Comprehensive HIV Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial testing to ongoing treatment and support, we provide
            complete care tailored to each patient's unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="service-card border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#70deff]" />
                  </div>
                  <CardTitle className="text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
