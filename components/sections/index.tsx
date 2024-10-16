"use client";

import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { About } from "./about";
import { Services } from "./services";
import { Features } from "./features";
import { Contact } from "./contact";
import { Newsletter } from "./newsletter";

export const Section = ({
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

export { Hero, About, Services, Features, Contact, Newsletter };
