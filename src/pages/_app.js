import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import { PlayerDataContextProvider } from "../context/dataContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <div
        style={{
          backgroundImage: `url('/app/pokerbg.jpeg')`, // Replace 'your-image.jpg' with the actual image file name
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Layout>
          <PlayerDataContextProvider>
            <Component {...pageProps} />
          </PlayerDataContextProvider>
        </Layout>
      </div>
    </ChakraProvider>
  );
};

export default MyApp;
