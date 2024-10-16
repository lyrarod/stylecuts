"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 bg-muted">
      <motion.div
        className="container px-4 mx-auto text-sm text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
      >
        <p>&copy; {new Date().getFullYear()} StyleCuts. All rights reserved.</p>
        <p className="mt-2">
          💖 Designed with love for hair enthusiasts everywhere.
        </p>
      </motion.div>
    </footer>
  );
}
