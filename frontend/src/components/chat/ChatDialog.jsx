import { Dialog, Box, styled } from "@mui/material";

import Menu from "./menu/Menu";
import EmptyChat from "./chats/EmptyChat";

const dialogStyled = {
    height: "95%",
    width: "100%",
    maxWidth: "100%",
    margin: "20px",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    borderRadius: 0,
};

const Component = styled(Box)`
  display: flex;
`

const LeftComponent = styled(Box)`
  min-width: 450px;
`

const RightComponent = styled(Box)`
  width: 75%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`

const ChatDialog = () => {
    return (
        <>
            <Dialog
                max-width={'md'}
                open={true}
                PaperProps={{ sx: dialogStyled }}
                hideBackdrop={true}
            >
                <Component>

                    <LeftComponent>
                        <Menu />
                    </LeftComponent>

                    <RightComponent>
                        <EmptyChat />
                    </RightComponent>

                </Component>
            </Dialog>
        </>
    );
};

export default ChatDialog;
