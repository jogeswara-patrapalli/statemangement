import styled from "styled-components";
import Typography from "@mui/material/Typography";
import TypoIcon from "../../Molecules/TypoIcon";
import { ReactComponent as SummaryIcon } from "../../Atoms/Icons/summary.svg";
import Button from "../../Atoms/Button";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

const SummaryDiv = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 20px;

  position: absolute;
  width: 340px;
  height: 520px;
  left: 890px;
  top: 0px;

  background: #201f24;

  border: 1px solid #28272b;
  border-radius: 12px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  top: 22px;
  left: 100px;
  width: 276px;
  height: 29px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Hstackstyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 0px;
  gap: 12px;

  width: 276px;
  height: 19px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const LineStyled = styled.div`
  width: 276px;
  height: 0px;

  /* border/high emp */

  border: 1px solid #413f4d;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`;

// const CustomSliderStyles = {

// };

const Summary: React.FC<{ total: number; count: number; slider: any }> = (
  props
) => {
  const { total, count, slider } = props;

  const [value, setValue] = useState<number>(0);
  const [Count, setCount] = useState<number>(0);

  const handleValueChange = (event: any, newValue: any) => {
    console.log(newValue);
    slider(newValue);
    setValue(newValue);
    
  };
  useEffect(() => {
    setValue(total);
    setCount(count);
  }, [total, count]);

  const handleReset = () => {
    setCount(0);
    setValue(0);
    slider(0);
  };

  return (
    <SummaryDiv>
      <TitleDiv>
        <TypoIcon
          icon={<SummaryIcon />}
         
          variant="h2"
          reverse={true}
        >
          Summary
        </TypoIcon>
      </TitleDiv>

      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none" }}
          variant="body1"
        >
          Term
        </Typography>
        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none" }}
          variant="body1"
        >
          12 months
        </Typography>
      </Hstackstyled>
      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none" }}
          variant="body1"
        >
          Selected contracts
        </Typography>
        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none" }}
          variant="body1"
        >
          {Count}
        </Typography>
      </Hstackstyled>

      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none" }}
          variant="body1"
        >
          Slide to autoselect
        </Typography>

        <Button
          color="secondary"
          width={65}
          height={31}
          padtb={0.75}
          padlr={1.5}
          event={handleReset}
        >
          Reset
        </Button>
      </Hstackstyled>
      <Hstackstyled>
        <Slider
          sx={{
            "& .MuiSlider-thumb": {
              borderRadius: 1.4,
              border: 3.4,
              borderColor: "#B4A9FF",
              boxShadow: "0 0px 0px",
            },
          }}
          defaultValue={0}
          value={value}
          onChange={handleValueChange}
          aria-label="Default"
          color="primary"
          min={0}
          max={443522.64}
        />
      </Hstackstyled>

      <Hstackstyled>
        <Typography
          sx={{
            color: "#A5A5A6",
            textTransform: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
          variant="body1"
        >
          <Typography
            color="primary"
            sx={{ textTransform: "none" }}
            variant="body1"
          >
            ${value.toLocaleString("en-US")}
          </Typography>
          &nbsp;selected&nbsp;of
        </Typography>

        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none" }}
          variant="body1"
        >
          $443,522.64
        </Typography>
      </Hstackstyled>

      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none" }}
          variant="body1"
        >
          Pay back amount
        </Typography>
        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none" }}
          variant="body1"
        >
          ${value.toLocaleString("en-US")}
        </Typography>
      </Hstackstyled>
      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none" }}
          variant="body1"
        >
          Rate %
        </Typography>
        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none", display: "flex" }}
          variant="body1"
        >
          <Typography
            sx={{ color: "#A5A5A6", textTransform: "none" }}
            variant="body2"
          >
            (12.00%)
          </Typography>
          &nbsp;${Number((0.12 * value).toFixed(2)).toLocaleString("en-US")}
        </Typography>
      </Hstackstyled>

      <Hstackstyled>
        <LineStyled></LineStyled>
      </Hstackstyled>

      <Hstackstyled>
        <Typography
          sx={{ color: "#A5A5A6", textTransform: "none", alignSelf: "center" }}
          variant="h3"
        >
          Total Payout
        </Typography>
        <Typography
          sx={{ color: "#E8E7F0", textTransform: "none", alignSelf: "center" }}
          variant="h2"
        >
          $
          {Number(
            (value - parseFloat((0.12 * value).toFixed(2))).toFixed(2)
          ).toLocaleString("en-US")}
        </Typography>
      </Hstackstyled>

      <Button color="primary" width={276} height={59} padtb={2.5} padlr={5}>
        Review your credit
      </Button>
    </SummaryDiv>
  );
};

export default Summary;
