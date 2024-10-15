"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Scissors,
  Star,
  Phone,
  Facebook,
  Mail,
  MessageCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

import { motion } from "framer-motion";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-scroll";

const MotionButton = motion.create(Button);

const Section = ({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 overflow-hidden ${cn(className)}`}>
    <div className="container px-4 mx-auto">{children}</div>
  </section>
);

export function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log("Subscribed:", email);
    setEmail("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 shadow-sm backdrop-blur bg-background/60">
        <nav className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link to="home" offset={-70}>
              <div className="flex items-center cursor-pointer select-none">
                <Scissors className="w-8 h-8 text-primary" />
                <span className="ml-2 text-xl font-bold">StyleCuts</span>
              </div>
            </Link>
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
                  href={"#"}
                  spy={true}
                  hashSpy={true}
                  offset={link.to === "home" ? -70 : -67}
                  activeClass={"active"}
                  className="font-medium transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="items-center hidden gap-x-2 md:flex">
              <ModeToggle />
              <Button asChild>
                <Link
                  to="contact"
                  href={"#"}
                  spy={true}
                  hashSpy={true}
                  offset={0}
                >
                  Contact
                </Link>
              </Button>
            </div>

            <div className="flex md:hidden">
              <div className="md:hidden">
                <ModeToggle />
              </div>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
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
                    href={"#"}
                    spy={true}
                    hashSpy={true}
                    offset={-270}
                    activeClass={"active"}
                    className=""
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

      <main className="flex-grow">
        <Section
          id="home"
          className="relative min-h-[90vh] grid place-items-center"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stylish haircut collage"
              className="object-cover w-full h-full opacity-25"
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              className="mb-4 text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: 60 }}
              transition={{ delay: 0.3, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Transform Your Look with{" "}
              <span className="text-primary drop-shadow-md">StyleCuts</span>
            </motion.h1>
            <motion.p
              className="mb-8 text-sm md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 60 }}
              transition={{ delay: 0.5, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Experience the art of hairstyling like never before
            </motion.p>
            <MotionButton
              size="lg"
              initial={{ opacity: 0, y: 60 }}
              transition={{ delay: 0.7, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Book Now
            </MotionButton>
          </div>
        </Section>

        <Section id="about" className="">
          <h2 className="mb-16 text-3xl font-bold text-center text-primary">
            About Us
          </h2>
          <div className="flex flex-col-reverse items-center justify-between md:py-20 md:flex-row">
            <motion.div
              className="pr-8 my-8 md:w-1/2 md:mb-0"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-xl font-bold text-primary">About Us</h2>
              <p className="mb-4">
                At StyleCuts, we believe that every haircut is a work of art.
                Our team of expert stylists combines creativity with precision
                to give you a look that&apos;s uniquely you.
              </p>
              <p className="">
                With years of experience and a passion for staying ahead of the
                latest trends, we&apos;re committed to helping you look and feel
                your absolute best.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our team of stylists"
                className="object-cover w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <div className="flex flex-col-reverse items-center justify-between md:flex-row-reverse md:py-20">
            <motion.div
              className="my-8 md:pl-8 md:w-1/2 md:mb-0"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-xl font-bold text-primary">About Us</h2>
              <p className="mb-4 ">
                At StyleCuts, we believe that every haircut is a work of art.
                Our team of expert stylists combines creativity with precision
                to give you a look that&apos;s uniquely you.
              </p>
              <p className="">
                With years of experience and a passion for staying ahead of the
                latest trends, we&apos;re committed to helping you look and feel
                your absolute best.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our team of stylists"
                className="object-cover w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </Section>

        <Section id="services" className="">
          <h2 className="mb-16 text-3xl font-bold text-center text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:py-20">
            {[
              {
                name: "Haircuts",
                image:
                  "https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Precision cuts tailored to your face shape and style preferences.",
              },
              {
                name: "Coloring",
                image:
                  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "From subtle highlights to bold transformations, we bring your color dreams to life.",
              },
              {
                name: "Styling",
                image:
                  "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Special occasion or everyday glam, we'll style your hair to perfection.",
              },
              {
                name: "Coloring",
                image:
                  "https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Special occasion or everyday glam, we'll style your hair to perfection.",
              },
              {
                name: "Haircuts",
                image:
                  "https://images.unsplash.com/photo-1633681138600-295fcd688876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Precision cuts tailored to your face shape and style preferences.",
              },
              {
                name: "Styling",
                image:
                  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Precision cuts tailored to your face shape and style preferences.",
              },
            ].map((service, index) => {
              let delay = 0.3 + index * 0.2;

              return (
                <motion.div
                  key={index}
                  className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-muted"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay }}
                  viewport={{ once: true }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        <Section id="features" className="">
          <h2 className="mb-16 text-3xl font-bold text-center text-primary">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 sm:grid-cols-2 md:py-20">
            {[
              {
                icon: Star,
                title: "Expert Stylists",
                description:
                  "Our team of professional stylists stays up-to-date with the latest trends and techniques.",
              },
              {
                icon: Star,
                title: "Premium Products",
                description:
                  "We use only the highest quality hair care products to ensure the best results for your hair.",
              },
              {
                icon: Star,
                title: "Relaxing Atmosphere",
                description:
                  "Enjoy a serene salon experience in our modern and comfortable space.",
              },
              {
                icon: Star,
                title: "Satisfaction Guaranteed",
                description:
                  "Your happiness is our priority. We're not satisfied unless you love your new look.",
              },
              {
                icon: Star,
                title: "Expert Stylists",
                description:
                  "Our team of professional stylists stays up-to-date with the latest trends and techniques.",
              },
              {
                icon: Star,
                title: "Premium Products",
                description:
                  "We use only the highest quality hair care products to ensure the best results for your hair.",
              },
            ].map((feature, index) => {
              let delay = 0.3 + index * 0.2;

              return (
                <motion.div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-lg shadow-md dark:bg-muted"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="flex-shrink-0 w-12 h-12 mr-4 text-primary" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        <Section id="contact" className="">
          <div className="max-w-2xl mx-auto text-center md:py-20">
            <h2 className="mb-8 text-3xl font-bold text-primary">Contact Us</h2>
            <motion.p
              className="mb-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              💇‍♀️ Ready for a new look? <br className="md:hidden" /> Get in touch
              with us today!
            </motion.p>
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
            >
              <Phone className="mr-2 size-8 text-primary" />
              <span className="text-xl font-semibold">123-456-7890</span>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {[
                { icon: InstagramLogoIcon, title: "Instagram" },
                { icon: Facebook, title: "Facebook" },
                { icon: TwitterLogoIcon, title: "Twitter" },
                { icon: MessageCircleIcon, title: "Whatsapp" },
              ].map((social, index) => {
                let delay = 1 + index * 0.2;

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 py-8 text-center transition bg-white rounded-md shadow-md cursor-pointer h-max dark:bg-muted hover:bg-primary hover:text-white dark:hover:bg-primary group"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="mr-2 size-7 group-hover:text-white text-primary" />
                    <span className="text-muted-foreground group-hover:text-white">
                      {social.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        <Section id="newsletter" className="bg-secondary md:py-24">
          <motion.div
            className="max-w-4xl mx-auto text-center md:py-20"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-xl font-bold md:text-3xl">
              Stay Stylish with Our Newsletter
            </h2>
            <p className="mb-8 text-sm text-muted-foreground md:text-base">
              Subscribe for the latest hair trends, styling tips, and exclusive
              offers!
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <div className="relative w-full max-w-md">
                <Mail className="absolute transform -translate-y-1/2 text-muted-foreground left-3 top-1/2" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 pl-10 bg-background placeholder:text-muted-foreground"
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-max">
                Subscribe
              </Button>
            </form>
            {showAlert && (
              <Alert className="mt-4 text-green-700 bg-green-100 border-green-400">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  You&apos;ve been subscribed to our newsletter.
                </AlertDescription>
              </Alert>
            )}
          </motion.div>
        </Section>
      </main>

      <footer className="py-8 bg-muted">
        <motion.div
          className="container px-4 mx-auto text-sm text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} StyleCuts. All rights reserved.
          </p>
          <p className="mt-2">
            Designed with love 💖 for hair enthusiasts everywhere.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
