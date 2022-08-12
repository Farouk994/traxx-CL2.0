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

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0); // tracks progress bar/starts at 0
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  // toggle play/pause button
  const setPlayState = (value) => {
    setPlaying(value); // set play to whatever value that comes through
  };

  const onShuffle = () => {
    setShuffle((state) => !state); // guarantees that you have true state at time you called it
  };

  const onRepeat = () => {
    setRepeat((state) => !state);
  };

  return (
    <Box color='white'>
      <Box>{/* <ReactHowler playing={playing} src={activeSong?.url} /> */}</Box>
      <Center>
        <ButtonGroup color='gray.600'>
          <IconButton
            outline='none'
            variant='link'
            aria-label='shuffle'
            fontSize='24px'
            icon={<MdShuffle />}
            color={shuffle ? 'lime' : 'gray.600'}
            onClick={onShuffle}
          />
          <IconButton
            outline='none'
            variant='link'
            aria-label='skip'
            fontSize='24px'
            icon={<MdSkipPrevious />}
          />
          {playing ? (
            <IconButton
              outline='none'
              variant='link'
              aria-label='play'
              fontSize='40px'
              color='white'
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              outline='none'
              variant='link'
              aria-label='pause'
              fontSize='40px'
              color='white'
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setPlayState(true)}
            />
          )}
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
            aria-label='repeat'
            fontSize='24px'
            color={repeat ? 'white' : 'gray.600'}
            onClick={onRepeat} //toggle whether or not repeating
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color='gray.600'>
        <Flex justify='center' align='center'>
          <Box width='10%'>
            <Text fontSize='xs'>1:08</Text>
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
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width='10%' textAlign='right'>
            <Text fontSize='xs'>3:45</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
