import React, { Fragment } from "react";
import { Header, Container } from "semantic-ui-react";
import TabBar from "./features/tab/tabBar";
import UnitsInfo from "./features/unitsInfo/unitsInfo";
import UnitOrganizations from "./features/unitOrganization/unitOrganization";
import Pilots from "./features/pilots/pilots";
import Mechs from "./features/mechs/mechs";
import Tools from "./features/tools/tools";
import "./App.css";

const App = () => {
  const tabs = [
    { name: "unitInfo", label: "Unit Info", component: UnitsInfo },
    { name: "pilots", label: "Pilots", component: Pilots },
    { name: "mechs", label: "Mechs", component: Mechs },
    {
      name: "unitOrganization",
      label: "Unit Organization",
      component: UnitOrganizations,
    },
    {
      name: "Tools",
      label: "Tools",
      component: Tools,
    },
  ];

  return (
    <Fragment>
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Project Mini-Mek
          </Header>
        </div>
        <Container>
          <TabBar tabs={tabs} size="massive"></TabBar>
        </Container>
      </div>
    </Fragment>
  );
};

export default App;
