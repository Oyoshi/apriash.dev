import Image from "next/image";
import { SCHeader } from "./Header.style";
import { useThemeContext } from "hooks/useThemeContext";

const Header = () => {
  const { switchTheme } = useThemeContext();

  return (
    <SCHeader>
      <Image
        src="/avatar.png"
        alt="Michelangelo David Sculpture"
        width={150}
        height={150}
        className="image"
        onClick={switchTheme}
      />
      <div className="text">
        <h1>Rafał Apriasz</h1>
        <p>Software Engineer specialized in frontend technologies</p>
      </div>
    </SCHeader>
  );
};

export default Header;
