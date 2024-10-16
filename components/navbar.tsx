"use client";
import React from "react";
import { Link, animateScroll } from "react-scroll";
import { animate, motion } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-sm backdrop-blur bg-background/60">
      <nav className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <a onClick={() => animateScroll.scrollToTop({ duration: 0 })}>
            <div className="flex items-center cursor-pointer select-none">
              <Scissors className="w-8 h-8 text-primary" />
              <span className="ml-2 text-xl font-bold">StyleCuts</span>
            </div>
          </a>
          <div className="hidden space-x-8 md:flex">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About Us" },
              { to: "services", label: "Services" },
              { to: "features", label: "Features" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                offset={link.to === "home" ? -70 : -68}
                activeClass={"active"}
                className="font-medium transition cursor-pointer hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="items-center hidden gap-x-2 md:flex">
            <ModeToggle />
            <Button asChild>
              <Link to="contact" className="cursor-pointer">
                Contact
              </Link>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <div className="md:hidden">
              <ModeToggle />
            </div>
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center py-8 gap-y-4">
              {[
                { to: "home", label: "Home" },
                { to: "about", label: "About Us" },
                { to: "services", label: "Services" },
                { to: "features", label: "Features" },
                { to: "contact", label: "Contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  spy={true}
                  offset={-270}
                  activeClass={"active"}
                  className="font-medium transition cursor-pointer hover:text-primary"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
