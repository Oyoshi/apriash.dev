import { FC, ReactNode } from "react";
import { SCLink } from "./Link.style";

interface LinkProps {
  to: string;
  title: string;
  icon?: ReactNode;
}

const Link: FC<LinkProps> = ({ to, title, icon }) => {
  return (
    <SCLink href={to}>
      {icon ? icon : null} {title}
    </SCLink>
  );
};

export default Link;
