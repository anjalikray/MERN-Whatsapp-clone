import { Box } from "@mui/material"
import MenuHeader from "./MenuHeader"
import Search from "./Search"
import Conversations from "./Conversations"


const Menu = () => {
  return (
    <Box>
     <MenuHeader/>
     <Search/>
     <Conversations />
    </Box>
  )
}

export default Menu