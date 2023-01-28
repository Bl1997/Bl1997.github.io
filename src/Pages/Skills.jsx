import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNpm,
} from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container maxW={"5xl"} py={12} color="white">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={300}>
        <Stack spacing={6}>
          <Text
            fontStyle={"oblique"}
            fontSize="3xl"
            fontWeight={"bold"}
            textAlign="left"
            width="200px"
            borderBottom={"2px solid #F86515 "}
            borderRadius={"5px"}
            color="#F86515"
          >
            My Skills
          </Text>
          <Heading fontSize={"2xl"} fontWeight="semibold" color={"skyblue"}>
            I Adhere the Following Skills
          </Heading>
          <Text color={"white"} fontSize={"lg"}>
            Mentioned below are the skillsets which I possess in terms of Tech
            and Communication and Behavior.
          </Text>
         
            {/* <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue("#1F4374")} />
              }
            >
              <Feature
                icon={
                  <Icon
                    textAlign={"center"}
                    as={IoLogoJavascript}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"JavaScript"}
              />
              <Feature
                icon={<Icon as={IoLogoReact} color={"#147CAA"} w={5} h={5} />}
                iconBg={useColorModeValue("skyblue")}
                text={"React"}
              />
              <Feature
                icon={<Icon as={IoLogoCss3} color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"CSS"}
              />

              <Feature
                icon={<Icon as={IoLogoHtml5} color={"green"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "purple.900")}
                text={"HTML5"}
              />

              <Feature
                icon={<Icon as={IoLogoNpm} color={"red.500"} w={6} h={6} />}
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"NPM"}
              />
            </Stack> */}
<Stack spacing={4} direction="row">
<Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%"margin={"5px"}      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css"/>
<Text color={"white"} fontWeight="semibold">CSS</Text></Box>

<Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%"margin={"5px"}      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html"/><Text color={"white"} fontWeight="semibold">HTML</Text></Box>

    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%"margin={"5px"}      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React"/><Text color={"white"} fontWeight="semibold">REACT</Text></Box>
    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%" margin={"5px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js"/><Text color={"white"} fontWeight="semibold">JAVASCRIPT</Text></Box>
    </Stack>

    <Stack spacing={4} direction="row">
    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%" margin={"5px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux"/><Text color={"white"} fontWeight="bold">REDUX</Text></Box>

    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%" margin={"5px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="Typescript"/><Text color={"white"} fontWeight="semibold">TYPESCRIPT</Text></Box>

    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%" margin={"5px"}  src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git"/><Text color={"white"} textAlign="center" fontWeight={"semibold"}>GIT</Text></Box>

    <Box><Image width={"130px"} height="100px" border={"2px solid #F86515"} borderRadius="20%" margin={"5px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jcYWZbTCh6wj2K6tms7m-pOJG1sG31e4vA&usqp=CAU" alt="Next js"/><Text color={"white"} fontWeight="semibold">NEXT JS</Text></Box>

    </Stack>
       
        </Stack>
        <Flex>
          <Image
            borderRadius="20px"
            alt={"feature image"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_tQEHGIvCmUMN2SdJgNpVaibpIgek7wQtQ&usqp=CAU"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
