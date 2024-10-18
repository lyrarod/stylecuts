import { Section } from ".";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Features() {
  return (
    <Section id="features" className="">
      <div className="flex items-center justify-center w-full mb-16 select-none gap-x-4">
        <h2 className="pb-1 text-3xl font-bold text-center border-b lg:text-4xl xl:text-5xl text-primary border-primary w-fit">
          Why Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 md:grid-cols-2 md:py-20">
        {features?.map((feature, index) => {
          // let delay = 0.3 + index * 0.2;

          return (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md dark:bg-muted"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false }}
            >
              <feature.icon className="flex-shrink-0 w-12 h-12 mr-4 text-primary" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const features = [
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
];
