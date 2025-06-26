import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Stethoscope, Shield, Activity } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Ensure elements exist before animating
      const heroElements = {
        badge: document.querySelector(".hero-badge"),
        title: document.querySelector(".hero-title"),
        description: document.querySelector(".hero-description"),
        buttons: document.querySelector(".hero-buttons"),
        stats: document.querySelector(".hero-stats"),
        card: document.querySelector(".hero-card"),
      };

      // Check if all elements exist
      const elementsExist = Object.values(heroElements).every(
        (el) => el !== null
      );

      if (!elementsExist) {
        console.warn(
          "Some hero elements not found, showing without animations"
        );
        return;
      }

      // Create timeline with error handling
      const heroTl = gsap.timeline({
        onComplete: () => console.log("Hero animations completed"),
        onError: (error: any) => console.error("Hero animation error:", error),
      });

      // Set initial states only if elements exist
      gsap.set(
        [
          heroElements.badge,
          heroElements.title,
          heroElements.description,
          heroElements.buttons,
          heroElements.stats,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(heroElements.card, {
        opacity: 0,
        x: 50,
      });

      // Animate elements in sequence
      heroTl
        .to(heroElements.badge, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          heroElements.title,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          heroElements.description,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          heroElements.buttons,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          heroElements.stats,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          heroElements.card,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // Floating animation for hero card (with error handling)
      const floatingAnimation = gsap.to(heroElements.card, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
      });

      // Start floating animation after main timeline completes
      heroTl.call(() => {
        floatingAnimation.play();
      });

      // Cleanup function
      return () => {
        heroTl.kill();
        floatingAnimation.kill();
        clearTimeout(timer);
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="hero-badge bg-[#70deff]/10 text-[#70deff] border-[#70deff]/20">
                Comprehensive HIV Care
              </Badge>
              <h1 className="hero-title text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced HIV Treatment &
                <span className="text-[#70deff]"> Medical Services</span>
              </h1>
              <p className="hero-description text-xl text-gray-600 leading-relaxed">
                Providing compassionate, evidence-based HIV care with
                cutting-edge treatments, comprehensive support services, and
                personalized care plans for every patient.
              </p>
            </div>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#70deff] hover:bg-[#5cc9e8] text-white"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#70deff] text-[#70deff] hover:bg-[#70deff] hover:text-white"
              >
                Learn More
              </Button>
            </div>
            <div className="hero-stats flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hero-card bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-[#70deff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Expert Medical Team
                  </h3>
                  <p className="text-gray-600">Board-certified specialists</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#70deff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Confidential Care
                  </h3>
                  <p className="text-gray-600">Complete privacy protection</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#70deff]/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#70deff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Latest Treatments
                  </h3>
                  <p className="text-gray-600">Cutting-edge therapies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
