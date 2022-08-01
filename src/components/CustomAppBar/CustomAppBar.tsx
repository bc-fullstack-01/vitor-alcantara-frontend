import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import { Home, Edit, Group, AccountCircle } from '@mui/icons-material'
import { CustonIconButton } from "../CustonIconButton/CustonIconButton"

interface Props {
    title: string;
}

export function CustomAppBar({ title }: Props) {
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
            <CustonIconButton label="show home" onClickCallback={()=>{}}>
                <Home />
            </CustonIconButton>
            <CustonIconButton label="show edit" onClickCallback={()=>{}}>
                <Edit />
            </CustonIconButton>
            <CustonIconButton label="show profiles" onClickCallback={()=>{}}>
                <Group />
            </CustonIconButton>
            <CustonIconButton label="show profile" onClickCallback={()=>{}}>
                <AccountCircle />
            </CustonIconButton>
        </Toolbar>
    </AppBar>
  )
}
