import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [totalInvested, setTotalInvested] = useState(0);
  const [data, setData] = useState([]);
  const API_URL = "/api/playerData/route";

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  async function deleteData() {
    try {
      await fetch(API_URL, {
        method: "DELETE",
      });
      setData([]);
      setTotalInvested(0);
    } catch (error) {
      console.error(error);
    }
  }

  function addMoney() {
    data.map((entries) => {
      setTotalInvested(
        (prevTotalInvested) => prevTotalInvested + entries.amount
      );
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    addMoney();
  }, [data]);

  return (
    <Stack spacing={3} p={"1rem"} h={300}>
      <Heading textAlign={"center"}>Leaderboard</Heading>
      <Divider />
      <Box overflowY={"scroll"} h={"80%"} p={"1rem"} border={"solid 1px black"}>
        <Flex justify={"space-between"}>
          <Text>Total:</Text>
          <Text>{totalInvested}</Text>
        </Flex>
        <Divider />
        {data.map((entries, key) => {
          return (
            <Flex key={key} w={"100%"} justifyContent={"space-between"}>
              <Text>{entries.name}</Text>
              <Text>{entries.amount}</Text>
            </Flex>
          );
        })}
        {data.length === 0 && <Text>No Data</Text>}
      </Box>
      <Button onClick={deleteData}>Delete</Button>
    </Stack>
  );
};

export default Leaderboard;
