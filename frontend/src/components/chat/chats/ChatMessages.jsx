import { Box, styled } from '@mui/material';
import ChatFooter from './ChatFooter';

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
    padding: 1px 80px;
`;

const ChatMessages = () => {
  return (
    <>
      <Wrapper>
        <Component></Component>
        <ChatFooter/>
      </Wrapper>
    </>
  )
}

export default ChatMessages