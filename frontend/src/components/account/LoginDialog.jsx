import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

import { addUser } from "../../service/api";

import { AccountContext } from "../../context/AccountProvider";

const dialogStyled = {
    height: "90%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "none",
};

const Component = styled(Box)`
    display: flex;
`;
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
    height: 264,
    width: 264,
    margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
    font-size: 25px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 20px;
`;
const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 26px;
        color: #4a4a4a;
    }
`;

const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        // console.log(decoded);
        setAccount(decoded);
        await addUser(decoded)
    };

    const onLoginError = (res) => {
        console.log("Login Failed", res);
    };
    
    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyled }}
                hideBackdrop={true}
            >
                <Component>
                    <Container>
                        <Title>To use WhatsApp on your computer:</Title>
                        <StyledList>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>
                                2. Tap Menu on Android, or Settings on iPhone
                            </ListItem>
                            <ListItem>
                                3. Tap Linked devices and then Link a device
                            </ListItem>
                            <ListItem>
                                4. Point your phone at this screen to capture
                                the QR code
                            </ListItem>
                        </StyledList>
                    </Container>

                    <Box style={{ position: "relative" }}>
                        <QRCode src={qrCodeImage} alt="barCode" />

                        <Box
                            style={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateX(40%)",
                            }}
                        >
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </div>
    );
};

export default LoginDialog;
