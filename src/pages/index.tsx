import type { NextPage } from "next";
import { useEffect, useState } from "react";

import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import AddPlayer from "@/components/AddPlayer/AddPlayer";
import Leaderboard from "@/components/Leaderboard/Leaderboard";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/api/playerData/route");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex w={"70%"} justify={"space-evenly"}>
      <Tabs
        isFitted
        variant="enclosed"
        h={400}
        w={400}
        border={"solid 3px white"}
        borderRadius={"10px"}
        bgColor={"white"}
        p={"1rem"}
      >
        <TabList borderColor={"black"}>
          <Tab>Add</Tab>
          <Tab>Leaderboard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddPlayer />
          </TabPanel>
          <TabPanel>
            <Leaderboard data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Home;
