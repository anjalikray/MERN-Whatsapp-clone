import { styled, AppBar, Toolbar , Box } from "@mui/material";

//components
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)`
     height: 250px;
     background: #00a884;
     box-shadow: none;
`;

const Component = styled(Box)`
     height: 100vh;
     background: #dcdcdc;
` 

const Messenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar></Toolbar>
            </Header>
            <LoginDialog />
        </Component>
    );
};

export default Messenger;
