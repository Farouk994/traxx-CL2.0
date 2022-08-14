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
  //make ref obj / then attach ref to react howler as prop
  const soundRef = useRef(null);
  const [isSeeking, setIsSeeking] = useState(false);

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

  const previousSong = () => {
    setIndex((state) => {
      // if this greater than 0, subtract one, if zero go
      // back to end of playlist
      return state ? state - 1 : songs.length;
    });
  };

  const nextSong = () => {
    setIndex((state: any) => {
      // check if you're in shuffling state or not
      if (shuffle) {
        // logic
        const next = Math.floor(Math.random() * songs.length);
        if (next === state) {
          return nextSong();
        }
        return next;
      } else {
        return state === songs.length - 1 ? 0 : state + 1;
      }
    });
  };

  const onEnd = () => {
    if (repeat) {
      // react howler instance
      // track UI
      setSeek(0);
      // Move song back to zero
      soundRef.current.seek(0);
    } else {
      nextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  // drag seek bar
  const onSeek = (e) => {
    setSeek(parseFloat(e[0])); // update visual ui seeking

    // update song to seek to it as well
    soundRef.current.seek(e[0]);
  };

  return (
    <Box color='white'>
      <Box>
        <ReactHowler
          playing={playing}
          src={activeSong?.url}
          ref={soundRef}
          onLoad={onLoad}
          onEnd={onEnd}
        />
      </Box>
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
            onClick={previousSong}
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
            aria-label='next'
            fontSize='24px'
            icon={<MdSkipNext />}
            onClick={nextSong}
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
              id='player-range'
              // fix decimal places, if not then zero
              max={duration ? duration.toFixed(2) : 0}
              // handles when someone clicks the seek bar and it tracks
              onChange={onSeek}
              // when someone drags it / rangeSlider expects multiple values
              value={[seek]}
              // When someone is seeking left and right on the slider
              onChangeStart={() => setIsSeeking(true)}
              onChangeEnd={() => setIsSeeking(false)}
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
