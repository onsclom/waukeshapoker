import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <Flex direction={'column'} minHeight={'100vh'}>
            <Stack spacing={6} position={'relative'} minH={'100vh'}>
                <Header />
                <Center flex={1}>{children}</Center>
                {/* <Box flexShrink={0}>
                    <Footer />
                </Box> */}
            </Stack>
        </Flex>
    )
}

export default Layout;