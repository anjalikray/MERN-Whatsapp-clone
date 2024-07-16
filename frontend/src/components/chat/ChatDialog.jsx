import { Dialog } from "@mui/material";


const dialogStyled = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  margin: "20px",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
  borderRadius: 0,
};


const ChatDialog = () => {
    return (
        <>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyled }}
                hideBackdrop={true}
            ></Dialog>
        </>
    );
};

export default ChatDialog;
