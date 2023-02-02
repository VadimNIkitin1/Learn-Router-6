import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { CreatePost } from "./Pages/CreatePost";
import { EditPost } from "./Pages/EditPost";
import { Layout } from "./Components/Layout";
import { SinglePage } from "./Pages/SinglePage";
import { Login } from "./Pages/Login";
import { RequireAuth } from "./HOC/RequireAuth";
import { AuthProvider } from "./HOC/AuthProvider";

// Оборачиваем основные компоненты Route в один незакрывающийся компонент Route
// В нем указываем как элемент наш Layout
// Для указания домашней стартовой страницы указываем пропс index

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="contacts" element={<p>Our Contacts</p>} />
              <Route path="team" element={<p>Our Team</p>} />
            </Route>
            <Route path="posts" element={<Blog />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route
              path="posts/new"
              element={
                <RequireAuth>
                  <CreatePost />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
