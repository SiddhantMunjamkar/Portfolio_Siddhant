import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const credentials = [
   {
    id: 1,
    title: "AWS Educate Introduction to Cloud 101 - Training Badge",
    link: "https://www.credly.com/badges/b5978506-4180-4db8-b68b-1df044e3e2db",
    date: "August 2025",
    description:
      "Awarded for completing AWS Educate Introduction to Cloud 101  by successfully completing the required coursework, recognizing consistent and foundational cloud computing understanding.",
    image: "/images/image_of_aws.png",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure  Certified Architect Associate",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E3C63447489984AEDCBA710AE479A383F58725821D79515CF1D31F06107AA38C",
    date: "October 2025",
    description:
      "Validated expertise in Oracle Cloud Infrastructure fundamentals, including core OCI services, networking, compute, storage, security, and cloud architecture best practices.",
    image: "/images/oracle_image.png",
  },
  {
    id: 3,
    title: "Hacktoberfest  Supercontributor",
    link: "https://www.holopin.io/hacktoberfest2025/userbadge/cmh8m1z1v005ll5043oh2rykc",
    date: "October 2025",
    description:
      "Awarded for achieving Supercontributor status in Hacktoberfest 2025 by successfully landing 6+ accepted open-source pull requests, recognizing consistent and high-quality open-source contributions.",
    image: "/images/super_contributor.png",
  },
 
];

function CredentialCard({
  credential,
  index,
}: {
  credential: (typeof credentials)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative w-full"
    >
      <motion.div
        whileHover={{
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          z: 50,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-stone-900/50 transition-all duration-500 w-full h-full flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 cursor-pointer">
          <Image
            src={credential.image || "/placeholder.svg"}
            alt={credential.title}
            width={600}
            height={400}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 bg-white dark:bg-stone-800"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-stone-900/80 dark:bg-stone-950/90 flex items-center justify-center space-x-4"
          >
            <motion.a
              href={credential.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors touch-manipulation"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
          <div className="absolute top-4 right-4 bg-stone-900/80 dark:bg-stone-950/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs sm:text-sm font-normal">
              {credential.date}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
          <h3 className="font-serif text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 text-stone-900 dark:text-stone-100 line-clamp-2">
            {credential.title}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-sm flex-grow">
            {credential.description}
          </p>

          {/* Mobile-only button */}
          <a
            href={credential.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center space-x-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Credential</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Credentialsection() {
  return (
    <section
      id="credentials"
      className="py-16 sm:py-20 md:py-24 bg-stone-50 dark:bg-stone-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 text-stone-900 dark:text-stone-100">
            Credentials
          </h2>
          <div className="w-16 sm:w-24 h-px bg-stone-400 dark:bg-stone-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed px-4">
            Certifications and achievements recognizing expertise in cloud infrastructure, open-source contributions, and full-stack development.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {credentials.map((credential, index) => (
            <CredentialCard
              key={credential.id}
              credential={credential}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
