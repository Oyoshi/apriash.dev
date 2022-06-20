import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SCLinksSection } from "./LinksSection.style";
import Link, { LinkProps } from "./link";

const LINKS = [
  {
    icon: <FaGithub />,
    to: "www.google.pl",
    title: "Github",
  },
  {
    icon: <FaInstagram />,
    to: "www.google.pl",
    title: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    to: "www.google.pl",
    title: "Linkedin",
  },
  {
    to: "www.google.pl",
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
