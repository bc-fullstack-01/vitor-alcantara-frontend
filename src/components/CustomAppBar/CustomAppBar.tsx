import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import { Home, Edit, Group, AccountCircle } from '@mui/icons-material'
import { CustonIconButton } from "../CustonIconButton/CustonIconButton"
import { useNavigate } from "react-router-dom"

interface Props {
    title: string;
}

export function CustomAppBar({ title }: Props) {
    const navigate = useNavigate();
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" }}}>
                {title}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "block", md: "block" }}} />
            <CustonIconButton label="show home" onClickCallback={()=>{navigate("/home")}}>
                <Home />
            </CustonIconButton>
            <CustonIconButton label="show edit" onClickCallback={()=>{navigate("/create")}}>
                <Edit />
            </CustonIconButton>
            <CustonIconButton label="show profiles" onClickCallback={()=>{navigate("/profiles")}}>
                <Group />
            </CustonIconButton>
            <CustonIconButton label="show profile" onClickCallback={()=>{navigate("/profile")}}>
                <AccountCircle />
            </CustonIconButton>
        </Toolbar>
    </AppBar>
  )
}
