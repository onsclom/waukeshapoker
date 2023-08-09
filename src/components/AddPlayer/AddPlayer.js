import { useEffect, useState } from 'react';
import { Button, Center, Divider, Input as ChakraInput, Flex, Heading, Stack, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const AddPlayer = () => {
    const toast = useToast();
    const [ players, setPlayers ] = useState([]);

    const { 
        handleSubmit,
        register, 
        reset
    } = useForm();

    const onSubmit = (playerData) => {
        if (playerData.name && playerData.amount){
            setPlayers((prevPlayerData) => [...prevPlayerData, playerData]);
        } else if (playerData.name) {
            toast({
                title: 'Missing Field',
                description: `Fill out Amount.`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
              })
        } else if (playerData.amount) {
            toast({
                title: 'Missing Field',
                description: `Fill out Name.`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
              })
        } else {
            toast({
                title: 'Missing Fields',
                description: `Fill out both fields.`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
              })
        }
    }

    // useEffect(()=> {
    //     console.log(players)
    // }, [players])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6} border={'solid 1px'} p={'2rem'} w={'300px'}>

                {/* Heading */}
                <Center><Heading>Add Player</Heading></Center>
                <Divider colorScheme={'blackAlpha'} />

                {/* Name */}
                <Flex>
                    <Text pr={'1rem'} m={'auto'}>Name:</Text>
                    <ChakraInput type={'text'} {...register('name')} />
                </Flex>

                {/* Amount */}
                <Flex>
                    <Text pr={'1rem'} m={'auto'}>Amount:</Text>
                    <ChakraInput type={'number'} {...register('amount')} />
                </Flex>

                {/* Buttons */}
                <Flex justify={'space-between'}>
                    <Button onClick={() => reset()}>Reset</Button>
                    <Button type='submit'>Add</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default AddPlayer;