import Button from "@mui/material/Button";
import styled from "styled-components";
import { ReactComponent as BackIcon } from "../Icons/back.svg";

const BackStyled=styled.div`
    box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;

position: absolute;
width: 90px;
height: 31px;
left: 278px;
top: 127px;
color:#C9C8CC;
/* background/elevation 1 */

background: #201F24;
/* border/low emp */

border: 1px solid #28272B;
border-radius: 12px;
`

export const Back=()=>{
    return(
       <BackStyled>
       {<BackIcon />}
       Back
   
       </BackStyled> 
       
    )
}