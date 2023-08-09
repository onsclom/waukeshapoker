import { Center, Divider, Heading, Stack, Text } from "@chakra-ui/react"

const Invested = ({ amount }) => {
    return (
        <Stack spacing={6} border={'solid 1px'} p={'2rem'} m={'0 1rem'}>
            <Heading textAlign={'center'}>Amount Invested</Heading>
            <Divider />
            <Center><Text>${amount}</Text></Center>
        </Stack>
    )
}

Invested.defaultProps = {
    amount: 69
}

export default Invested