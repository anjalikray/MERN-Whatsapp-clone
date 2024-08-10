import { Box } from "@mui/material"
import { useContext} from "react"

import { AccountContext } from "../../../context/AccountProvider"

import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"

const ChatBox = () => {

  const { person } = useContext(AccountContext)

  return (
    <>
     <Box style={{height: '75%'}}>
          <ChatHeader person={person}/>
          <ChatMessages person={person}/>
     </Box>
    </>
  )
}

export default ChatBox