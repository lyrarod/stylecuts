"use client";
import React from "react";
import { Section } from ".";
import { motion } from "framer-motion";
import { Mail, Mails } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log("Subscribed:", email);
    setEmail("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Section id="newsletter" className="bg-secondary md:py-24">
      <motion.div
        className="container flex flex-col max-w-4xl mx-auto text-center md:py-20"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <Mails className="self-center mb-8 md:size-12 size-8 text-primary" />
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
  );
}
