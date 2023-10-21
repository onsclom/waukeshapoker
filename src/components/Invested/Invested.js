import { useEffect, useState } from "react";
import { Center, Divider, Heading, Stack, Text } from "@chakra-ui/react";

const Invested = ({ data }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate the total amount by summing the 'amount' property of each object
    const calculatedTotalAmount = data.reduce(
      (total, item) => total + item.amount,
      0
    );

    setTotalAmount(calculatedTotalAmount);
  }, []);

  return (
    <Stack spacing={6} border={"solid 1px"} p={"2rem"} m={"0 1rem"}>
      <Heading textAlign={"center"}>Amount Invested</Heading>
      <Divider />
      <Center>
        <Text>${totalAmount}</Text>
      </Center>
    </Stack>
  );
};

export default Invested;
