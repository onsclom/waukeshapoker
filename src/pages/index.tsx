import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";

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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Flex w={"70%"} justify={"space-evenly"}>
      {isLoading && <LoadingSpinner />}
      <AddPlayer isLoading={isLoading} />
      <Invested data={data} />
      <Leaderboard data={data} />
    </Flex>
  );
};

export default Home;
