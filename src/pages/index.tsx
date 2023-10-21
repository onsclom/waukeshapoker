import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';


import AddPlayer from '@/components/AddPlayer/AddPlayer';
import Invested from '@/components/Invested/Invested';
import Leaderboard from '@/components/Leaderboard/Leaderboard';
import LoadingSpinner           from '@/components/LoadingSpinner/LoadingSpinner';

const Home: NextPage = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await fetch('/api/playerData/route');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    }

    fetchData();

  }, []);

  return (
    <Flex w={'70%'} justify={'space-evenly'}>
        {isLoading && <LoadingSpinner />}
        <AddPlayer isLoading={isLoading} />
        <Invested />
        <Leaderboard />
    </Flex>
  )
}

export default Home;