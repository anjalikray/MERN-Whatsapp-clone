import { Box, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material"

const Component = styled(Box)`
     background: #fff;
     height: 45px;
     border-bottom: 1px solid #f2f2f2;
     display: flex;
     align-items: center;
`

const Wrapper = styled(Box)`
     background: #f0f2f5;
     position: relative;
     margin: 0 13px;
     width: 100%;
     border-radius: 10px;
`

const Icon = styled(Box)`
     position: absolute;
     height: 100%;
     padding: 6px 8px;
     color: #919191;
     padding-top: 5px;
`

const Input = styled(InputBase)`
     width: 100%;
     height: 15px;
     padding: 16px;
     padding-left: 65px;
     font-size: 14px;

`

const Search = () => {
  return (
     <>
          <Component>
               <Wrapper>
                    <Icon>
                         <SearchIcon fontSize="small"/>
                    </Icon>

                    <Input placeholder="Search or start a new chat"/>
               </Wrapper>
          </Component>
     </>
  )
}

export default Search;