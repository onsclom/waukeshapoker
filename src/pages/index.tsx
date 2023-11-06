import type { NextPage } from "next"

import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import AddPlayer from "@/components/AddPlayer/AddPlayer"
import Leaderboard from "@/components/Leaderboard/Leaderboard"

const Home: NextPage = () => {
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
            <Leaderboard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Home
