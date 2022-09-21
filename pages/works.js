import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import React from 'react'

import prevDystopia from '../public/images/dystopia.png'
import dyscontract from '../public/images/dystcontract.png'
import remcontract from '../public/images/remcontract.png'
import seattle from '../public/images/Seattle_toy1.png'

const Works = () => (
  <Layout title="Works">
    <Container  minW="70vw">
    <Box borderRadius="lg" bg="#141D24" p={10} w={"100%"} mh={"50vh"} mt={36} align="center">  
      <Heading as="h3" fontSize={24} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia" thumbnail={prevDystopia}>
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="nft-explorer" title="NFT Explorer">
            Next.js converted DAPP to be used for viewing NFTs on the Ethereum blockchain. Updated with a new node provider (Alchemy) and improved
            load times / fetching. Additionally, updated to include testnets (Rinkeby, Kovan, Ropsten, Goerli), typescript, and improved UI for better user feedback. 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem pb={2} id="car-chain" title="Car Rental Dapp">
            Dapp utiziling renting, depositing, and loaning for renting cars porotype. This is currently using the Avalanche Fuji testnet alongside Chakra UI for
            improved UX. Capable of allowing users to create a profile attached to their wallet address (Metamask) and page restrictions to redirect users for registering, renting,
            or depositing depending on their profile state. Created as a template for others to implement with their own contracts and testnets if desired.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem pb={2} id="nft-auth" title="NFT Authenticator">
            NFT authenticator to allow users to verify ownership to obtain access to pages or websites for exclusive content. Set up for any testnets and currently using Ethereum Rinkeby for testing purposes. Uses Moralis 
            API for verification and Next.js authentication for user assigned token access to manage membership.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Contract work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dys-contract" title="Dystopia Contract" thumbnail={dyscontract}>
            Custom minting contract for Dystopia to allow these parameters: batch minting, batch release control (release NFTs in batches), merkle tree whitelisting, ERC721A (was implemented during development as it was released mid-way),
            incremental minting, modularity for dapp templates (Hashlips, ThirdWeb, etc), and airtight security for safe minting (bots, contract minters, gas wars). 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="remillioMaker" title="Remillio Contract" thumbnail={remcontract}>
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

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="seattle" title="Seattle Space Needle" thumbnail={seattle}>
            One of my favorite pieces I have made. I mainly have done models only, but have worked on renders like re-creating a toy in plastic like seen here. You can mint one for free and have access to my 
            snippets AND the files for the 3D model! 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Box>
  </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'