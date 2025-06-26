import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // CTA section animation
    gsap.fromTo(
      ".cta-content",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={ctaRef} className="py-20 bg-[#70deff]">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="cta-content max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Start Your Journey to Better Health?
          </h2>
          <p className="text-xl text-white/90">
            Take the first step towards comprehensive HIV care. Our team is here
            to support you every step of the way with compassionate, expert
            medical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#70deff] hover:bg-gray-100"
            >
              Schedule Appointment
              <Calendar className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#70deff] hover:bg-gray-100 hover:text-[#70deff]"
            >
              Call Now: (555) 123-4567
              <Phone className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
