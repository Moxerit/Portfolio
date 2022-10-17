import { Container, Heading, SimpleGrid, Divider, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Highlight from 'react-highlight'
<link rel="stylesheet" href="/path/to/styles/default.min.css" />

const Snippets = () => (
  <Layout title="Works">

<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/solidity.min.js"></script>
<script type="text/javascript">
    hljs.highlightAll();
</script>
    <Container minW="90vw">
    <Box borderRadius="lg" bg="#0e151a" p={10} w={"100%"} mh={"50vh"} mt={[0, 6]} align="center">  
      <Heading as="h3" fontSize={[30, 48]} mb={{ base: 6}}>
        Code Snippets
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
      <Section  delay={0.1}>
          <Box w="100%">
          <Text textColor={'#A82428'} my={5} fontSize={[16, 24]}>
            Deploy Cairo testnet contract with Protostar snippet
          </Text>
            <Highlight   language="solidity" width="100%" className="css">
              {
`
@mox time saving snippet for providing constructor input on Protostar test deploy
protostar deploy build/ERC721_custom.json
 --network testnet --inputs
  {name} {symbol} {address}
@mox example constructor for the snippet
func constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    name: felt, symbol: felt, owner: felt
) {
    ERC721.initializer(name, symbol);
    Ownable.initializer(owner);
    last_tokenID.write(Uint256(0,0));
    return ();
}
`}
             
            </Highlight>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Box w="100%">
          <Text textColor={'#A82428'} my={5} fontSize={[16, 24]}>
            isSecured() - Modifier to prevent hostile contracts or exploits for minting
          </Text>
            <Highlight language="solidity" width="100%" className="css">
              {
`modifier isSecured() { require(addressBlockBought[msg.sender]
< block.timestamp, "Prevents minting on same block.");
require(tx.origin == msg.sender,
"Prevents minting by other contracts.");
_; }`}
             
            </Highlight>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Box w="100%">
          <Text textColor={'#A82428'} my={5} fontSize={[16, 24]}>
            Batch minting - Release supply over time using batch mints
          </Text>
            <Highlight language="solidity" width="100%" className="css">
              {
`
// @mox set max cap for the batch and track how many have been minted
uint256 public batchSize = 100;
uint256 public batchCount;

modifier mintCompliance(uint256 _mintAmount) {
  require(_mintAmount > 0 && _mintAmount <= maxMintAmountPerTx, "Invalid mint amount!");
  require(batchCount + _mintAmount <= batchSize, "Max batch size exceeded!");
  require(_mintAmount + batchCount <= maxSupply, "Max supply exceeded!");
  _;
}

// @mox Increase batch size when ready to allow more to be minted.
  function setBatchSize(uint256 _batchSize) public onlyOwner {
        batchSize = _batchSize;

  }
// @mox Fail safe to adjust how many minted.
  function setBatchCount(uint256 _batchCount) public onlyOwner {
        batchCount = _batchCount;

  }
`}
             
            </Highlight>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Box w="100%">
          <Text textColor={'#A82428'} my={5} fontSize={[16, 24]}>
            Dynamic price - Function to check if price changes depending on mint amount
          </Text>
            <Highlight language="solidity" width="100%" className="css">
              {
`function dynamicCost(uint256 _mintAmount)
internal view returns (uint256 _cost){

if(_mintAmount < 5) {
    return 0.04 ether;
}
if(_mintAmount < 10) {
    return 0.03 ether;
}
if(_mintAmount <= batchSize) {
  return 0.05 ether;
}

}`}
             
            </Highlight>
          </Box>
        </Section>
      </SimpleGrid>
    </Box>
  </Container>
  </Layout>
)

export default Snippets
export { getServerSideProps } from '../components/chakra'