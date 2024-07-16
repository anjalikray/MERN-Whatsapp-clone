import { styled, AppBar, Toolbar, Box } from "@mui/material";

//components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
    height: 125px;
    background: #00a884;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    height: 250px;
    background: #00a884;
    box-shadow: none;
`;

const Component = styled(Box)`
    height: 100vh;
    background: #dcdcdc;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            {account ? (
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
            ) : (
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            )}
        </Component>
    );
};

export default Messenger;
