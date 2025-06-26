import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  useEffect(() => {
    gsap.to(".header", {
      // Khi cuộn > 1px thì đổi background thành white + blur
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      duration: 0.3,
      scrollTrigger: {
        // Khi body đã cuộn xuống 1px (tức rời khỏi top) thì trigger animation
        trigger: "body",
        start: "top+=1 top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    // Đổi class bg-white/95 thành bg-transparent, border có thể ẩn luôn hoặc để độ mờ 0
    <header className="header border-b border-gray-100 border-opacity-0 bg-transparent sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" />
          </div>
          <span className="text-xl font-bold text-gray-900">Hi-Vision</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-600 hover:text-[#70deff] transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-[#70deff] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-[#70deff] transition-colors"
          >
            Contact
          </a>
          <Button className="bg-[#70deff] hover:bg-[#5cc9e8] text-white">
            Book Appointment
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
