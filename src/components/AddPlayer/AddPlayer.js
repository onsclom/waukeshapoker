import {  useState }  from 'react';

import { 
    Button, 
    Center, 
    Divider, 
    Input as ChakraInput, 
    Flex, 
    Heading, 
    Stack, 
    Text, 
    useToast 
}                               from '@chakra-ui/react';
import { useForm }              from 'react-hook-form';

const AddPlayer = ( isLoading ) => {
    const toast = useToast();
    const [ loading, setLoading ] = useState(false);

    const { 
        handleSubmit,
        register, 
        reset
    } = useForm();

    const onSubmit = async (playerData) => {

        if (playerData.name && playerData.amount){
            setLoading(true);
            try {
                const response = await fetch('/api/playerData/route', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(playerData),
                });
          
                if (response.ok) {
                    // Handle successful response
                    toast({
                        title: 'Player Added',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: 'top'
                    })
                } else {
                    // Handle error response
                    toast({
                        title: 'Error Adding Player',
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top'
                    })
                }
            } catch (error) {
                // Handle network or other errors
                console.log(error)
            }
            setLoading(false);

        } else {
            toast({
                title: 'Missing Fields',
                description: `Fill out fields.`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
              })
        }
    }

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
                    <Button onClick={() => reset()} isDisabled={loading}>Reset</Button>
                    <Button type='submit' isDisabled={loading}>Add</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default AddPlayer;