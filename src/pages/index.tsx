import Head from 'next/head';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { VStack, Box, Text, HStack, Button } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // After 5 seconds, hide the splash screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer to prevent memory leaks when the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Landing />
      )}
    </>
  );
}

function SplashScreen() {
  return (
    <Box
      bg={""}
      minH={"100vh"}
      bgColor={"#EF9F8B"}
      display={"grid"}
      placeItems={"center"}
    >
      <Text 
        fontFamily={"poor"} 
        fontSize={"56px"} 
        color={"#080E11"} 
        pb={"2em"}
        margin={0}
      >
        Move it
      </Text>
    </Box>
  );
}

function Landing() {
  return (
    <VStack
      pb={"7em"}
      bgImage={'/assets/images/buttons.png'}
      bgSize={"cover"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      minH={"100vh"}
    >

      <Link href={"/signup"}>
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"250px"}
          h={"44px"}
          p={"10px"}
          bg={"#E76F51"}
          rounded={"8px"}
          fontFamily={"Poppins"}
          color={"#080E11"}
          border={"1px solid #E76F51"}
        >
          Sign up
        </Button>
      </Link>

      <Link href={"/login"} >
        <Button
            mt={"10px"}
            display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"250px"}
          h={"44px"}
          p={"10px"}
          bg={"transparent"}
          rounded={"8px"}
          fontFamily={"Poppins"}
          color={"#080E11"}
          border={"1px solid #E76F51"}
        >
          Log in
        </Button>
      </Link>
        
    </VStack>
  );
}
