import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Leaderboard = () => {

    let currIndex = -1;

    // This is created after sorting the data
    const fakeData = [
        {
            name: 'Jimmy',
            amount: 1000
        },
        {
            name: 'Alex',
            amount: 500
        },
        {
            name: 'Michael',
            amount: -1000
        },
        {
            name: 'JT',
            amount: -1000
        }
    ]

    const styleObject = {
        0: 'gold',
        1: 'silver',
        2: '#E97451'
    }

    const determineStyle = (amount) => {
        if (amount > 0){
            return 'green'
        } else if (amount < 0) {
            return 'red'
        } else {
            return ('gray')
        }
    }

    return (
        <Stack spacing={3} border={'solid 1px'} p={'2rem'}>
            <Heading>Leaderboard</Heading>
            <Divider />
            {fakeData.map(obj => {

                // console.log('Current Index: ' + currIndex);
                currIndex += 1;
                
                return (
                    <Flex key={obj.name} justify={'space-between'}>
                        <Text bgColor={styleObject[currIndex]}>{obj.name}</Text>
                        <Text color={determineStyle(obj.amount)}>{obj.amount}</Text>
                    </Flex>
                )
            })}
        </Stack>
    )
}

export default Leaderboard;