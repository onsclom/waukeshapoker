import { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import AddPlayer from "@/components/AddPlayer/AddPlayer";
import Invested from "@/components/Invested/Invested";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/playerData/route");
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <Flex w={"70%"} justify={"space-evenly"}>
      {isLoading && <LoadingSpinner />}
      <Tabs
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
          <Tab>Invested</Tab>
          <Tab>Leaderboard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddPlayer isLoading={isLoading} />
          </TabPanel>
          <TabPanel>
            <Invested data={data} />
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
