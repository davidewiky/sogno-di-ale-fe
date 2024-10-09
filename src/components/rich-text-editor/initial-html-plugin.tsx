import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { useEffect } from "react";

interface InitialHtmlPluginProps {
  html: string;
}

export function InitialHtmlPlugin({ html }: Readonly<InitialHtmlPluginProps>) {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () => {
      editor.update(() => {
        const dom = new DOMParser().parseFromString(html, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);

        const rootNode = $getRoot();

        if (nodes.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- if nodes.length > 0 is not undefined
          rootNode.getFirstChild()?.replace(nodes.shift()!);

          for (const node of nodes) {
            rootNode.append(node);
          }
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- to do
    [],
  );

  return null;
}
