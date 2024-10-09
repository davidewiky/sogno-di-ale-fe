import "./editor.css";

import { $generateHtmlFromNodes } from "@lexical/html";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import type { EditorState, LexicalEditor } from "lexical";
import { $getRoot } from "lexical";
import sanitizeHtml from "sanitize-html";
import { Box, InputLabel } from "@mui/material";
import { InitialHtmlPlugin } from "./initial-html-plugin";
import { Placeholder } from "./placeholder";
import { useIsFocused } from "./use-is-focused";
import { defaultEditorConfig } from "./default-editor-config";
import { ToolbarPlugin } from "./toolbar/toolbar-plugin";
import { ClearEditorWrapper } from "./clear-editor-wrapper";

export interface RichTextProps {
  label: string;
  onChange: (value: string) => void;
  value: string | null;
  disabled?: boolean;
  placeholder?: string;
  textAreaHeightPx?: number;
}
export function RichTextEditor({
  label,
  onChange,
  value,
  disabled = false,
  placeholder,
  textAreaHeightPx = 300,
}: Readonly<RichTextProps>) {
  const { onFocus, containerFocus } = useIsFocused();

  const htmlValue = value ?? "<div></div>";

  const onChangeValue = (
    editorState: EditorState,
    lexicalEditor: LexicalEditor,
  ) => {
    editorState.read(() => {
      const root = $getRoot();
      if (!root.getTextContent()) {
        onChange("");
      } else {
        const html = $generateHtmlFromNodes(lexicalEditor, null);
        onChange(html);
      }
    });
  };

  if (disabled) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(htmlValue),
        }}
      />
    );
  }

  return (
    <div onFocus={onFocus} ref={containerFocus}>
      <Box sx={{ marginTop: "16px" }}>
        <InputLabel sx={{ fontSize: "16px" }}>{label}</InputLabel>
        <LexicalComposer initialConfig={defaultEditorConfig}>
          <ToolbarPlugin />
          <Box
            sx={{
              background: "#fff",
              position: "relative",
              border: 1,
              borderRadius: 1,
            }}
          >
            <InitialHtmlPlugin html={htmlValue} />
            <OnChangePlugin onChange={onChangeValue} />
            <ListPlugin />
            <TabIndentationPlugin />

            <RichTextPlugin
              ErrorBoundary={LexicalErrorBoundary}
              contentEditable={
                <ContentEditable
                  style={{
                    height: `${textAreaHeightPx.toString()}px`,
                    overflowY: "auto",
                  }}
                />
              }
              placeholder={<Placeholder value={placeholder ?? ""} />}
            />
            <ClearEditorWrapper value={value} />
          </Box>
        </LexicalComposer>
      </Box>
    </div>
  );
}
