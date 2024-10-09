import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CLEAR_EDITOR_COMMAND } from "lexical";
import { useEffect } from "react";

export function ClearEditorWrapper({
  value,
}: Readonly<{ value: string | null }>) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!value) {
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
    }
  }, [editor, value]);

  return <ClearEditorPlugin />;
}
