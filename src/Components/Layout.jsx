//Создаем компонент обертку {Layout} для базового роутинга
// Компонент {Outlet} указывает где будет хранится контент наших страниц
import { Outlet } from "react-router-dom";
// Можно использовать кастомный линк зависящий от активности кнопки
import { CustomLink } from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header className="header">
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/posts"}>Blog</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </header>
      <Outlet />
      <footer className="footer">2023</footer>
    </>
  );
};
export { Layout };
