import { Avatar } from "@mui/material";

export function CustomAvatarName({ profileName }: { profileName: string }) {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((name) => name[0]);
  return <Avatar sx={{ bgcolor: 'red' }} arial-label={profileName}>{getInitials(profileName)}</Avatar>;
}
