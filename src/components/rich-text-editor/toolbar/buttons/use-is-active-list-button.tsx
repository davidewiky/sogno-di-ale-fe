import { $isListNode, ListNode } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNearestNodeOfType } from "@lexical/utils";
import type { RangeSelection } from "lexical";
import { $getSelection, $isRangeSelection } from "lexical";
import { useCallback, useEffect, useState } from "react";

export function useIsActiveListButton(type: "ul" | "ol") {
  const [editor] = useLexicalComposerContext();

  const [isActive, setIsActive] = useState(false);

  const getCurrentListType = useCallback(
    (selection: RangeSelection) => {
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const element =
          anchorNode.getKey() === "root"
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();
        const elementKey = element.getKey();
        const elementDOM = editor.getElementByKey(elementKey);
        if (elementDOM !== null && $isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          return parentList ? parentList.getTag() : element.getTag();
        }
      }
      return null;
    },
    [editor],
  );

  const isCurrentListType = useCallback(
    (selection: RangeSelection): boolean => {
      const currentListType = getCurrentListType(selection);

      if (currentListType) {
        return currentListType === type;
      }

      return false;
    },
    [getCurrentListType, type],
  );

  const updateToolbarStatus = useCallback(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        setIsActive(isCurrentListType(selection));
      }
    });
  }, [editor, isCurrentListType]);

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      updateToolbarStatus();
    });
  }, [editor, updateToolbarStatus]);
  return isActive;
}
