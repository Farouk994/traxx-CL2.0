import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

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
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding='40px' align='end'>
        My Profile
      </Flex>
    </Box>
  );
};

export default GradientLayout;
