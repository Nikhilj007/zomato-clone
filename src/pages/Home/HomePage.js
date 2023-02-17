import React, { useState } from "react";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import TabOptions from "../../components/common/tabOptions/tabOptions";
import Delivery from "../../components/delivery/delivery";
import DiningOut from "../../components/diningOut/diningOut";
import NightLife from "../../components/nightLife/nightLife";
import "./HomePage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "DiningOut":
      return <DiningOut />;

    default:
      return <NightLife />;
  }
};
export default HomePage;
