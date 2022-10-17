import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Paragraph from '../components/paragraph'


export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title }) => (
  <Box w="80%" textAlign="center">    
          <Text textColor={'#A82428'} mt={{ base: 4, md: 8}} mb={6} fontSize={[24, 32, 32]}>
            {title}
          </Text>
          <Image placeholder="blur" src={id} className="grid-item-thumbnail"/>
        
          <Text mt={5} fontSize={[14, 16, 16, 20, 24]}>
          {children}
          </Text>
   
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 8px;
      }
    `}
  />
)
