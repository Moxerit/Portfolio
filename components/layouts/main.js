import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import NavBar from '../navbar'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" href="apple-touch-icon.webp" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Moxerit - Homepage</title>
        </Head>

        <NavBar path={router.asPath} />

        <Container maxW="100%" pt={14}>
          {children}
        </Container>
      </Box>
  )
}

export default Main