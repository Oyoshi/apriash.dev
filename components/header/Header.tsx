import Image from "next/image";
import { SCHeader } from "./Header.style";

const Header = () => (
  <SCHeader>
    <Image
      src="/avatar.png"
      alt="Vercel Logo"
      width={150}
      height={150}
      className="image"
    />
    <h1>Rafał Apriasz</h1>
    <p>Software Engineer specialized in frontend technologies</p>
  </SCHeader>
);

export default Header;
