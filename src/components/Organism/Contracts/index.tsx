import TypoIcon from "../../Molecules/TypoIcon";
import Typography from "@mui/material/Typography";
import { ReactComponent as Icon } from "../../Atoms/Icons/summary.svg";
import styled from "styled-components";
import MyTable from "../Table";
import { theme } from "../../../theme";
const ContractStyled = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 0px 32px 32px;
  gap: 20px;

  position: absolute;
  width: 850px;
  height: 520px;
  left: 284px;

  top: 170px;

  background:${theme.palette.error.main};

  border: 1px solid ${theme.palette.error.light};
  border-radius: 12px;
`;

const Contracts: React.FC = () => {
  return (
    <ContractStyled>
      <TypoIcon icon={<Icon />}  variant="h2" reverse={true}>
        Your Contracts
      </TypoIcon>
      <MyTable></MyTable>
    </ContractStyled>
  );
};

export default Contracts;
