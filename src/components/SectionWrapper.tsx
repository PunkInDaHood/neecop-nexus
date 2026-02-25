import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`py-20 ${className}`}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

export default SectionWrapper;
