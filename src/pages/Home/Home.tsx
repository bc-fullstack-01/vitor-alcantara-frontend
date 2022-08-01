import { useEffect, useState } from "react";
import { CustomAppBar } from "../../components/CustomAppBar/CustomAppBar";
import { PostCard } from "../../components/PostCard/PostCard";

import server from "../../api/server";
import { Post } from "../../models/Post";
import { Divider } from "@mui/material";

export function Home() {
  const token = localStorage.getItem("accessToken");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await server.get("/feed", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [token]);

  return (
    <div>
      <CustomAppBar title="Home" />
      <h1 style={{ marginTop: "100px" }}>Feed</h1>
      <div style={{ marginTop: "56px" }}>
        {posts.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
