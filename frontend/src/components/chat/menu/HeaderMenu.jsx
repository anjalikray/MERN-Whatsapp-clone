import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem , styled} from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
     font-size: 14px;
     padding: 15px 40px 5px 24px;
     color: #4a4a4a;

`     

const HeaderMenu = ({setOpen}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpen = (e) => {
        setOpenMenu(e.currentTarget);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <MoreVertIcon onClick={handleOpen} />
            <Menu
                anchorEl={openMenu}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuOption onClick={() =>{handleClose(); setOpen(true)}}>Profile</MenuOption>
            </Menu>
        </>
    );
};

export default HeaderMenu;
