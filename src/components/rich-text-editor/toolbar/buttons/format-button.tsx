import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IconButton } from "@mui/material";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

interface FormatButtonProps {
  type: "italic" | "bold" | "underline";
  icon: ReactNode;
}

export function FormatButton({ type, icon }: Readonly<FormatButtonProps>) {
  const [editor] = useLexicalComposerContext();

  const [isActive, setIsActive] = useState(false);

  const updateToolbarStatus = useCallback(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        setIsActive(selection.hasFormat(type));
      }
    });
  }, [editor, type]);

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      updateToolbarStatus();
    });
  }, [editor, updateToolbarStatus]);

  const onClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  return (
    <IconButton
      color={isActive ? "primary" : undefined}
      data-testid={`format-button-${type}`}
      onClick={onClick}
      size="small"
    >
      {icon}
    </IconButton>
  );
}
