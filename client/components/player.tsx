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
import { MdShuffle,MdSkipPrevious,MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled, MdOutlineRepeat  } from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';

const Player = () => {
  return( <Box color="white">Play Music</Box>);
};

export default Player;
