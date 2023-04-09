import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ReactComponent as Arrow } from "../../Atoms/Icons/arrow.svg";
import Button from "../../Atoms/Button";
const HeaderStyled=styled.div`
    display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 741px;

position: absolute;
width: 1226px;
height: 71px;
left: 278px;
top: 40px;
`

const HeaderTypoStyled=styled.div`
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 2px;

width: 400px;
height: 71px;




flex: none;
order: 0;
flex-grow: 0;
`

const AvatarIconStyled=styled.div`
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 56px;
height: 32px;




flex: none;
order: 1;
flex-grow: 0;
`




const Header:React.FC=()=>{
    return(
       

<HeaderStyled>
    <HeaderTypoStyled>
    <Typography variant="h1">New cash kick</Typography>
    <Typography variant="h3">Let’s setup a new cash kick to power your Saas</Typography>
    </HeaderTypoStyled>
     <AvatarIconStyled>
     <Avatar alt="Avatar" src="../../Atoms/Icons/1.jpg"></Avatar>
     <Arrow></Arrow>
     </AvatarIconStyled>
    
     
       
</HeaderStyled>
       

    )
}


export default Header;