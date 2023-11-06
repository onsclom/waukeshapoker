import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect } from "react"

import { usePlayerDataContext } from "@/context/dataContext"

const Leaderboard = () => {
  const {
    addMoney,
    fetchData,
    playerData,
    deleteData,
    totalInvested,
    buyInNumber,
  } = usePlayerDataContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  let amountInvested = totalInvested

  const MapPlayerData = () => {
    return playerData.map((entries, key) => {
      return (
        <Flex key={key} w={"100%"} justifyContent={"space-between"}>
          <Text>{entries.name}</Text>
          <Text>{entries.amount}</Text>
        </Flex>
      )
    })
  }

  useEffect(() => {
    fetchData()
  }, [buyInNumber])

  useEffect(() => {
    addMoney()
  }, [playerData])

  return (
    <Stack spacing={3} p={"1rem"} h={300}>
      <Heading textAlign={"center"}>Leaderboard</Heading>
      <Divider />
      <Box overflowY={"scroll"} h={"80%"} p={"1rem"} border={"solid 1px black"}>
        <Flex justify={"space-between"}>
          <Text>Total:</Text>
          <Text>{amountInvested}</Text>
        </Flex>
        <Divider />
        <MapPlayerData />
        {playerData.length === 0 && <Text>No Data</Text>}
      </Box>
      {/* <Button onClick={deleteData}>Delete</Button> */}
      <Button onClick={onOpen}>Delete</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset Database</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This action clears the whole database. Are you sure?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => {
                deleteData()
                onClose()
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  )
}

export default Leaderboard
