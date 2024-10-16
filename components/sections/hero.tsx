import { Section } from ".";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const MotionButton = motion.create(Button);

  return (
    <Section
      id="home"
      className="relative min-h-[80vh] grid place-items-center"
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
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
        >
          Transform Your Look with{" "}
          <span className="text-primary drop-shadow-md">StyleCuts</span>
        </motion.h1>
        <motion.p
          className="mb-8 text-sm md:text-xl text-muted-foreground px-10 sm:px-0"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false }}
        >
          Experience the art of hairstyling like never before
        </motion.p>
        <MotionButton
          size="lg"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: false }}
        >
          Book Now
        </MotionButton>
      </div>
    </Section>
  );
}
