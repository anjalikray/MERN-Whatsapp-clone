import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";

const dialogStyled = {
    height: "90%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
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
    margin: "50px 0 0 50px"
});

const Title = styled(Typography)`
     font-size: 25px;
     color: #525252;
     font-weight: 300;
     font-family: inherit;
     margin-bottom: 20px
`
const StyledList = styled(List)`
     & > li{
          padding: 0;
          margin-top: 15px;
          font-size: 18px;
          line-height: 26px;
          color: #4a4a4a;

     }
`    

const LoginDialog = () => {
    return (
        <div>
            <Dialog open={true} PaperProps={{ sx: dialogStyled }}>
                <Component>
                    <Container>
                        <Title>
                            To use WhatsApp on your computer:
                        </Title>
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

                    <Box>
                        <QRCode src={qrCodeImage} alt="barCode" />
                    </Box>
                </Component>
            </Dialog>
        </div>
    );
};

export default LoginDialog;
