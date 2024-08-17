import { useContext ,useState , useEffect} from 'react';
import { Box, styled } from '@mui/material';

import {AccountContext} from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../service/api';

import ChatFooter from './ChatFooter';
import MessageSingle from './MessageSingle';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;
    
const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 2px 20px;
`;

const ChatMessages = ({person , conversation}) => {

  const {account } = useContext(AccountContext)

  const [value, setValue] = useState(""); 
  const [messages , setMessages] = useState([]);
  const [newMessageFlag , setNewMessageFlag] = useState(false);
  const [ file , setFile] = useState()

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id)
      setMessages(data)
    }
    conversation._id && getMessageDetails()
  } ,[person._id , conversation._id , newMessageFlag ])


  const sendText = async (e) => {
      const code = e.keyCode || e.which;

    if(code === 13) {
      let message = {
        senderId : account.sub,
        receiverId : person.sub,
        conversationId : conversation._id,
        type: 'text',
        text: value
      }
      await newMessage(message)

      setValue('')
      setNewMessageFlag(prev => !prev)
    }
  }

  return (
    <>
      <Wrapper>
        <Component>
          {
            messages && messages.map(message => (
              <Container>
                <MessageSingle message={message}/>
              </Container>
            ))
          }
        </Component>

        <ChatFooter 
          sendText={sendText} 
          setValue={setValue}
          value ={value}
          file = {file}
          setFile ={setFile}
        />
      </Wrapper>
    </>
  )
}

export default ChatMessages