import { Stack, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export function Signin() {
  return (
    <div>
        <Container maxWidth="sm">
      <h1>Signin</h1>
      <Stack spacing={4}>
          <TextField variant="outlined" label="Usuário" />
          <TextField variant="outlined" label="Senha" />
          <Button variant="contained">Login</Button>
      </Stack>
      </Container>
    </div>
  );
}
