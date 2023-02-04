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
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100} marginLeft="10px">
        <Stack spacing={10}>
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

          <Stack spacing={4} direction="row">
            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                CSS
              </Text>
            </Box>

            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                HTML
              </Text>
            </Box>

            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                REACT
              </Text>
            </Box>
            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="js"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                JAVASCRIPT
              </Text>
            </Box>
          </Stack>

          <Stack spacing={4} direction="row">
            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="Redux"
              />
              <Text color={"white"} fontWeight="bold"  class="skills-card-name">
                REDUX
              </Text>
            </Box>

            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="Typescript"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                TYPESCRIPT
              </Text>
            </Box>

            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
                alt="git"
              />
              <Text color={"white"} textAlign="center" fontWeight={"semibold"}  class="skills-card-name">
                GIT
              </Text>
            </Box>

            <Box>
              <Image class="skills-card-img"
                width={"130px"}
                height="100px"
                border={"2px solid #F86515"}
                borderRadius="20%"
                margin={"5px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jcYWZbTCh6wj2K6tms7m-pOJG1sG31e4vA&usqp=CAU"
                alt="Next js"
              />
              <Text color={"white"} fontWeight="semibold"  class="skills-card-name">
                NEXT JS
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Flex>
          <Image class="skills-card-img"
            borderRadius="20px"
            alt={"feature image"}
            width="450px"
            src={
              "https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
