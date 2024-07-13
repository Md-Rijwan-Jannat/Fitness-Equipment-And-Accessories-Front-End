import React from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/types";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Testimonials from "../homePage/testimonials/Testimonials";
import SectionTittle from "../ui/sectionTittle";

// Sample data
const teamMembers: TeamMember[] = [
  {
    name: "Aisha Rahman",
    role: "Chief Financial Officer",
    bio: "Aisha has a decade of experience in financial management and strategic planning.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Ibrahim Khan",
    role: "Chief Technology Officer",
    bio: "Ibrahim is a tech visionary with 15 years in software development and IT leadership.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Fatima Hassan",
    role: "Head of Human Resources",
    bio: "Fatima specializes in talent acquisition and organizational development.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Omar Siddiqui",
    role: "Head of Operations",
    bio: "Omar is an expert in optimizing operational efficiency and workflow management.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Layla Amin",
    role: "Chief Innovation Officer",
    bio: "Layla drives innovation and leads research and development initiatives.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Yusuf Ahmed",
    role: "Head of Sales",
    bio: "Yusuf has a strong background in sales strategy and customer relationship management.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Zainab Ali",
    role: "Chief Legal Officer",
    bio: "Zainab is a seasoned legal expert with extensive experience in corporate law.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Mohammed Hasan",
    role: "Head of Customer Service",
    bio: "Mohammed is dedicated to ensuring exceptional customer satisfaction and support.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12 px-2 py-5 rounded-lg shadow-lg border"
      >
        <SectionTittle tittle="Company Overview" />
        <p className="text-buttonHoverColor mb-4">
          At the forefront of the fitness industry for over a decade, we pride
          ourselves on delivering top-quality equipment and accessories that
          meet the diverse needs of fitness enthusiasts around the globe. Our
          commitment to promoting health and wellness through innovative
          products and exceptional customer service is unwavering. Here's a
          deeper look at our mission, vision, and core values:
        </p>
        <ul className="list-disc list-inside text-buttonHoverColor space-y-2">
          <li>
            <strong>Mission:</strong> To promote health and wellness through
            innovative products and excellent customer service.
          </li>
          <li>
            <strong>Vision:</strong> To become the leading provider of fitness
            solutions worldwide.
          </li>
          <li>
            <strong>Core Values:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>
                Integrity: We uphold the highest standards of integrity in all
                our actions.
              </li>
              <li>
                Innovation: We continuously seek innovative solutions to improve
                our products and services.
              </li>
              <li>
                Customer Focus: We prioritize our customers' needs and strive to
                exceed their expectations.
              </li>
              <li>
                Quality: We provide top-quality products that are reliable and
                durable.
              </li>
              <li>
                Community: We are committed to supporting and giving back to our
                community.
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-buttonHoverColor mt-4">
          Our journey began with a simple goal: to make fitness accessible and
          enjoyable for everyone. Over the years, we have expanded our product
          line to include a wide range of fitness equipment and accessories, all
          designed with the user in mind. From home gyms to commercial fitness
          centers, our products are trusted by fitness enthusiasts and
          professionals alike.
        </p>
        <p className="text-buttonHoverColor mt-4">
          We believe in the power of innovation and are constantly exploring new
          ways to enhance the fitness experience. Our dedicated team of experts
          works tirelessly to develop cutting-edge products that meet the
          evolving needs of our customers. With a focus on quality and
          performance, we ensure that every product we offer is built to last.
        </p>
        <p className="text-buttonHoverColor mt-4">
          Join us on our mission to promote health and wellness. Whether you're
          a beginner or a seasoned athlete, we have the right tools to help you
          achieve your fitness goals. Together, we can make the world a
          healthier, fitter place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mb-12"
      >
        <SectionTittle tittle="Meet Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="border p-4 rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-primaryColor">
                {member.name}
              </h3>
              <p className="text-md text-primaryColor font-semibold text[17px]">
                {member.role}
              </p>
              <p className="text-primaryColor poppins-regular">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primaryColor mb-4">
          Contact Information
        </h2>
        <p className="text-buttonHoverColor">
          We would love to hear from you! If you have any questions or feedback,
          please reach out to our technical manager:
        </p>
        <ContactInfo />
        <ContactForm />
      </motion.div>

      {/* Testimonial */}
      <Testimonials />
    </section>
  );
};

export default AboutUsPage;
