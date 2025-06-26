import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Codepen, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Team = () => {
  const teamRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Team section animation
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50, rotationY: 15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Kim Cương",
      title: "Chief Executive Officer",
      description:
        "Định hướng chiến lược, quản lý toàn bộ hoạt động công ty và đảm bảo tầm nhìn sản phẩm.",
      image: "./src/assets/cuong.jpg",
      linkedin: "#",
      instagram: "https://www.instagram.com/_the.dia.mond/",
    },
    {
      name: "Bảo Thư",
      title: "Chief Marketing Officer",
      description:
        "Chịu trách nhiệm lên kế hoạch marketing, xây dựng thương hiệu và tìm kiếm cơ hội tăng trưởng trên thị trường.",
      image: "./src/assets/thu.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Bá Thành",
      title: "Chief AI Officer",
      description:
        "Lãnh đạo nhóm AI, xây dựng mô hình machine learning và đảm bảo tính khả dụng của các giải pháp AI trong sản phẩm.",
      image: "./src/assets/thanh1.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Minh Hiếu",
      title: "Chief Operating Officer",
      description:
        "Quản lý quy trình vận hành, tối ưu hóa luồng làm việc và đảm bảo các phòng ban phối hợp mượt mà.",
      image: "./src/assets/hieu.jpg",
      linkedin: "#",
      instagram: "https://www.instagram.com/__nmhiu/",
    },
    {
      name: "Công Thành",
      title: "BackEnd Lead",
      description:
        "Chịu trách nhiệm thiết kế kiến trúc server, tối ưu API và đảm bảo hệ thống backend hoạt động ổn định.",
      image: "./src/assets/thanh2.jpg",
      linkedin: "#",
      instagram: "https://www.instagram.com/tdc_woty/",
    },
    {
      name: "Đăng Khoa",
      title: "Chief Technology Officer",
      description:
        "Định hướng công nghệ, nghiên cứu và ứng dụng các giải pháp kỹ thuật mới để nâng cao hiệu năng sản phẩm.",
      image: "./src/assets/khoa.jpg",
      linkedin: "#",
      instagram: "https://www.instagram.com/dkhoa_happy/",
    },
  ];

  return (
    <section id="team" ref={teamRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#70deff]/10 text-[#70deff] border-[#70deff]/20">
            Our Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Meet Our Expert Medical Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of specialists brings decades of experience in
            HIV care, research, and patient support to provide you with the
            highest quality medical services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="team-card border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardHeader className="text-center p-6">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#70deff]/20"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-[#70deff] rounded-full flex items-center justify-center">
                      <Codepen className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">
                  {member.name}
                </CardTitle>
                <div className="text-[#70deff] font-semibold mb-3">
                  {member.title}
                </div>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {member.description}
                </CardDescription>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-[#70deff]/10 rounded-full flex items-center justify-center hover:bg-[#70deff] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.instagram}
                    className="w-8 h-8 bg-[#70deff]/10 rounded-full flex items-center justify-center hover:bg-[#70deff] hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
