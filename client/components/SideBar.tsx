import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  List,
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';
import { usePlaylist } from '../lib/hooks';
// import prisma from "../prisma/seed";

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];
const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorite',
    icon: MdFavorite,
    route: '/favorite',
  },
];

// console.log("This is prisma",prisma)

// const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SideBar = () => {
  const { playlist } = usePlaylist();
  return (
    <Box
      width='100%'
      height='calc(100vh - 100px)'
      bg='black'
      paddingX='5px'
      color='light gray'
    >
      <Box paddingY='20px' height='100%'>
        <Box width='120px' marginBottom='20px' paddingX='20px'>
          {/* <NextImage src="/logo.svg" height={60} width={120} /> */}
          <h1
            style={{
              color: 'white',
              fontFamily: 'Comfortaa, sans-serif',
              fontSize: '30px',
            }}
          >
            traxx
          </h1>
        </Box>
        <Box marginBottom='20px'>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX='20px' fontSize='16px' key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color='white'
                        marginRight='20px'
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginY='20px'>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX='20px' fontSize='16px' key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color='white'
                        marginRight='20px'
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider bg='gray.800' />
        <Box height='66%' overflowY='auto' paddingY='20px'>
          <List spacing={2}>
            {playlist.map((playlist) => (
              <ListItem paddingX='20px' key={playlist.id}>
                <LinkBox>
                  <NextLink href='/' passHref>
                    <LinkOverlay color='white'>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;

// TODO: Key Takeaways
// - NextImage for image rendering
// - spacing - between items
// - nextLink - opts for client side rendering
// -  {new Array(50).fill(1).map(() => {
//     return <h1>Playlist</h1>;
// })}
