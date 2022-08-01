import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CustomAppBar } from "../../components/CustomAppBar/CustomAppBar";
import { PostCard } from "../../components/PostCard/PostCard";

import server from "../../api/server";
import { Post } from "../../models/Post";
import { Divider } from "@mui/material";

export function Home() {
  const token = localStorage.getItem("accessToken");
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await server.get(`/feed?page=${page}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setPosts([...posts, ...response.data]);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [token]);

  async function loadMorePosts() {
    setPage(page + 1)
  }

  return (
    <div>
      <CustomAppBar title="Home" />
      <h1 style={{ marginTop: "100px" }}>Feed</h1>
      <div style={{ marginTop: "56px" }}>
        <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
        {posts && posts.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
            <Divider />
          </div>
        ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
