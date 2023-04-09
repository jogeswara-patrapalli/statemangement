import { Typography, TypographyVariant } from "@mui/material";
import styled from "styled-components";

const TypoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 8px;

  flex: none;

  align-self: stretch;
  flex-grow: 0;
  .a {
    order: 2;
  }
  .b {
    order: 1;
  }
`;

const TypoIcon: React.FC<{
  icon:any;
  children: string;
  color?: string;
  variant: TypographyVariant;
  reverse: boolean;
}> = (props) => {
  const { icon, children, color, variant, reverse } = props;
  let a = reverse ? "a" : "";
  let b = reverse ? "b" : "";
  return (
    <TypoStyled>
      <div className={a} style={{ marginTop: 4 }}>
        {icon}
      </div>
      <div className={b}>
        <Typography
          sx={{ color: { color }, textTransform: "none", marginTop: 0 }}
          variant={variant}
        >
          {children}
        </Typography>
      </div>
    </TypoStyled>
  );
};

export default TypoIcon;
