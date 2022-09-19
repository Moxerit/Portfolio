import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container minW="70vw">
      <Box borderRadius="lg" bg="#141D24" p={10} w={"100%"} h={"50vh"} mt={36} align="center">
        <Box 
        textAlign="center"
        mb={6}
        mt={3}
        >
          Chase Alber
        </Box>
          Chase is a 3D modeler, solidity auditor, and full-stack developer located
          out in the mountains of Montana. His interest spans wide and enjoys being able
          to contribute to any part of a project as he is capable of delivering
          production ready projects on his own or as part of a team. Outside his work online
          he can be found slinging dries on the Missouri river or hiking through
          Glacier park. 

        <Box
          mb={3}
          mt={6}
          
        >
          
          To access his solidity snippets please mint the FREE Rinkeby testnet NFT. This is my own "captcha" to prevent spam or unfamilar recruiters for web3. Instructions will still be provided and I encourage
          you to contact me if you need any help or explaination of the process.
        </Box>

          
      </Box>
      
      
    </Container>
  )
}

export default Page
