import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'

interface Props {
    handleLike: any;
    liked: boolean;
    likeCount: number;
}

export default function CustonFavoriteIcon({ handleLike, likeCount, liked }: Props) {
  return (
    <>
        <IconButton onClick={() => handleLike()}>
        {liked ? (
          <Favorite fontSize="small" sx={{ color: "red" }} />
        ) : (
          <FavoriteBorder fontSize="small" />
        )}
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {likeCount}
      </Typography>
    </>
  )
}
