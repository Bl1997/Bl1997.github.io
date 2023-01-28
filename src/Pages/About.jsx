import React from 'react'

import { Box, Button, Image, SimpleGrid, Text,Icon,} from "@chakra-ui/react"

import {IoLogoGithub,IoLogoLinkedin,IoLogoTwitter} from 'react-icons/io5';
import Resume from './Resume';

const About = () => {

  const handleRes=()=>{

  }

  return (
    <div>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {/* <Box display={"grid"} gap="100px" > */}
  <Box>
  <Text  fontSize={"4xl"} color={"#F86515"} fontWeight="bold">Hello, I'm Bihari Yadav</Text>
  <Text color={"grey"} fontSize="2xl" fontWeight={"bold"} >A Full Stack Developer</Text>
  <Text color={"skyblue"} fontSize="larger">Design is not just what it look like, Design is how it works!</Text>
  <Text color={"white"}>A good Software Developer will have a deep understanding of programming languages and the software development life-cycle, as well as excellent analytical abilities and problem-solving skills.
  I want to achieve global recognition
              and exposure with my skillset, toolset and mindset.

  </Text>
  <Box display={"flex"} gap="20px" marginTop={"50px"} marginLeft="20px">
    <Button onClick={handleRes} bgColor={"#F86515"} color="white" padding={"8px"} fontSize="larger" fontWeight={"semibold"} borderRadius="10px" _hover={{color:"#F86515" ,bgColor:"white"}} >
       <Resume/>
    </Button>
    <Button  bgColor={"white"} color="#F86515" padding={"8px"} fontSize="larger" fontWeight={"semibold" }  borderRadius="10px" _hover={{color:"white" ,bgColor:"#F86515"}} >
       My Projects
    </Button>
  </Box>

<Box display={"flex"} gap="25px" marginLeft={"25px"}>
<a href="https://github.com/Bl1997">
   <Box gap="20px" marginTop="40px" color={"white"}>
                  <Icon textAlign={"center"} as={IoLogoGithub} color={'#F86515'} w={8} h={8} />
                  <Text>github</Text>
             </Box>    </a>


             <a href="https://www.linkedin.com/in/bihari-lal-2a97a1236/">
             <Box gap="20px" marginTop="40px" color={"white"}>
                  <Icon textAlign={"center"} as={IoLogoLinkedin} color={'#F86515'} w={8} h={8} />
                  <Text>Linkdin</Text>
              </Box> </a>


              <a href="https://twitter.com/yadav06bihari">
            <Box gap="20px" marginTop="40px" color={"white"} >
                  <Icon textAlign={"center"} as={IoLogoTwitter} color={'#F86515'} w={8} h={8} />
                  <Text>Twitter</Text>
                </Box> </a>
   </Box>
  </Box>
  <Box><Image borderRadius={"20%"} src='https://avatars.githubusercontent.com/u/107970081?v=4'/></Box>

  {/* </Box> */}
  </SimpleGrid>

    </div>
  )
}

export default About