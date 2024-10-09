import { ListItemNode, ListNode } from "@lexical/list";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

export const defaultEditorConfig: InitialConfigType = {
  namespace: "my-editor",
  theme: {
    ltr: "ltr",
    rtl: "rtl",
    placeholder: "editor-placeholder",
    paragraph: "editor-paragraph",
    text: {
      italic: "editor-italic",
      underline: "editor-underline",
    },
    list: {
      nested: {
        listitem: "editor-nestedList",
      },
    },
  },
  nodes: [ListNode, ListItemNode],
  onError(error) {
    throw error;
  },
};
