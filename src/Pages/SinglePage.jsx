// При помощи хука useParams получаем параметры для динамичсеких ссылок
// Хук useNavigate для проходу по истории браузера
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(await res.json());
    }
    fetchPost();
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this Post</Link>
        </>
      )}
    </div>
  );
};
export { SinglePage };
