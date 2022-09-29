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
          
      </Box>
      
      
    </Container>
  )
}

export default Page
