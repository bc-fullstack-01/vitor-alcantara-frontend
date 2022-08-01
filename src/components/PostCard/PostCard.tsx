import {
  CardHeader,
  Paper,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Post } from "../../models/Post";
import { CustomActionIcons } from "../CustomActionIcons/CustomActionIcons";
import { CustomAvatarName } from "../CustomAvatarName/CustomAvatarName";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <Paper elevation={0} sx={{ marginX: 24 }}>
      <CardHeader
        avatar={<CustomAvatarName profileName={post.profile.name} />}
        title={post.title}
      />
      {post.image ? (
        <CardMedia component="img" image={post.description} alt={post.title} />
      ) : (
        <CardContent>
          <Typography variant="body2" color="text.secondary" />
        </CardContent>
      )}
      <CardActions>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "start",
          }}
        >
            <CustomActionIcons 
            commentCount={post.comments.length} 
            likeCount={post.likes.length} 
            likes={post.likes}
            postId={post._id}
            />
            
        </div>
      </CardActions>
    </Paper>
  );
}
