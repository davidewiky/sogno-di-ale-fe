"use client";

import { Button } from "@mui/material";

interface SignOutProps {
  signOut: () => Promise<void>;
}

export function SignOutButton({ signOut }: SignOutProps) {
  const handleSignOut = () => {
    void (async () => {
      await signOut();
    })();
  };

  return (
    <Button
      color="primary"
      data-testid="signout-button"
      onClick={handleSignOut}
      variant="contained"
    >
      Esci
    </Button>
  );
}
