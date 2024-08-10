import { Box } from "@mui/material"

import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"

const ChatBox = () => {
  return (
    <>
     <Box>
          <ChatHeader />
          <ChatMessages />
     </Box>
    </>
  )
}

export default ChatBox