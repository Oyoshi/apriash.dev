import { SCLinksSection } from "./LinksSection.style";
import Link, { LinkProps } from "./link";
import { LINKS } from "./LinksSection.constant";

const LinksSection = () => (
  <SCLinksSection>
    {LINKS.map((link: LinkProps, idx: number) => (
      <Link key={`LINK_${idx}`} {...link} />
    ))}
  </SCLinksSection>
);

export default LinksSection;
