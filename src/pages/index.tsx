import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Box, Flex, HStack, VStack } from '@chakra-ui/react';


import AddPlayer from '@/components/AddPlayer/AddPlayer';
import Invested from '@/components/Invested/Invested';
import Leaderboard from '@/components/Leaderboard/Leaderboard';

const Home: NextPage = () => {

  return (
    <Flex w={'70%'} justify={'space-evenly'}>
        <AddPlayer />
        <Invested />
        <Leaderboard />
    </Flex>
  )
}

export default Home;