import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Center,
  Divider,
  Input as ChakraInput,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

const AddPlayer = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  const toast = useToast();

  const onSubmit = async (playerData) => {
    // If Name and Amount are filled out, try to post the data
    if (playerData.name && playerData.amount) {
      // Signifies loading so you know the request is acting
      setLoading(true);
      // Try to make the post request
      try {
        const response = await fetch("/api/playerData/route", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
        });

        if (response.ok) {
          // Handle successful response
          toast({
            title: "Player Added",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setTimeout(location.reload(), 1000);
        } else {
          // Handle error response
          toast({
            title: "Error Adding Player",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        // Handle network or other errors
        console.log(error);
      }
      setLoading(false);
    } else {
      toast({
        title: "Missing Fields",
        description: `Fill out fields.`,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleClick = () => {
    reset();
    toast({
      title: "Fields Reset",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6} p={"1rem"}>
        {/* Heading */}
        <Center>
          <Heading>Add Player</Heading>
        </Center>
        <Divider colorScheme={"blackAlpha"} />

        {/* Name */}
        <Flex>
          <Text pr={"1rem"} m={"auto"}>
            Name:
          </Text>
          <ChakraInput type={"text"} {...register("name")} />
        </Flex>

        {/* Amount */}
        <Flex>
          <Text pr={"1rem"} m={"auto"}>
            Amount:
          </Text>
          <ChakraInput type={"number"} {...register("amount")} />
        </Flex>

        {/* Buttons */}
        <Flex justify={"space-between"}>
          <Button onClick={handleClick} isDisabled={loading}>
            Reset
          </Button>
          <Button type="submit" isDisabled={loading}>
            Add
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default AddPlayer;
