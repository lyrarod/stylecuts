import { Section } from ".";
import { motion } from "framer-motion";
import { Facebook, MessageCircleIcon, Phone } from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export function Contact() {
  return (
    <Section id="contact" className="">
      <div className="max-w-2xl mx-auto text-center md:py-20">
        <h2 className="mb-8 text-3xl font-bold text-primary">Contact Us</h2>
        <motion.p
          className="mb-8 text-muted-foreground"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          <span className="text-xl">💇‍♀️</span> Ready for a new look?{" "}
          <br className="md:hidden" /> Get in touch with us today!
        </motion.p>
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Phone className="mr-2 size-8 text-primary" />
          <span className="text-xl font-semibold">123-456-7890</span>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          {[
            { icon: MessageCircleIcon, title: "Whatsapp" },
            { icon: InstagramLogoIcon, title: "Instagram" },
            { icon: Facebook, title: "Facebook" },
            { icon: TwitterLogoIcon, title: "Twitter" },
          ].map((social, index) => {
            // let delay = 0.3 + index * 0.2;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 py-8 text-center transition bg-white rounded-md shadow-md cursor-pointer h-max dark:bg-muted hover:bg-primary hover:text-white dark:hover:bg-primary group"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
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
  );
}
