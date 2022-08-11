import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';

// const Ui = styled.div`
//   box-shadow: 29px 29px 57px #9e3d3d, -29px -29px 57px #e85959;
// `;

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  description,
  title,
  roundImage,
}) => {
  return (
    <Box
      height='100%'
      overflow='auto'
      bgGradient={`linear( ${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
      color='white'
    >
      <Flex bg={`${color}.600`} padding='40px' align='end'>
        <Box padding='20px'>
          <Image
            boxSize='180px'
            boxShadow={`15px 15px 30px ${color}.500,
                -15px -15px 30px ${color}.700`}
            src='/profile.jpg'
            borderRadius={roundImage ? '100%' : '3px'}
          />
        </Box>
        <Box padding='20px' lineHeight='40px'>
          <Text fontSize='x-small' fontWeight='bold' casing='uppercase'>
            {subtitle}
          </Text>
          <Text fontSize='6xl'>{title}</Text>
          <Text fontSize='x-small'>{description}</Text>
        </Box>
      </Flex>
      <Box paddingY='50px'>{children}</Box>
    </Box>
  );
};

export default GradientLayout;
