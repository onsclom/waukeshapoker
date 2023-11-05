import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";

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
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>
  );
};

export default MyApp;
