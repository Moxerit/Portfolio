import NextLink from 'next/link'
import Logo from './logo'
import Layout from '../components/layouts/article'
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#A82428', '#A82428')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? '#A82428;' : undefined}
        color={active ? '#0e151a' : inactiveColor}
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
      width="50vw"
      mx="auto"
      bg={useColorModeValue('#A82428', '#0e151a')}
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
          justify="flex-end"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Logo pr={0} color="#A82428" />
          
          <LinkItem
           _hover={{textDecoration: "none !important", }} bg="none" pr={6} color="#A82428"  letterSpacing={1.4} fontWeight={'bold'}  href="/" path={path}>
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
            href="https://github.com/moxerit"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          {/* <LinkItem _hover={{textDecoration: "none !important", background: "#A82428", textColor: "#0e151a"  }}  border={"2px solid #A82428"} borderRadius={"25px"}  href="/connect" path={path}>
            Connect
          </LinkItem> */}
        </Stack>

        <Box flex={1} p={2}  align="middle">
          {/* <ThemeToggleButton /> */}

          <Box color="#A82428" w="100%" justify-content="center" display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu" >
              <MenuButton

                _hover={{
                  border: "3px dotted #A82428 !important",
                }}
                _active={{
                  background:"#0e151a !important",
                  border: "3px solid #A82428 !important",
                }}
                
                border="3px dotted #0e151a !important"
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
                  href="https://github.com/moxerit"
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