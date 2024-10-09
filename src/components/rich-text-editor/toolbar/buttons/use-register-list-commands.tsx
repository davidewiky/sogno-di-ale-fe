import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  insertList,
  REMOVE_LIST_COMMAND,
  removeList,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { useEffect } from "react";

export function useRegisterListCommands() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.registerCommand(
      REMOVE_LIST_COMMAND,
      () => {
        removeList(editor);
        return true;
      },
      COMMAND_PRIORITY_LOW,
    );
    editor.registerCommand(
      INSERT_UNORDERED_LIST_COMMAND,
      () => {
        insertList(editor, "bullet");
        return true;
      },
      COMMAND_PRIORITY_LOW,
    );
    editor.registerCommand(
      INSERT_ORDERED_LIST_COMMAND,
      () => {
        insertList(editor, "number");
        return true;
      },
      COMMAND_PRIORITY_LOW,
    );
  }, [editor]);
}
