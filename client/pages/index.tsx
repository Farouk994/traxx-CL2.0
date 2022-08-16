import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
// import React from 'react';
import GradientLayout from '../components/gradientLayout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

export default function Home({ artists }) {
  const { user } = useMe();
  return (
    <GradientLayout
      color='red'
      roundImage
      subtitle='Profile'
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
    >
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Top Artist this month
          </Text>
          <Text fontSize='md'>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX='10px' width='20%'>
              <Box bg='gray.900' borderRadius='4px' padding='15px' width='100%'>
                <Image
                  src='https://placekitten.com/300/300'
                  borderRadius='100%'
                />
                <Box marginTop='20px'>
                  <Text fontSize='large'>{artist.name}</Text>
                  <Text fontSize='x-small'>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}
// function
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};
