import NextLink from 'next/link'
import Logo from './logo'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FinnTheHuman } from 'phosphor-react'
// import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#c1292e', '#c1292e')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? '#c1292e;' : undefined}
        color={active ? '#141D24' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      mt={10}
      borderRadius="25px"
      as="nav"
      width="60vw"
      mx="auto"
      bg={useColorModeValue('#c1292e', '#141D24')}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        wrap="wrap"
        alignItems="center"
      >

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          display={{ base: 'none', lg: 'flex' }}
          width={{ base: 'full', lg: 'auto' }}
          alignItems="center"
          justify="space-between"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Logo pr={0} color="#c1292e" />
          
          <LinkItem
           _hover={{textDecoration: "none !important", }} bg="none" m={3} pr={8} letterSpacing={1.4} fontWeight={'bold'}  href="/" path={path}>
          Chase A.
          </LinkItem>

          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/snippets" path={path}>
            Snippets
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/craftzdog/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <LinkItem _hover={{textDecoration: "none !important", background: "#c1292e", textColor: "#141D24"  }}  bg={"#FCF7F8"} borderRadius={"25px"}  href="/connect" path={path}>
            Connect
          </LinkItem>
        </Stack>

        <Box flex={1} p={2}  align="middle">
          {/* <ThemeToggleButton /> */}

          <Box color="#c1292e" w="100%" justify-content="center" display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu" >
              <MenuButton

                _hover={{
                  border: "3px dotted #c1292e !important",
                }}
                _active={{
                  background:"#141D24 !important",
                  border: "3px solid #c1292e !important",
                }}
                
                border="3px dotted #141D24 !important"
                p={6}
                borderRadius="25px"
                width={"100%"}
                as={IconButton}
                viewBox="0 0 24 24"
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar