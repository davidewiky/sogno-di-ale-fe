import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { FormatButton } from "./buttons/format-button";
import { ListButton } from "./buttons/list-button";

export function ToolbarPlugin() {
  return (
    <div>
      <FormatButton icon={<FormatBoldIcon />} type="bold" />
      <FormatButton icon={<FormatItalicIcon />} type="italic" />
      <FormatButton icon={<FormatUnderlinedIcon />} type="underline" />

      <ListButton
        icon={<FormatListNumberedIcon />}
        insertCommand={INSERT_ORDERED_LIST_COMMAND}
        removeCommand={REMOVE_LIST_COMMAND}
        type="ol"
      />

      <ListButton
        icon={<FormatListBulletedIcon />}
        insertCommand={INSERT_UNORDERED_LIST_COMMAND}
        removeCommand={REMOVE_LIST_COMMAND}
        type="ul"
      />
    </div>
  );
}
