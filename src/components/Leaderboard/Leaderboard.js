import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Leaderboard = ({ data }) => {
  const [userData, setUserData] = useState();

  //   const styleObject = {
  //     0: "gold",
  //     1: "silver",
  //     2: "#E97451",
  //   };

  //   const determineStyle = (amount) => {
  //     if (amount > 0) {
  //       return "green";
  //     } else if (amount < 0) {
  //       return "red";
  //     } else {
  //       return "gray";
  //     }
  //   };

  useEffect(() => {
    let filteredData = [];
    data.map((entries) => {
      filteredData.push({
        [entries.name]: entries.amount,
      });
    });
    setUserData(filteredData);
  }, []);

  //   useEffect(() => {
  //     console.log(userData);
  //   }, [userData]);

  return (
    <Stack spacing={3} border={"solid 1px"} p={"2rem"}>
      <Heading>Leaderboard</Heading>
      <Divider />
      {data.map((entries, key) => {
        return (
          <Flex key={key} w={"100%"} justifyContent={"space-between"}>
            <Text>{entries.name}</Text>
            <Text>{entries.amount}</Text>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default Leaderboard;
