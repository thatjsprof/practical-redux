import React from "react";
import { connect } from "react-redux";
import { currentTab } from "./tabSelector";
import { selectTab } from "./tabActions";
import { Menu } from "semantic-ui-react";
import Tab from "./tab";
import ToggleDisplay from "../../common/components/ToggleDisplay";

export const TabBar = (props) => {
  const { tabs, currentTab, selectTabToShow, ...otherProps } = props;

  const tabItems = tabs.map((tabInfo) => {
    const { label, name } = tabInfo;

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        onClick={selectTabToShow}
        active={currentTab === name}
      ></Tab>
    );
  });

  const tabPanels = tabs.map((tabInfo) => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent></TabComponent>
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentTab: currentTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectTabToShow: (tabName) => dispatch(selectTab(tabName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
