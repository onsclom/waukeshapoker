import { ChakraProvider } from "@chakra-ui/react";
import Layout from '@/components/layout/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp;