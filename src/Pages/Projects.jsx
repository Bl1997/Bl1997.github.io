import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Image,
  Icon,
  Button,
  HStack,
  useColorModeValue,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://avatars.githubusercontent.com/u/107970081?v=4"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium" color={"white"}>
        {props.name}{" "}
      </Text>
      <Text>—</Text>
      <Text color={"white"}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export default function Projects() {
  return (
    <div id="projects">
      <Container maxW={"7xl"}>
        <Box>
          {" "}
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
            Projects
          </Text>
        </Box>

        <Stack
          borderBottom={"1px solid gray"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", lg: "4xl" }}
              >
                <Text
                  color={"#0072F8"}
                  fontStyle="oblique"
                  fontWeight={"bold"}
                  borderBottom="2px solid skyblue"
                  as={"span"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: "30%",

                    bottom: 1,
                    left: 0,

                    zIndex: -1,
                  }}
                  class="project-title">
                  Jefit-Clone
                </Text>
                <br />
              </Heading>
              <Text color={"white"} width="350px" fontWeight={"semibold"} class="project-description">
                JEFIT COVERS ALL OF YOUR WORKOUT NEEDS. JEFIT is a Individual
                Project made in 5 days.
              </Text>
              <Stack direction="row">
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Individual
                </Badge>
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"110px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Fitness site
                </Badge>
              </Stack>

              <Stack direction="row"  class="project-tech-stack">
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  HTML
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  CSS
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"95px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  JAVASCRIPT
                </Badge>
              </Stack>
              <Stack direction={"row"}>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  ES-6
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  Chakra UI
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  React
                </Badge>
              </Stack>

              <BlogAuthor name="Bihari Yadav" date={new Date("2022-06-12")} />
              <Stack direction={"row"} pt={10} gap="15px">
                <Button
                  bg={"#EF5400"}
                  padding="3px"
                  size={"sm"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "white", color: "#EF5400" }}
                  rightIcon={<BsGithub />}
                  class="project-github-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="_blank"
                    href={
                      "https://github.com/Bl1997/-better-land-1367/tree/main/jefit_clone"
                    }
                  >
                    Github
                  </Link>
                </Button>
                <Button
                  bg={"white"}
                  color="#EF5400"
                  padding="4px"
                  size={"sm"}
                  rounded={"full"}
                  _hover={{ bg: "#EF5400", color: "white" }}
                  rightIcon={<BsLink45Deg />}
                  class="project-deployed-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="#"
                    href={"https://rococo-panda-356a5a.netlify.app/"}
                  >
                    Deployment
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>

          <Box
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSnpNS0vipswcmMULmpJ7twqpOsOWlufiFw&usqp=CAU"
              }
            />
          </Box>
          <Box marginTop={"10px"}>
            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC4ia5D9-cW5jSCbYVphWR1scPPpxBUxF6Q&usqp=CAU"
            />

            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AWyvBXqnKeDTo4f1Ln9mQY1JIiMWXt7QfF0AjeCw7YA2iw2MFr2AT5rnI_kwhe921Yo&usqp=CAU"
            />
          </Box>
        </Stack>

        <Stack
          borderBottom={"1px solid gray"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"350px"}
              height="100%"
              src={
                "data:image/png;base64,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"
              }
            />
          </Box>
          <Box marginTop={"10px"}>
            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://www.gearbest.com/u_file/2212/15/products/4a03782d51.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />

            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://www.gearbest.com/u_file/2212/15/products/4-4695.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500"
            />
          </Box>

          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack direction="row">
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Collaborative
                </Badge>
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"110px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  E-Commerce
                </Badge>
              </Stack>

              <Stack direction="row"  class="project-tech-stack">
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  HTML
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  CSS
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"95px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  JAVASCRIPT
                </Badge>
              </Stack>
              <Stack direction={"row"}>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  ES-6
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  Local Storage
                </Badge>
              </Stack>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", lg: "4xl" }}
              >
                <Text
                  color={"#0072F8"}
                  fontStyle="oblique"
                  fontWeight={"bold"}
                  borderBottom="2px solid skyblue"
                  textAlign={"left"}
                  as={"span"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: "30%",

                    bottom: 1,
                    left: 0,

                    zIndex: -1,
                  }}
                  class="project-title">
                  Gearbest-Clone
                </Text>
                <br />
              </Heading>
              <Text color={"white"} width="350px" fontWeight={"semibold"}  class="project-description">
                Gearbest is a big Chinese e-commerce store that sells a plethora
                of products. Gearbest is a Collaborative Project made in 5 days.
              </Text>

              <BlogAuthor name="Bihari Yadav" date={new Date("2022-09-21")} />
              <Stack direction={"row"} pt={10} gap="15px">
                <Button
                  bg={"#EF5400"}
                  padding="3px"
                  size={"sm"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "white", color: "#EF5400" }}
                  rightIcon={<BsGithub />}
                  class="project-github-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="_blank"
                    href={"https://github.com/Bl1997/curly-hobbies-5555"}
                  >
                    Github
                  </Link>
                </Button>
                <Button
                  bg={"white"}
                  color="#EF5400"
                  padding="4px"
                  size={"sm"}
                  rounded={"full"}
                  _hover={{ bg: "#EF5400", color: "white" }}
                  rightIcon={<BsLink45Deg />}
                  class="project-deployed-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="#"
                    href={
                      "https://illustrious-caramel-75a4d0.netlify.app/app.html"
                    }
                  >
                    Deployment
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>

        <Divider />

        <Stack
          borderBottom={"1px solid gray"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMkOkuDHTIDA1Jd_SCp-REC0xFfHR-FAYtQ&usqp=CAU"
              }
            />
          </Box>
          <Box marginTop={"10px"}>
            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1672130493_1486733036_dsc_0153.jpg"
            />

            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952031_1637516919_img_8593.jpg"
            />
          </Box>

          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", lg: "4xl" }}
              >
                <Text
                  color={"#0072F8"}
                  fontStyle="oblique"
                  fontWeight={"bold"}
                  borderBottom="2px solid skyblue"
                  as={"span"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: "30%",

                    bottom: 1,
                    left: 0,

                    zIndex: -1,
                  }}
                  class="project-title">
                  Tripoto Clone
                </Text>
                <br />
              </Heading>
              <Text color={"white"} width="350px" fontWeight={"semibold"} class="project-description">
                Tripoto is one of the largest communities of Travelers in the
                world. We are crowd-sourcing amazing travel itineraries from
                around the world.
              </Text>
              <Stack direction="row">
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Collaborative
                </Badge>
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"110px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Travellers site
                </Badge>
              </Stack>

              <Stack direction="row" class="project-tech-stack">
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  HTML
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  CSS
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"95px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  JAVASCRIPT
                </Badge>
              </Stack>
              <Stack direction={"row"}>
                {" "}
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  ES-6
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  Local Storage
                </Badge>
              </Stack>

              <BlogAuthor name="Bihari Yadav" date={new Date("2022-08-10")} />
              <Stack direction={"row"} pt={10} gap="15px">
                <Button
                  bg={"#EF5400"}
                  padding="3px"
                  size={"sm"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "white", color: "#EF5400" }}
                  rightIcon={<BsGithub />}
                  class="project-github-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="_blank"
                    href={"https://github.com/sahilkh07/boundless-sleep-6032"}
                  >
                    Github
                  </Link>
                </Button>
                <Button
                  bg={"white"}
                  color="#EF5400"
                  padding="4px"
                  size={"sm"}
                  rounded={"full"}
                  _hover={{ bg: "#EF5400", color: "white" }}
                  rightIcon={<BsLink45Deg />}
                  class="project-deployed-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="#"
                    href={"#"}
                  >
                    Deployment
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>

        <Stack
          borderBottom={"1px solid gray"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", lg: "4xl" }}
              >
                <Text
                  color={"#0072F8"}
                  fontStyle="oblique"
                  fontWeight={"bold"}
                  borderBottom="2px solid skyblue"
                  as={"span"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: "30%",

                    bottom: 1,
                    left: 0,

                    zIndex: -1,
                  }}
                  class="project-title">
                  Hotstar-Clone
                </Text>
                <br />
              </Heading>
              <Text color={"white"} width="350px" fontWeight={"semibold"} class="project-description">
                Hotstar is a Entertainment platform site. Hotstar is a
                Individual Project.
              </Text>
              <Stack direction="row">
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Individual
                </Badge>
                <Badge
                  color={"#F85700"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"150px"}
                  borderRadius="3px"
                  bgColor={"white"}
                >
                  Entertainment site
                </Badge>
              </Stack>

              <Stack direction="row" class="project-tech-stack">
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  HTML
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  CSS
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"95px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  JAVASCRIPT
                </Badge>
              </Stack>
              <Stack direction={"row"}>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"90px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  ES-6
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  Chakra UI
                </Badge>
                <Badge
                  color={"white"}
                  padding={"2px"}
                  fontWeight="bold"
                  width={"105px"}
                  borderRadius="3px"
                  bgColor={"#F85700"}
                >
                  React
                </Badge>
              </Stack>

              <BlogAuthor name="Bihari Yadav" date={new Date("2023-01-02")} />
              <Stack direction={"row"} pt={10} gap="15px">
                <Button
                  bg={"#EF5400"}
                  padding="3px"
                  size={"sm"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "white", color: "#EF5400" }}
                  rightIcon={<BsGithub />}
                  class="project-github-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="_blank"
                    href={
                      "https://github.com/Bl1997/Hotstar_project"
                    }
                  >
                    Github
                  </Link>
                </Button>
                <Button
                  bg={"white"}
                  color="#EF5400"
                  padding="4px"
                  size={"sm"}
                  rounded={"full"}
                  _hover={{ bg: "#EF5400", color: "white" }}
                  rightIcon={<BsLink45Deg />}
                  class="project-deployed-link">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    target="#"
                    href={"https://hotstar-seven.vercel.app/"}
                  >
                    Deployment
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>

          <Box
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "data:image/jpeg;base64,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"
              }
            />
          </Box>
          <Box marginTop={"10px"}>
            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXkNzVZ5qlfvoZ4Wm1zGrHltveVAPdCvkuw&usqp=CAU"
            />

            <Image
              marginTop={"20px"}
              width={"500px"}
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtoAxc1MHmLbGcXA2bWZwnGRLuwAZJiC858kWglZ9_0eHMvDVdvyX1G_E3jn4DFylebY&usqp=CAU"
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
