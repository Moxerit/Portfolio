import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import React from 'react'
import Image from 'next/image'

import dystopia from '../public/images/dys.webp'
import dyscontract from '../public/images/dystcontract.webp'
import remcontract from '../public/images/remcontract.webp'
import seattle from '../public/images/Seattle_toy1.webp'
import helmet from '../public/images/helmet.webp'
import nftscroller from '../public/images/nftscroller.webp'
import dashboard from '../public/images/mbd.webp'
import car from '../public/images/car.webp'

const Works = () => (
  <Layout title="Works" >
    <Container minW="50vw" >
    <Box borderRadius="lg" bg="#0e151a" p={[6, 10]} w={"100%"} mh={"50vh"} mt={[0, 6]} align="center">  
      <Heading as="h3" fontSize={[30, 48]} mb={{ base: 6}}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1, 1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={dystopia} title="Dystopia.Earth" >
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={dashboard} title="Moby Dashboard">
            "Whale Watching" dashboard for tracking transactions of the biggest wallets in Ethereum. Using Moralis template and Infura for node provision.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem pb={2} id={car} title="Car Rental Dapp" >
            Dapp utiziling renting, depositing, and loaning for renting cars porotype. This is currently using the Avalanche Fuji testnet alongside Chakra UI for
            improved UX. Capable of allowing users to create a profile attached to their wallet address (Metamask) and page restrictions to redirect users for registering, renting,
            or depositing depending on their profile state. Created as a template for others to implement with their own contracts and testnets if desired.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={nftscroller} title="NFT-Scroller">
            Alchemy demo DAPP for searching NFTs of wallets with the addition of selecting NFT contract address specifically. Updated for faster API fetching, bug fix for API fetch error, and refactored TailwindCSS.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Contract work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 1, 1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={dyscontract} title="Dystopia Contract">
            Custom minting contract for Dystopia to allow these parameters: batch minting, batch release control (release NFTs in batches), merkle tree whitelisting, ERC721A (was implemented during development as it was released mid-way),
            incremental minting, modularity for dapp templates (Hashlips, ThirdWeb, etc), and airtight security for safe minting (bots, contract minters, gas wars). 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={remcontract} title="Remillio Contract">
            Commissioned contract for Remillio Maker to allow these parameters: Incremental discount minting, ERC721A+, modularity for dapp templates (Hashlips, ThirdWeb, etc), free mints for certain holders with snapshot, and security for safe minting
            (bots, contract minters, gas wars).
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          3D Models
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 1, 1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={seattle} title="Seattle Space Needle">
            One of my favorite pieces I have made. I mainly have done models only, but have worked on renders like re-creating a toy in plastic like seen here. You can mint one for free and have access to my 
            3D files for free. (work in progress, migrating to testnet for free mints)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id={helmet} title="Gueira's Helmet">
            Comissioned piece of Gueira from Made in Abyss for his helmet. Fully ready to print, wear, and use with LEDs. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Box>
  </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'