import { useContext , useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import { Box, styled } from "@mui/material"
import HistoryToggleOff from '@mui/icons-material/HistoryToggleOff';
import Chat from '@mui/icons-material/Chat';

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
 
const Component = styled(Box)`
     height: 44px;
     background: #ededed;
     padding: 8px 16px;
     display: flex;
     align-items: center;
     justify-content: space-between;
`

const Wrapper = styled(Box)`
     display: flex;
     & > * {
          margin-left: 2px;
          padding: 8px;
          color: #000;
     };
     & :first-child{
          margin-right: 5px;          
     }
`

const Image = styled('img')({
     height: 40,
     width: 40,
     borderRadius: '50%',
});

const MenuHeader = () => {

     const {account} = useContext(AccountContext)
     const [ openDrawer , setOpenDrawer] = useState(false)

     const toggleDrawer = () => {
          setOpenDrawer(true)
     }

  return (
     <>
          <Component>
               <Image src={account.picture} alt="profile/pic" onClick={() => toggleDrawer()}/>

               <Wrapper>
                    <HistoryToggleOff/>
                    <Chat/>
                    <HeaderMenu setOpen ={setOpenDrawer}/>
               </Wrapper>

               <InfoDrawer open={openDrawer} setOpen ={setOpenDrawer}/>
          </Component>
     </>
  )
}

export default MenuHeader