import {  Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen,SetisOpen] = useState(false);


  return (
  <>
  <Flex as={'nav'} wrap={'wrap'} bg={'blue.400'} py={6} px={'10vw'} justify={"space-between"} color={'white'} fontSize={"20px"} fontWeight={'semibold'} align={'center'}>
    <Box fontSize={"22px"} fontWeight={'semibold'}>
    <NavLink>Web Dev</NavLink>
    </Box>
    <Button display={{md:"none"}} variant={"unstyled"}  onClick={()=>SetisOpen(!isOpen)}>
      
    <GiHamburgerMenu/>
    </Button>
    <Box w={{base:"100%",md:"auto"}}>
    <Flex as={"ul"} gap={'2vw'} listStyleType={'none'} direction={{base:"column",md:"row"}}
    display={{base:isOpen?"flex":"none",md:"flex"}}
    >
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/service'>Service</NavLink>
      </li> 
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>
    </Flex>
    
    </Box> 
   </Flex>



       {/* <Flex as={'nav'} wrap={'wrap'} bg={'blue.400'} py={6} px={"10vw"} justify={"space-between"} color={"white"} fontSize={"20px"} align={"center"}> 
    <Box fontSize={"22px"} fontWeight={'semibold'}>
   <NavLink>Web Dev</NavLink>    
   </Box> 

   <Box display={{md:"none"}}>
    <GiHamburgerMenu/>
   </Box> 
 <Box w={{base:"100%",md:"auto"}}>   
  <Flex as={"ul"} gap={"2vw"} listStyleType={'none'} direction={{base:"column",md:"row"}}>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/'>About</NavLink>
    </li>
    <li>
      <NavLink to='/'>Service</NavLink>
    </li>
    <li>
      <NavLink to='/'>Contact</NavLink>
    </li>
    <li>
      <NavLink to='/'>Blogs</NavLink>
    </li>
  </Flex>
  </Box> 
   </Flex> */}
  </>
  )
}

export default Navbar
