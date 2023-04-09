import { ReactComponent as Flash } from "../../Atoms/Icons/flash.svg";
import VerticalTabs from "../../Molecules/Tab";
import TypoIcon from "../../Molecules/TypoIcon";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Atoms/Icons/logo.svg";

const LeftDiv = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px;
  gap: 40px;

  position: absolute;
  width: 250px;
  left: 0px;
  top: 0px;
  bottom: 0px;

  /* background/elevation 1 */

  background: #201f24;
  border-right: 1px solid #222124;
  border-radius: 0px;
`;

const Logostyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 4px;
  gap: 8px;

  width: 210px;
  height: 36px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Tabdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 210px;
  height: 543px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`;

const FlashStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 110px;
  height: 49px;

  border-radius: 12px;

  flex: none;
  order: 3;
  flex-grow: 0;
`;

const Sidebar: React.FC = () => {
  return (
    <LeftDiv>
      <Logostyled>
        <TypoIcon icon={<Logo />} variant="h2" reverse={false}>
          Seeder
        </TypoIcon>
      </Logostyled>
      <Tabdiv>
        <VerticalTabs></VerticalTabs>
        <FlashStyled>
          <TypoIcon
            icon={<Flash />}
            
            variant="subtitle2"
            reverse={false}
          >
            Watch how to
          </TypoIcon>
        </FlashStyled>
      </Tabdiv>
    </LeftDiv>
  );
};

export default Sidebar;
