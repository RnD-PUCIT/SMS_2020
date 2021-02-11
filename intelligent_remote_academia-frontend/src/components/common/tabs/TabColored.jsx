import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';

export default function TabColored({ tabs, onTabClick }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map((tab, index) => {
          return (
            <Tab
              label={tab.text}
              onClick={() => {
                onTabClick(tab);
              }}
            />
          );
        })}
      </Tabs>
    </AppBar>
  );
}
