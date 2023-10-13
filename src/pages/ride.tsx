import React from 'react'

import dynamic from "next/dynamic"
import { Icon } from '@iconify/react';
import { HStack , Image, VStack,Box, Button } from '@chakra-ui/react';


import Topnav from '@/components/navbar.tsx/topnav'
import Navbar from '@/components/navbar.tsx/navbar'
import Text from '@/components/text/text'


const MyAwesomeMap = dynamic(() => import("@/components/map/map"), { ssr:false })

function Ride() {
  return (
    <Box overflow={"scroll"} h={"90vh"} ring={1} >
        <Topnav/>
        <MyAwesomeMap/>

        <Book/>

        <Navbar/>
    </Box>
  )
}

export default Ride

function Book (){
    return(
        <Box p={"1em"} > 
            <VStack alignItems={"flex-start"}>
                
                <HStack>
                    <Icon icon="mingcute:right-line" color="#080e11" width="36" height="36" />
                    <Text 
                        text='Awo Hall' 
                        color='#080E11'
                        fwt={400}
                        ftz='16px'
                    />
                </HStack>

                <Text 
                    text='Suggested Rides' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                />
            </VStack>

            <HStack  >
                <Image 
                    mt={"4px"}
                    rounded={"4px"}
                    maxW={"100%"} 
                    src='/assets/images/Group 6.png' 
                    />
                <Image 
                    mt={"4px"}
                    rounded={"4px"}
                    maxW={"100%"} 
                    src='/assets/images/Frame 111.png' 
                />
        </HStack>
        <HStack mt={"24px"} gap={"1em"} ml={"5px"} >
            <Box 
                p={"12px"} 
                rounded={"8px"}
                ring={1}
                ringColor={"#E76F51"}
            >
                <Icon icon="simple-line-icons:calender" color="#080e11" width="20" />
            </Box>
           <Button 
                w={"256px"} 
                h={"44px"} 
                bg={"#E76F51"}
                rounded={"8px"}
                p={"10px"}
                fontFamily={"Poppins"}
                fontSize={"15px"}
                color={"#080E11"}
                fontWeight={400}
            >
                Book Now
            </Button>
        </HStack>
    </Box>
    )
}