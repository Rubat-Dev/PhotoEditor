import { Heading, Text ,Button, Box, Image,List, background} from '@chakra-ui/react'
import React from 'react'
const ChakraTask1 = () => {
  return (
    <div>
    
    {/* <Heading bg={"red.300"} color={"white"} p={5}>heloow world</Heading>
    <Text bg={'pink.300'} fontSize={"2vw"} fontWeight={"900"} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta!</Text>
    <Button variant={''}>Click Me</Button> */}

    {/* <Box w={"300px"} h={"300px"} border={"2px solid red"} mx={"auto"} mt={24} bg={"pink.200"} shadow={"2xl"} _hover={{backgroundColor:"red.300",border:"5px solid black",borderRadius:"50%",color:"blue.800"}} transition={".5s linear"} rounded={"2xl"} textAlign={"Center"} display={"flex"} alignItems={"center"} justifyContent={"center"} fontSize={"2xl"} fontWeight={"600"} color={"red"} overflow={"hidden"}>
      
      <Image src='https://images.unsplash.com/photo-1711861413115-797ee0655214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8' w={"100%"} h={"300px"} objectFit={"covern"}></Image>
      <Text pos={'absolute'} >Box</Text>
    </Box> */}
    <Box bg={"black"} color={"white"} py={5} px={10} display={"flex"} w={"100%"} alignItems={"center"}>
    
        <Image src='/nike.png' w={"100px"} h={"50px"}></Image>

      <Box display={"flex"} gap={3} ms={"auto"} fontSize={"20px"} fontWeight={"600"} listStyleType={"none"}>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contacts</li>
      <li>Blogs</li>
    </Box>
    </Box>
    <Box h={"84vh"} border={"1px solid black"} display={"flex"}>
      <Box w={"50%"}>
        <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b6a5e85-f5f9-41aa-baac-e747204f142a/air-zoom-infinity-tour-nrg-golf-shoes-gBPrzk.png' w={"100%"} h={"84vh"}></Image>
      </Box>
      <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={5} justifyContent={"center"} px={9} alignItems={"center"} bg={'whitesmoke'}>
        <Heading>THIS IS AMAIZING SHOES</Heading>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ex cupiditate ut velit sit quos perspiciatis tempore recusandae. Magni sed itaque maxime excepturi ipsa quia rerum numquam nostrum repellat saepe, corporis voluptas molestias tempora provident libero. Provident aliquam soluta iusto!</Text>
        <Button bg={"black"} color={"white"} _hover={{backgroundColor:"black"}}>Buy Now</Button>
      </Box>
    </Box>
    </div>
  )
}

export default ChakraTask1
