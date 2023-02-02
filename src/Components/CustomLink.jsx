// Создание кастомного Линка
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      style={{
        color: match ? "blue" : "white",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
