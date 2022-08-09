import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSWRConfig } from "swr"; // it handles data fetching/caching/refetching/re-evaluate/update local cache
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { loading, setIsLoading } = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" height="100px" color="white">
        Hello There
      </Flex>
      <Flex
        justify="center"
        align="center"
        height="calc(100vh - 100vw"
        color="white"
      >
        Form
      </Flex>
    </Box>
  );
};

export default AuthForm;
