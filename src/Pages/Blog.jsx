import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../Components/BlogFilter";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  const latest = searchParams.has("latest");
  const startFrom = latest ? 80 : 1;

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      setPosts(await res.json());
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Our News</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <button>
        <Link to={"/posts/new"}>Add new Post</Link>
      </button>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startFrom
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};
export { Blog };
