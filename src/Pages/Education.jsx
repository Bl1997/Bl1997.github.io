import { Box, SimpleGrid,Text,Image, Divider } from '@chakra-ui/react'
import {CheckCircleIcon} from "@chakra-ui/icons"
import React from 'react'

const Education = () => {
  return (
    <div id="skills">
       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={50}>
        <Box>
        <Box >
            <Text fontStyle={"oblique"} fontSize="3xl" fontWeight={"bold"}  width="200px" borderBottom={"2px solid  #F86515 "} borderRadius={"5px"} color=" #F86515" >Education</Text>

        </Box>


      
        <Box display={"flex"} gap="20px" textAlign={"center"}  marginTop={"20px"} borderRadius="10px" width={"100%"}bgColor="#C26412">
      
        <CheckCircleIcon boxSize={'30px'} marginTop="5px" marginLeft={"5px"} color='green' bgColor="white" borderRadius={"50%"} /> <Text fontSize={"large"} fontWeight="semibold" color={"white"} marginTop="2px" padding={"5px"}> Full Stack Web Devlopent Course from Masai School, Banglore (Karnataka) full time.</Text>

        </Box>

        <Box display={"flex"} gap="20px" textAlign={"center"}  marginTop={"20px"} borderRadius="10px" width={"100%"} bgColor="#C26412" padding={"5px"}>
      
      <CheckCircleIcon boxSize={'30px'} marginTop="5px" marginLeft={"5px"} color='green' bgColor="white" borderRadius={"50%"} /> <Text fontSize={"large"} fontWeight="semibold" color={"white"} marginTop="2px" > MCA from Rajiv Gandhi Proudyogiki University, Bhopal (M.P.).</Text>

      </Box>

      <Box display={"flex"} gap="20px" textAlign={"center"}  marginTop={"20px"} borderRadius="10px" width={"100%"} bgColor="#C26412" padding={"5px"}>
      
      <CheckCircleIcon  boxSize={'30px'} marginTop="5px" marginLeft={"5px"} color='green' bgColor="white" borderRadius={"50%"}  /> <Text fontSize={"larger"} fontWeight="semibold" color={"white"} marginTop="2px">BCA from Rani Duragwati University, Jabalpur (M.P.).</Text>

      </Box>

      </Box>

      <Box><Image width={"450px"} height="300px" borderRadius={"10%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtl5cO3rxi9ZtwPuu2VOxfm2TzPf9jB7AlQ&usqp=CAU" /></Box>

      </SimpleGrid>
      <Divider/>
      <br />

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={20}>
      <Box>
          <Text color={"skyblue"} fontSize="larger" fontWeight={"semibold"}>Coding</Text>
          <Text color={"white"} fontSize="large">1200+ Hrs Coding Experience</Text>
        </Box>

      
        <Box>
          <Text color={"skyblue"} fontSize="larger" fontWeight={"semibold"}>DSA</Text>
          <Text color={"white"} fontSize="large">300+ Hrs DSA</Text>
        </Box>

        <Box>
          <Text color={"skyblue"} fontSize="larger" fontWeight={"semibold"}>Soft Skills</Text>
          <Text color={"white"} fontSize="large">100+ Hrs Soft Skills</Text>
        </Box>

        <Box>
          <Text color={"skyblue"} fontSize="larger" fontWeight={"semibold"}>Git</Text>
          <Text color={"white"} fontSize="large">100+ Git Commits</Text>
        </Box>

      </SimpleGrid>


    
    </div>
  )
}

export default Education