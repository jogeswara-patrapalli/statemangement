import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import TypoIcon from "../TypoIcon";
import { ReactComponent as Home } from "../../Atoms/Icons/home.svg";
import { ReactComponent as Cash } from "../../Atoms/Icons/cashA.svg";
import Grid from '@mui/material/Grid'
import Contracts from "../../Organism/Contracts";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  background-color: white;
  width: 210px;
  height: 505px;
  background: #201f24;
  border-right: 1px solid #222124;
  border-radius: 0px;
  flex: none;
  order: 1;
  flex-grow: 1;

  .active {
    width: 210px;
    height: 49px;
    background: #413f4d;
    border: 1px solid #413f4d;
    border-radius: 12px;
  }
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid>
    <Div
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{
          style: {
            height: 0,
          },
        }} sx={{ '& .Mui-selected': {  background: '#413f4d',borderRadius:3,width: 210,height: 49,border:1,borderColor:'#413f4d'} }}
      >
        <Tab label={ <TypoIcon
              icon={<Home />}
              
              variant="subtitle2"
              reverse={false}
            >
              Home
            </TypoIcon>} {...a11yProps(0)} />
        <Tab label={<TypoIcon
              icon={<Cash />}
              
              variant="subtitle2"
              reverse={false}
            >
              Cash Accleration
            </TypoIcon>} {...a11yProps(1)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Contracts/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
    </Div>
    </Grid>
  );
}