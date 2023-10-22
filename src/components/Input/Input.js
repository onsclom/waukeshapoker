import { Flex, Input as ChakraInput, Text } from "@chakra-ui/react";

const Input = ({ label, type }) => {
  return (
    <Flex>
      <Text pr={"1rem"} m={"auto"}>
        {label}
      </Text>
      <ChakraInput type={type} />
    </Flex>
  );
};

export default Input;
