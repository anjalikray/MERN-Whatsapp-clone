import { AccountContext } from "../../context/AccountProvider"
import { useContext } from "react"
import { Box, styled, Typography } from "@mui/material"

const ImageContainer = styled(Box)`
     display: flex;
     justify-content: center;
`

const Image = styled('img')({
     height: 140,
     width: 140,
     borderRadius: '50%',
     padding: "25px 0" 
});

const BoxWrapper = styled(Box)`
     background: #fff;
     padding: 12px 30px 2px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.08);
     & :first-child{
          font-size: 15px;
          color: #009688;
          font-weight: 200;
     }
     & :last-child{
          margin: 14px 0;
          color: #4a4a4a;
     }      
`

const DescriptionContainer = styled(Box)`
     padding: 15px 20px 28px 30px;
     & > p{
          font-size: 13px;
          color: #8696a0; 
     }
`

const Profile = () => {

     const { account} = useContext(AccountContext)
     
  return (
    <>
          <ImageContainer>
          <Image src={account.picture} alt="profile/pic" />
          </ImageContainer>

          <BoxWrapper>
               <Typography>Your Name</Typography>
               <Typography>{account.name}</Typography>
          </BoxWrapper>

          <DescriptionContainer>
               <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
          </DescriptionContainer>

          <BoxWrapper>
               <Typography>About</Typography>
               <Typography>If it's written for you, it will happen✨</Typography>
          </BoxWrapper>
    </>
  )
}

export default Profile