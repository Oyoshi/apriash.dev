import { FC } from "react";
import { LinkProps } from "./Link.interface";
import { SCLink } from "./Link.style";

const Link: FC<LinkProps> = ({ to, title, icon }) => {
  return (
    <SCLink href={to}>
      {icon ? icon : null} {title}
    </SCLink>
  );
};

export default Link;
