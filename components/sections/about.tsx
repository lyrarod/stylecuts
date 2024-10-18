import { Scissors } from "lucide-react";
import { Section } from ".";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="">
      <div className="flex items-center justify-center w-full mb-16 select-none gap-x-4">
        <h2 className="pb-1 text-3xl font-bold text-center border-b lg:text-4xl xl:text-5xl text-primary border-primary w-fit">
          About Us
        </h2>
      </div>
      <div className="flex flex-col-reverse items-center justify-between md:py-20 lg:flex-row">
        <motion.div
          className="pr-8 my-8 lg:w-1/2 md:mb-0"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <h2 className="mb-4 text-xl font-bold text-primary">About Us</h2>
          <p className="mb-4">
            At StyleCuts, we believe that every haircut is a work of art. Our
            team of expert stylists combines creativity with precision to give
            you a look that&apos;s uniquely you.
          </p>
          <p className="">
            With years of experience and a passion for staying ahead of the
            latest trends, we&apos;re committed to helping you look and feel
            your absolute best.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our team of stylists"
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between lg:flex-row-reverse md:py-20">
        <motion.div
          className="my-8 lg:pl-8 lg:w-1/2 md:mb-0"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <h2 className="mb-4 text-xl font-bold text-primary">About Us</h2>
          <p className="mb-4">
            At StyleCuts, we believe that every haircut is a work of art. Our
            team of expert stylists combines creativity with precision to give
            you a look that&apos;s uniquely you.
          </p>
          <p className="">
            With years of experience and a passion for staying ahead of the
            latest trends, we&apos;re committed to helping you look and feel
            your absolute best.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <img
            src="https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our team of stylists"
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </Section>
  );
}
