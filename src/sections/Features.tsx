import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Clock, Users, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Features = () => {
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Features section animation
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".stat-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 60%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      title: "Expert Medical Team",
      description:
        "Board-certified infectious disease specialists with decades of HIV care experience.",
    },
    {
      title: "Latest Treatment Options",
      description:
        "Access to cutting-edge therapies and clinical trials for optimal treatment outcomes.",
    },
    {
      title: "Comprehensive Support",
      description:
        "Complete care coordination including mental health, nutrition, and social services.",
    },
    {
      title: "Patient-Centered Care",
      description:
        "Individualized treatment plans designed around each patient's unique needs and goals.",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "98%",
      label: "Treatment Success Rate",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Emergency Support",
    },
    {
      icon: Users,
      value: "50+",
      label: "Healthcare Professionals",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Confidential Care",
    },
  ];

  return (
    <section ref={featuresRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#70deff]/10 text-[#70deff] border-[#70deff]/20">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Leading HIV Care with Compassionate Support
              </h2>
              <p className="text-lg text-gray-600">
                Our multidisciplinary team combines medical expertise with
                personalized care to help patients achieve the best possible
                health outcomes.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#70deff] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="stat-card bg-white border-gray-100 text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#70deff]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
