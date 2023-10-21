import React                from 'react';
import { Box, Spinner }          from '@chakra-ui/react'


const LoadingSpinner = () => {
  return (
    <Box position={'absolute'} left={'50%'} top={'10rem'}>
        <Spinner size={'lg'}/>
    </Box>

  )
}

export default LoadingSpinner