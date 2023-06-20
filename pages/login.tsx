import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { privateRequest } from "config/axios.config";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { axiosErrorHandler } from "utils/errorHandler";

const LoginPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const { mutateAsync, isLoading } = useMutation<
    { message: string; token: string },
    Error,
    { password: string }
  >(
    async (payload) => {
      try {
        const res = await privateRequest.post("/auth/login", payload);
        return res.data;
      } catch (error) {
        axiosErrorHandler(error);
      }
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        router.push("/");
      },
    }
  );

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      mutateAsync({
        password: password,
      }),
      {
        loading: "Logging in...",
        success: (r) => r.message ?? "Logged in successfully",
        error: (r) => r.message ?? "Wrong password",
      }
    );
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="400px" p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading mb={6}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            colorScheme="blue"
            isLoading={isLoading}
            type="submit"
            width="100%"
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
