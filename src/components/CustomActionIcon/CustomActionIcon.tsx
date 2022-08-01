import {
  ChatBubbleOutline,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";

interface Props {
  commentCount: number;
  likeCount: number;
  likes: string[];
}

export function CustomActionIcon({ commentCount, likeCount, likes }: Props) {
  const profile = localStorage.getItem("profile") as string;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likes.includes(profile));
  }, [profile, likes]);

  return (
    <div>
      <IconButton>
        <ChatBubbleOutline fontSize="small" />
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {commentCount}
      </Typography>
      <IconButton>
        {liked ? (
          <Favorite fontSize="small" sx={{ bgcolor: red }} />
        ) : (
          <FavoriteBorder fontSize="small" />
        )}
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {likeCount}
      </Typography>
    </div>
  );
}
