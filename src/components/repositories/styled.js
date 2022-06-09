import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  width: 100%;
  margin-top: 12px;
  font-size: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  user-select: none;
  cursor: pointer;
  z-index: 999;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: 1px solid white;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  width: 100%;
  margin-top: -5px;
  margin-left: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  display: none;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    font-weight: 600;
    margin: 0 5px 0 0;
  }
  a {
    font-weight: 500;
    color: #337dff;
  }
`;
