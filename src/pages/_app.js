import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import { Box } from "@chakra-ui/react";

import { Image } from "next/image";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <div
        style={{
          backgroundImage: `url('/app/pokerbg.jpeg')`, // Replace 'your-image.jpg' with the actual image file name
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundAttachment: "fixed", // Optional, for a fixed background
          //   minHeight: "100vh", // Ensures the background covers the entire viewport height
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>
  );
};

export default MyApp;
