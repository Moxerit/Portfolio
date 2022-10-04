import {
  Container,
  Box,
  Avatar
} from '@chakra-ui/react'

const Page = () => {
  
  return (
    <Container minW="70vw">
      <Box borderRadius="lg" bg="#141D24" p={10} w={"100%"} mh={"30vh"} mt={36} align="center">
        <Box 
        display="flex"
        textAlign="center"
        alignItems="center"
        mb={6}
        mt={3}
        >
          <Avatar display={{base: 'none', md : 'flex'}} background="#141D24" p={1} mr={3} size='xxl' name='Chase Alber' src="https://i.imgur.com/zMLrNyP.jpeg" />
          Chase is a 3D modeler, solidity wizard, and full-stack developer located
          out in the mountains of Montana. His interest spans wide and enjoys being able
          to contribute to any part of a project, delivering
          production ready projects on his own or as part of a team. Outside his work online
          he can be found slinging dries on the Missouri river or hiking through
          Glacier park. 
          
          
          
        </Box>
        
          
      </Box>
      
      
    </Container>
  )
}

export default Page


