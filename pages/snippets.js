import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
<link rel="stylesheet" href="/path/to/styles/default.min.css" />


const Snippets = () => (
  <Layout title="Works">
    <script src="/path/to/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <Container minW="70vw">
    <Box borderRadius="lg" bg="#141D24" p={10} w={"100%"} mh={"50vh"} mt={36} align="center">  
      <Heading as="h3" fontSize={24} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            <div className='code'>{"example"}   </div>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
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
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
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

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          3D Models
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem pb={2} id="dystopia" title="Dystopia">
            Homebrewed NFT project focused on enviornmental depictions of a bleak outlook using stylized renders 
            of our self made assets and characters. Utilizing ERC721A which was integrated during development when it was
            released and merkle tree whitelisting with incremental minting.
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

export default Snippets
export { getServerSideProps } from '../components/chakra'