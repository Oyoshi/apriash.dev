import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SCLinksSection } from "./LinksSection.style";
import Link, { LinkProps } from "./link";

const LINKS = [
  {
    icon: <FaGithub />,
    to: "https://github.com/Oyoshi",
    title: "Github",
  },
  {
    icon: <FaInstagram />,
    to: "https://www.instagram.com/_rafalolo_",
    title: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    to: "https://www.linkedin.com/in/rafal-apriasz",
    title: "Linkedin",
  },
  {
    to: "mailto:rafal.apriasz@gmail.com",
    title: "Contact Me",
  },
];

const LinksSection = () => (
  <SCLinksSection>
    {LINKS.map((link: LinkProps, idx: number) => (
      <Link key={`LINK_${idx}`} {...link} />
    ))}
  </SCLinksSection>
);

export default LinksSection;
