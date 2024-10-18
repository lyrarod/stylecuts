import { Section } from ".";
import { motion } from "framer-motion";

export function Services() {
  return (
    <Section id="services" className="">
      <div className="flex items-center justify-center w-full mb-16 select-none gap-x-4">
        <h2 className="pb-1 text-3xl font-bold text-center border-b lg:text-4xl xl:text-5xl text-primary border-primary w-fit">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:py-20">
        {services?.map((service, index) => {
          // let delay = 0.3 + index * 0.2;

          return (
            <motion.div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-muted"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false }}
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
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const services = [
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
];
