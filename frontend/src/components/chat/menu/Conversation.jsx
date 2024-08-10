import { Box, Typography , styled} from "@mui/material";
import {useContext} from "react" 

import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = ({ user }) => {

    const { setPerson } = useContext(AccountContext)

    const getUser = () => {
        setPerson(user)
    }

    return (
        <Component onClick={() => getUser()}>
            <Box>
               <Image src={user.picture} alt="dp" />
            </Box>

            <Box>
               <Box>
                    <Typography>{user.name}</Typography>
               </Box>
            </Box>
        </Component>
    );
};

export default Conversation;
