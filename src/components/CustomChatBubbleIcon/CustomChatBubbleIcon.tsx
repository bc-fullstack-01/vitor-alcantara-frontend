import { ChatBubbleOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

interface Props {
    commentCount: number;
}

export function CustomChatBubbleIcon({ commentCount }: Props) {
  return (
    <>
        <IconButton>
        <ChatBubbleOutline fontSize="small" />
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {commentCount}
      </Typography>
    </>
  )
}
