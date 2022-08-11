import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  ButtonGroup,
  IconButton,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Text,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
} from '@chakra-ui/react';
import ReactHowler from 'react-howler'; //audio interface library *no UI*
import {
  MdShuffle,
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
  MdSkipNext,
} from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';

const Player = () => {
  return (
    <Box color='white'>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center>
        <ButtonGroup color='gray.600'>
          <IconButton
            outline='none'
            variant='link'
            aria-label='shuffle'
            fontSize='24px'
            icon={<MdShuffle />}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='skip'
            fontSize='24px'
            icon={<MdSkipPrevious />}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='play'
            fontSize='40px'
            color='white'
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='pause'
            fontSize='40px'
            color='white'
            icon={<MdOutlinePauseCircleFilled />}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='shuffle'
            fontSize='24px'
            icon={<MdSkipNext />}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='shuffle'
            fontSize='24px'
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color='gray.600'>
        <Flex justify='center' align='center'>
          <Box width='10%'>
            <Text fontSize='xs'>3:08</Text>
          </Box>
          <Box width='80%'>
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              max={300}
              id='player-range'
            >
              <RangeSliderTrack bg='gray.800'>
                <RangeSliderFilledTrack bg='gray.600' />
              </RangeSliderTrack>
              <RangeSliderThumb index={0}/>
            </RangeSlider>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
