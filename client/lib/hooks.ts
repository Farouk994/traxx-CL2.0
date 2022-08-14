// custom hooks
import useSWR from "swr";
// swr is a lib to do data fetching, stores locally like redux
// use API for the cache key, swr will pass that argument to have access to it('/route',fetcher)

import fetcher from "./fetcher";

// hook to get user
export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  console.log(data);
  return {
    user: data, // obj has user
    isLoading: !data && !error, //if no data or error stay loading
    isError: error, // if there is error
  };
};
// when user gets updated, we will update this cache at /me without making api call

// get all playlists
export const usePlaylist = () => {
  //prisma generates some of the types, for now we will set data as any
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
