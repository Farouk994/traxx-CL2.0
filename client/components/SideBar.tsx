import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  List,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="light gray"
    >
      This is the sidebar
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          {/* <NextImage src="/logo.svg" height={60} width={120} /> */}
          <h1
            style={{
              color: "white",
              fontFamily: "Comfortaa, sans-serif",
              fontSize: "30px",
            }}
          >
            traxx
          </h1>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
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
