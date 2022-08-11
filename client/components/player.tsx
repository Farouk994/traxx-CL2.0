import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  ButtonGroup,
  IconButton,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Text,
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
            color="white"
            icon={<MdOutlinePlayCircleFilled/>}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='pause'
            fontSize='40px'
            color="white"
            icon={<MdOutlinePauseCircleFilled/>}
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
    </Box>
  );
};

export default Player;
