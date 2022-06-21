import Image from "next/image";
import { SCHeader } from "./Header.style";
import { useThemeContext } from "hooks/useThemeContext";

const Header = () => {
  const { themeType, switchTheme } = useThemeContext();

  return (
    <SCHeader>
      <Image
        src="/avatar_dark_theme.png"
        alt="Michelangelo David Sculpture"
        width={150}
        height={150}
        className={`image ${themeType === "light" ? "hide" : "show"}`}
        onClick={switchTheme}
      />
      <div className="image-wrapper">
        <Image
          src="/avatar_light_theme.png"
          alt="Michelangelo David Sculpture With Sunglasses"
          width={150}
          height={150}
          className={`image ${themeType === "light" ? "show" : "hide"}`}
          onClick={switchTheme}
        />
      </div>
      <div className="text">
        <h1>Rafał Apriasz</h1>
        <p>Software Engineer specialized in frontend technologies</p>
      </div>
    </SCHeader>
  );
};

export default Header;
