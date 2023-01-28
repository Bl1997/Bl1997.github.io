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
  } from '@chakra-ui/react';
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
        <Text fontWeight="medium" color={"white"}>{props.name} </Text>
        <Text>—</Text>
        <Text color={"white"}>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
  };
  
  export default function Projects() {
    return (
     
      <Container maxW={'7xl'}>
           <Box>  <Text fontStyle={"oblique"} fontSize="3xl" fontWeight={"bold"} textAlign="left" width="200px" borderBottom={"2px solid #F86515 "} borderRadius={"5px"} color="#F86515" >Projects</Text></Box>






           <Stack
            borderBottom={"1px solid gray"}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
         
         <Flex
            flex={1}
            justify={'center'}
            align={'center'}
       
            w={'full'}>
            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
             <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}>
              <Text
              color={"#0072F8"}
              fontStyle="oblique"
              fontWeight={"bold"}
              borderBottom="2px solid skyblue"
                as={'span'}
               
                _after={{
                  content: "''",
                  width: '100%',
                  height: '30%',
               
                  bottom: 1,
                  left: 0,
                 
                  zIndex: -1,
                 
                 
                }}>
                Jefit-Clone
              </Text>
              <br />
             
            </Heading>
            <Text color={'white'} width="350px" fontWeight={"semibold"}>
            JEFIT COVERS ALL OF YOUR WORKOUT NEEDS. JEFIT is a Individual Project made in 5 days. 
            </Text>
            <Stack  direction='row'>
            <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"white"}>
            Individual
  </Badge>
  <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"110px"} borderRadius="3px" bgColor={"white"}>
  Fitness site
  </Badge>
            </Stack>
   
            <Stack direction='row'>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    HTML
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    CSS
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"95px"} borderRadius="3px" bgColor={"#F85700"}>
    JAVASCRIPT
  </Badge>
  
 
 
</Stack>
<Stack direction={"row"}>
<Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    ES-6
  </Badge>
<Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"#F85700"}>
    Chakra UI
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"#F85700"}>
    React
  </Badge>
</Stack>

            <BlogAuthor  name="Bihari Yadav" date={new Date("2022-06-12")} />
          <Stack direction={"row"} pt={10} gap="15px">
            <Button
              bg={"#EF5400"}
              padding="3px"
              size={"sm"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "white",color:"#EF5400" }}
              rightIcon={<BsGithub  />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                href={"https://github.com/Bl1997/-better-land-1367/tree/main/jefit_clone"}
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
              _hover={{ bg: "#EF5400",color:"white" }}
              rightIcon={<BsLink45Deg />}
            >
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
           
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
            
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSnpNS0vipswcmMULmpJ7twqpOsOWlufiFw&usqp=CAU'
                }

              />
     
           
            </Box>
            <Box marginTop={"10px"}>
            <Image marginTop={"20px"} width={"500px"} borderRadius="10px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC4ia5D9-cW5jSCbYVphWR1scPPpxBUxF6Q&usqp=CAU' />

<Image marginTop={"20px"}  width={"500px"} borderRadius="10px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AWyvBXqnKeDTo4f1Ln9mQY1JIiMWXt7QfF0AjeCw7YA2iw2MFr2AT5rnI_kwhe921Yo&usqp=CAU' />
            </Box>
           

         
        </Stack>



         
        <Stack
        borderBottom={"1px solid gray"}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
         
            <Box
           
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
            
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'350px'}
               height="100%"
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX/2gAAAAD/////2QAICAj/3ADWzADTyAD/5AD/6QD/3wD/7AD/5wD/4AD/4wD/6gDhxwD/7wCZggC+tAD/8wCSfgD//vgKAADq2QCHfgD4+Pj44wDz3ACCcgDApwD/7JclHQA2MABRSQCXl5fp6en/4UH/6Hv/647/3SnJvQCwowDi0gB/eQBFOwAAAAhaVAClnAB1YwBlZWUpKSl6enpLS0v/++r/87n/5Wb/9cr/+NUWDgBtZQCekgCOggAdGADJtQDBuABlYABdTwBxawAlIQBrWgCwqQBJQQDIrgC4uLjr0AAeEwDU1NT/4kwyKQB7ZwBBQAChmwCxmgA4NQD//wAsIgAlGQDh2gDavwCRjABJOgBaSQCHcgBbWgAXAAA0NDSFser9AAAO4klEQVR4nO2de1+bSBfHIVMShuESTNpgiW0Se5GgNa29a2zU1NhqV3ftY3dd2+37fxXPDARCkiGCzqjhw/ePXYvImR8zc+bMFaEQw9t3j98/XRHmgZWn7x+/exsnRKBdfPDh2Qog3HbaE+KldeXZhwcJFb59vjI32qJgkc8pOTml8O2zuZTnA8CzKY2TCh/PsT4CAI9nKvy4Mt/6CGDlY7zCec9An4lsjCp8nwV9BPCeqvDBH1kRiCX+8WBaYZYEjkkMFWZKIJE4qTAzdTAgrItC4EVvO0XMCTyqr/Bj9gRiiR8jCp9mUuHTkcIMllGCX06JwrfZFIglvh0qfJZZhc98hZnNQj8TscLnGVb4nCh8MB+DMVdj5QFW+CG7WYgz8QNWmFk/Q8C+RihkuZDiYloQMuxJCeCt8C7jCt8JGY3YAsBjIXMdw3HAeyGT3YoIT4Vsu1LsTAXptpPAmazry8nJycnJycnJycnJycnJycnJybk9JMwNmIiHs3FZrZfLh7aq85oLAAq0D8szwMYlbhMRQLPbLRGzuV4xFC5mJORsNcSZHK+6iJNEgJzPoZ3vRZW9GaBbrdnyfBZNLhIB6o6ZqUDWZoDsJNFH3i/iUB2B2pkw4+iMTWilhAJFsQUZ28ZI7qSVWp3xi7TPEisUuypb2xhjb8rKKtsXKXcpSmKpM7Ut0LIQYzHNRPgjjcIu6zqi015wRWNoQSqnESj+W2Xr6IC5T7GyLTM0oQxSKRQRQ9sYUG1SjJywrO7yQjqFLN+uQBQeU4y8zJRCWh7us3SmWvuWFf5LMbLHUmFKTyMybhCBeUExcsA0BE7XWogGQ9MCCUppvvSYqcJ0Lb7IOPoG8CfFSI1tSbE/pRB4xrg9jPF0CtOgJkXkjWsIa4XaZM/Co8RUIYCV5Apfsu4GSzs0MxWFqRGglppJFd5n3bmg+/IF1o2SorYTauywjIkJUp1mpsW6MuDqYNZLlTGcJZpph3kv36AOEHHoagNJUsaoTvdMMYfMFaq0Jl90b2D5JqQZrtnM7aiLNEOnrPuh00hFmuED9qVHpwbGv3gNXY5QqaHOEvtxGrozPWJfWCYABnUItc2h8NhUV9Nj7bQnkSyaWbHM3gEAY51mqc/Bm44hU4OpMx5lh14fRN7FFB7QrO4aHOq/RI+L23yLKXUUE/twxsGUD7xHs9VkH9ZEAAY1oOHTDgPzhGqMbf9iEptq8zOfRkrZoVrb4zPV5QHgOdXmfebzXj4q1ZpYYtuFGoOehbyCRWDQi+k6t7gGQLr/PuNVbJSYCUyHVybGtPbsZ2VCVNrAtyiu8cpESHekjOe8osQ0+mKbfRhMoPcqcLXgF0fFlRrR5tI8VWNWZXCMhQHaotvc41BOAdqmG2tyaio8YiI3Ueywtxo7etrhErENoU/QENi3UDBu3QLfTndsJh6xnpI1qZ01TJdnFmIQdeALs860FQZmTCUUN3nWQoISO7ewyrD0ABg7Xcq1Fnq249wpLj7MJAJ5J87IMZ+mN0psm4hfLyOJs9a3VfgPXwIjroawkgjUeIE8u2qjBJj/xSagyyABwNiJfT7HiDRKXBeDsGpe9+kAzViT0eXtSIdpMFbj07B+zcXDEqLOHvhw68RMYX+OT0XTvcbiYaDZcQ09weU4mjDO7An39pVH3wAqzVqs8NfNlFE/JTMXhqzb8lWSAjRjRgnFj+U6bjmZmNiocZiNKHVtBBJymrOeeWTf6GlIEn2eJuTPkplyVwSydmc+USzeWCX0Ueij7SP23RTr6SVoz/DPHgMOux9mMiN0DNgtQV24PFlA0KB1mT7x/CaCmYmEIeq01xitto2UmSIBkCB0YoP5kP7NCyQS6SPuY2z2HcOMXRsmSYZZ3KYPUY7Bb9B5JsCc6dxDXg4ODVXWhrvOhkmVFF1F9Z2YAdEJWowHEFJIvLT6DDl72e2VLVtWIUFVbeuw99dSM+Ff35pAUlCTSiTUztYu9ne3tvb3Do43U/xdi8cmp+QS4zuLrFi/vRz0JJqXe9Tr0b92f+y6ElGKNaFX4BbawSmJcjFNpUrJ4HaaiQmJip1o4+cV+OReqZPCgdjh2+uxm76HwguAnDTL7BPCanCSCUCzL+n7pKZp3XRn4hJAtcI0G7vVO3e0KtDtZGFqEnatmxuSSQMszh7bSMqxg/gdm3AtLh1qScTm4O640GmAUq1QV0smz78O4nbmBhuAZjhXL6trg6sNRN4sQIPu1XzOFhnYmQ8kaFTSZuT3jn2b/cDUAM202uuJQ/JW1zXlBONydwog6LDe2167VF1zqWJBjqfq8EWRjXqpux83VbW5t7BTN1RtnkonBUk3q7LrnC4s7bbWms3j4+Za61f//mmvSH7B/dynGwEAf/DQRGScTYUQIQR1RRIy8WHXEZGvYM/RB7FzcnJycnJycnJyGKFlOwYGutC+Y9MDbAFoVXjh8j4z4BYB6uCF8OKIy8azu4FWEl8I98S1213swBHFEsV7WCHjDT13B2+JqKdQ3MqkRMloioFCcYvxEX13AckmAgOF4q+5GlFPANBsf81joFBsoRteZMwXILvDSfdQodj4+47P26UhsrNopFAUK3dpdce1kCKLe6MKxUVOnwO4YYBsRab2xhSKzWIWsrE6iGoaVyiKqzbvTah8ARKc+LzCpEKx1lHluZ1UAAK0JifYpxSK4lkbwnmbjvUAErKmtw9QFGK2LXPuZi0l3SzR9m3QFYriQdtVydzs3S+wJIWSrsJyl75vI04hZm3xiysjpOqaMvvjPbeIoukQQdttrzbjZMxQSDhr9Rce9ZxSMRklViQ153w53d46mLmN7hKFGSBXOP/kCuefXOH8kyucf3KF02weX/J9wgQcJNv+S+V+M939KRX2HdmsVqHb/p7OzDgX/zOvvGmxiOLOGowhlcK+hSTgoaPKjANcLmNBFy47kSGOWp3+xZt40igcINKNVjUdqVjjNTYdLshxp1peCleFFRXr661/qm2ubZNdEdUUXysc5xoKRY4KuwgoVrguvYOAGf16UK0xXTs2G/5a/eGK/Xu14BeBws0f04v5PzVqE1c2I3viGj/qwNjfbDQaiTfKJVbYrIKx40xWrcg5Q/2eVa9bvegwyXG3bNUtMrTQt4tEfcu2WmKr7RbPfIXfO94N59GSsN528XP+WRy7gu/q9f00uHYdO4E6wU66bTWxQkcC9hH9V3+6UCHDJZpRDN3PuSETpyTJcPFQ8M4l2FH004GhC/KAKCyFN9jh8FjNgRpZIK2owZj1pxLU8V2CAv8mpadrgBEyY4XHBoAxW312yVk7mixrOL1ouK1rB6dF0mWSPCzE+8uKBDQFJ99cxQrxL8Mbgu3uRwg/QZFVcm14HAUif4CfLOBajwtIy1RV4shVTOL2JqnCRRnU6TtgvptYhdU5WWrXNSDY3rfT2hAAWD7/ue1AkimBQgA0e7BP6iFZyQ7L2z/Py+RO/9ACSwKKPVg66br414hsuq1oQLLbSycdC18hx5k29/frQF7Yx8QdwXllhQNN6Xk/NJZCTjzJRSk4qPKoIgONvNqLKgC2Xyl/2VJEoe54tc5TOLyhLwsAkYanIwO95JdycsQk+TSRDQTLv4IdG/K9XB3Al0nFDRVuJLrvH0n/y/vBUuUA1T4g5zIDPfy8Jq6s1SP/f8EuxAM4Uhh854AoNIMb8AM0/PJ+2GD0GYRzFaATsWEA7dHwyvbfvmeppVa4IbxJqFD2PEJtdKIYrkiWKD7ShHpNrHmQg3L0rljD/x2dDNjRQ4XDbCAK9dFxGm0N2A2xD4HaCp4jQkAOu8WOU14ab4XSK/wtvEp0X08ZpqlrDXGxfdgQy7jwBZcs4mwq4r4BjNFG0n9hoDDMI6wQNcMbLvANLfFUjzynLnjFtIP9CpTdL+f74XB2eoWvhOVE93V06Z+JSye4fOJSK4Ax0JL4E1fHSINsBwqVLyOF2qhdP0LEr3xRxp/jVegiIq2Qoqq2u35VhcvC10T3vVSB2hy/1FYkx1MoBRVT13UTXyIKR2WrFioMK9W4wkaoMPIcaHtubLuomjppbCVzGE7UgUr7EmM8X4UnyW60gT7eAh2rAK6SCiqVf94PITHjBU7yyJnvqTSFaBS3k5e3Jnax6shzRh3Ii+3Koa3gUus3Vq6U8rvBT4RCMmeKUzB+gnBJ8VpIfN1fmePhuxIVRI44rSg0hcO2h+BIglUTdyH2KuG1if3gZz38EL+c4vpqp/le6UZBKLxOdqsxbIaDdMn+cbtrxsjLH1l+fIJFhQdILY1ai6hCgPrDfyyqvmPF3sUO+tUlZJEI8ZcVvKh9FRj+H7QMMOuE2CleY4Xfkt26h2MX1B56kHXsNnXfUEXHfQ7vnfdtAUByQ4Pc2vFCCdx40xUGp73httzPFHJYtq+i5WrA3PVEa/6k/LErEX/r4WhALiU44m3IN6zwYbJiKi4hEhL2tlcXT138oxx08SxcSZD7pVfHuTw8xHmV/N7uPerZRAtdIVDrwxuGTgT3PwGyej0X4djAy8MSDgNR6bTbU3FAF5g7wlGSBJ3TZKeMbTzECgvJ2gscYpPkKCokpyFKZljfG65KXDoJO1FpGLuem9j/KSTSlmSKQh0IcnhDeOjbDiLPIZ5T9gtFjTwZx+f4Lt0Ks61pk6hdqybqCC8XiMKE3tQ7sQKSfbuSXh0746NjQjIfiyLnYLdcUyPXTGut6GsY6OE56z9NpfTdv0GruiOvsmojMt2sjt5e25TJVK9ejfrxzUpVlgQzUaPxxFOY1NcQlirlw7LTbU5ddpzBeEvc6jhlp3OBfVHRU/afUwn7l4PSWnDD+G72/YHjVO5HOgOb204Z25sYQPi0vVNK1Ga8LvgKE2fi3PFkqDBxTZw3lguBwsLv204LF34XRgoTtolzxreIwkyW0+VCVGEhWTdxnnhVGFdYSNbXnx/eFCYVPsyWxDcPpxRmS+JIYERhluriq4iqqMLMeNTlQpzCwrcsNP2/vxXiFWYhG5cnFE0qLDxJ0dO4g7x+MiloSiHWuJyw13/n2Fie0kdViBuOb6/nT+TG628PaWKoCr2c/Lr86s3GvXlg482r5a+U3PP5P2Xje2iN3t7ZAAAAAElFTkSuQmCC'
                }

              />
     
           
            </Box>
            <Box marginTop={"10px"}>
            <Image marginTop={"20px"} width={"500px"} borderRadius="10px" src='https://www.gearbest.com/u_file/2212/15/products/4a03782d51.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500' />

<Image marginTop={"20px"}  width={"500px"} borderRadius="10px" src='https://www.gearbest.com/u_file/2212/15/products/4-4695.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_500' />
            </Box>
           

          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
       
            w={'full'}>
            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
             <Stack flex={1} spacing={{ base: 5, md: 10 }}>

             <Stack  direction='row'>
            <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"white"}>
            Collaborative
  </Badge>
  <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"110px"} borderRadius="3px" bgColor={"white"}>
 E-Commerce
  </Badge>
            </Stack>
   
            <Stack direction='row'>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    HTML
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    CSS
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"95px"} borderRadius="3px" bgColor={"#F85700"}>
    JAVASCRIPT
  </Badge>
 
</Stack>
<Stack direction={"row"}>
<Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    ES-6
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"#F85700"}>
    Local Storage
  </Badge>
</Stack>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}>
              <Text
              color={"#0072F8"}
              fontStyle="oblique"
              fontWeight={"bold"}
              borderBottom="2px solid skyblue"
              textAlign={"left"}
                as={'span'}
               
                _after={{
                  content: "''",
                  width: '100%',
                  height: '30%',
               
                  bottom: 1,
                  left: 0,
                 
                  zIndex: -1,
                 
                 
                }}>
               Gearbest-Clone
              </Text>
              <br />
             
            </Heading>
            <Text color={'white'} width="350px" fontWeight={"semibold"}>
            Gearbest is a big Chinese e-commerce store that sells a plethora of products.
            Gearbest is a Collaborative Project made in 5 days.
            </Text>
        

            <BlogAuthor  name="Bihari Yadav" date={new Date("2022-09-21")} />
          <Stack direction={"row"} pt={10} gap="15px">
            <Button
              bg={"#EF5400"}
              padding="3px"
              size={"sm"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "white",color:"#EF5400" }}
              rightIcon={<BsGithub />}
            >
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
              _hover={{ bg: "#EF5400",color:"white" }}
              rightIcon={<BsLink45Deg />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="#"
                href={"https://illustrious-caramel-75a4d0.netlify.app/app.html"}
              >
                Deployment
              </Link>
            </Button>
          </Stack>
           
          </Stack>
          
          </Flex>
        </Stack>

<Divider/>



<Stack
 borderBottom={"1px solid gray"}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
         
            <Box
           
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
            
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMkOkuDHTIDA1Jd_SCp-REC0xFfHR-FAYtQ&usqp=CAU'
                }

              />
     
           
            </Box>
            <Box marginTop={"10px"}>
            <Image marginTop={"20px"} width={"500px"} borderRadius="10px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1672130493_1486733036_dsc_0153.jpg' />

<Image marginTop={"20px"}  width={"500px"} borderRadius="10px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952031_1637516919_img_8593.jpg' />
            </Box>
           

          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
       
            w={'full'}>
            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
             <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}>
              <Text
              color={"#0072F8"}
              fontStyle="oblique"
              fontWeight={"bold"}
              borderBottom="2px solid skyblue"
                as={'span'}
               
                _after={{
                  content: "''",
                  width: '100%',
                  height: '30%',
               
                  bottom: 1,
                  left: 0,
                 
                  zIndex: -1,
                 
                 
                }}>
                Tripoto Clone
              </Text>
              <br />
             
            </Heading>
            <Text color={'white'} width="350px" fontWeight={"semibold"}>
            Tripoto is one of the largest communities of Travelers in the world. We are crowd-sourcing amazing travel itineraries from around the world.
            </Text>
            <Stack  direction='row'>
            <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"white"}>
            Collaborative
  </Badge>
  <Badge  color={"#F85700"}  padding={"2px"} fontWeight="bold" width={"110px"} borderRadius="3px" bgColor={"white"}>
  Travellers site
  </Badge>
            </Stack>
   
            <Stack direction='row'>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    HTML
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    CSS
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"95px"} borderRadius="3px" bgColor={"#F85700"}>
    JAVASCRIPT
  </Badge>
 
</Stack>
<Stack direction={"row"}> <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"90px"} borderRadius="3px" bgColor={"#F85700"}>
    ES-6
  </Badge>
  <Badge  color={"white"}  padding={"2px"} fontWeight="bold" width={"105px"} borderRadius="3px" bgColor={"#F85700"}>
    Local Storage
  </Badge></Stack>

            <BlogAuthor  name="Bihari Yadav" date={new Date("2022-08-10")} />
          <Stack direction={"row"} pt={10} gap="15px">
            <Button
              bg={"#EF5400"}
              padding="3px"
              size={"sm"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "white",color:"#EF5400" }}
              rightIcon={<BsGithub  />}
            >
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
              _hover={{ bg: "#EF5400",color:"white" }}
              rightIcon={<BsLink45Deg />}
            >
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






      </Container>








    );
  }
  
  
  export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };