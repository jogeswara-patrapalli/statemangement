import { Button as MuiButton } from "@mui/material";


const Button: React.FC<{
  color: any;
  width: number;
  height: number;
  children: string;
  padtb:number;
  padlr:number;
  event?:any;
}> = (props) => {
  const { color, width, height, children,padtb,padlr,event } = props;
  return (
 
      <MuiButton
        variant="contained"
        color={color}
        sx={{
          width: { width },
          height: { height },
          paddingTop: {padtb},
          paddingBottom: {padtb},
          paddingRight: {padlr},
          paddingLeft: {padlr},
          borderRadius: 1.5,
        }}
        onClick={event}
      >
        {children}
      </MuiButton>
   
  );
};

export default Button;
