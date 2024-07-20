import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material"
import Profile from "./Profile";

const dialogStyled = {
    left: 20,
    top: 15,
    height: "95%",
    width: "33%",
    boxShadow: "none",
};

const Header = styled(Box)`
    height: 110px;
    background: #008069;
    color: #fff;
    display: flex;
    & > svg , & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Text = styled(Typography)`
    font-size: 18px;
` 

const Component = styled(Box)`
    background: #ededed;
    height: 80%;
`   

const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: dialogStyled }}
                style={{
                    zIndex: 1500,
                }}
            >
                <Header>
                    <ArrowBack onClick={() => setOpen(false)}/>
                    <Text>Profile</Text>
                </Header>

                <Component>
                    <Profile/>
                </Component>
            </Drawer>
        </>
    );
};

export default InfoDrawer;
