import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";

import logo from "../../assets/logo.svg";

interface FormProps {
    onSubmitForm: (user: string, password: string) => {}; 
    onSubmitButtonText: string; 
    onRouteText: string; 
    onRouteLink: string;
}

export function AuthForm({ onSubmitForm, onSubmitButtonText, onRouteText, onRouteLink }: FormProps) {
  const [user, setUser] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitForm(user.value, password.value)

  }

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <img className="logo" src={logo} alt="logo" />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="strech"
              spacing={6}
            >
              <TextField
                variant="outlined"
                label="Usuário"
                name="user"
                value={user.value}
                onChange={(e) => setUser({ value: e.target.value, error: "" })}
              />
              <TextField
                variant="outlined"
                type="password"
                label="Senha"
                name="password"
                value={password.value}
                onChange={(e) =>
                  setPassword({ value: e.target.value, error: "" })
                }
              />
              <Button variant="contained" type="submit">
                {onSubmitButtonText}
              </Button>
            </Stack>
            <Link to={onRouteLink}>{onRouteText}</Link>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
