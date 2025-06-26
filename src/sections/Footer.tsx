import logo from "../assets/logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "HIV Testing", href: "#" },
        { name: "Treatment", href: "#" },
        { name: "Prevention", href: "#" },
        { name: "Support Groups", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Patient Portal", href: "#" },
        { name: "Educational Materials", href: "#" },
        { name: "Insurance Info", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" />
              </div>
              <span className="text-xl font-bold">MedCare HIV</span>
            </div>
            <p className="text-gray-400">
              Providing compassionate, comprehensive HIV care and support
              services.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-[#70deff] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(+84) 792 191 402</li>
              <li>cuonghkse182700@fpt.edu.vn</li>
              <li>Tân Phú</li>
              <li>Cà Mau Tiền Giang</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Hi-Vision. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
