import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IconButton } from "@mui/material";
import type { LexicalCommand } from "lexical";
import type { ReactNode } from "react";
import { useIsActiveListButton } from "./use-is-active-list-button";
import { useRegisterListCommands } from "./use-register-list-commands";

interface ListButtonProps {
  type: "ul" | "ol";
  icon: ReactNode;
  insertCommand: LexicalCommand<void>;
  removeCommand: LexicalCommand<void>;
}

export function ListButton({
  type,
  icon,
  insertCommand,
  removeCommand,
}: Readonly<ListButtonProps>) {
  useRegisterListCommands();
  const [editor] = useLexicalComposerContext();

  const isActive = useIsActiveListButton(type);

  const onClick = () => {
    if (isActive) {
      editor.dispatchCommand(removeCommand, undefined);
    } else {
      editor.dispatchCommand(insertCommand, undefined);
    }
  };

  return (
    <IconButton
      color={isActive ? "primary" : undefined}
      onClick={onClick}
      size="small"
    >
      {icon}
    </IconButton>
  );
}
