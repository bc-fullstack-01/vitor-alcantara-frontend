import { useEffect, useState } from "react";
import server from "../../api/server";
import { CustomChatBubbleIcon } from "../CustomChatBubbleIcon/CustomChatBubbleIcon";
import CustonFavoriteIcon from "../CustomFavoriteIcon/CustonFavoriteIcon";

interface Props {
  commentCount: number;
  likeCount: number;
  likes: string[];
  postId: string;
}

export function CustomActionIcons({
  commentCount,
  likeCount,
  likes,
  postId,
}: Props) {
  const profile = localStorage.getItem("profile") as string;
  const token = localStorage.getItem("accessToken");

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likeCount)

  async function handleLike() {
    try {
      if (!liked) {
        server.post(`/posts/${postId}/like`, null, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setLiked(true);
        setLikesCount(likeCount + 1)
      } else {
        server.post(`/posts/${postId}/unlike`, null, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setLiked(false);
        setLikesCount(likeCount - 1)

      }
    } catch (err) {
      console.log("algo deu errado");
    }
  }

  useEffect(() => {
    setLiked(likes.includes(profile));
  }, [profile, likes]);

  return (
    <div>
      <CustomChatBubbleIcon commentCount={commentCount}/>
      <CustonFavoriteIcon
        handleLike={handleLike}
        likeCount={likesCount}
        liked={liked}
      />
    </div>
  );
}
