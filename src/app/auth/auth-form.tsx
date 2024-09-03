"use client";

import {
  Alert,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import type { ChangeEvent } from "react";
import { useContext, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import { UserInfoContext } from "~/components/utils/provider-context";

interface AuthFormProps {
  handleSubmit: (formValue: {
    username: string;
    password: string;
    register: boolean;
  }) => Promise<AuthResponse>;
}

export interface AuthResponse {
  token?: string | null;
  aes?: string | null;
  message?: string | null;
  redirectUrl?: string | null;
}

export function AuthForm({ handleSubmit }: AuthFormProps) {
  const userInfo = useContext(UserInfoContext);
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter(); // Initialize the router

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = () => {
    if (!(username && password)) return;
    void (async () => {
      const data: AuthResponse = await handleSubmit({
        username,
        password,
        register,
      });
      if (data.message !== "success") {
        setErrorMessage(data.message ?? "error");
      } else {
        setErrorMessage(null);
        const user = {
          userName: username,
        };
        userInfo?.saveUser(user);
        if (data.redirectUrl) {
          router.replace(data.redirectUrl);
        }
      }
    })();
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <Input
        data-testid="email-input"
        onChange={handleChangeUsername}
        placeholder="Email"
        required
        type="email"
        value={username ?? ""}
      />

      <Input
        data-testid="password-input"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={handleClickShowPassword}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        onChange={handleChangePassword}
        placeholder="Password"
        required
        type={showPassword ? "text" : "password"}
        value={password ?? ""}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          color="primary"
          data-testid="submit-auth-button"
          disabled={!(Boolean(username) && Boolean(password))}
          onClick={() => {
            setRegister(true);
            submitForm();
          }}
          variant="contained"
        >
          Registrati
        </Button>
        <Button
          color="primary"
          data-testid="submit-auth-button"
          disabled={!(Boolean(username) && Boolean(password))}
          onClick={() => {
            setRegister(false);
            submitForm();
          }}
          variant="contained"
        >
          Entra
        </Button>
      </Box>
      {errorMessage ? (
        <Alert data-testid="error-message" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
    </>
  );
}
