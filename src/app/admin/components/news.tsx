"use client";

import {Box, Button, TextField, Typography} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveIcon from "@mui/icons-material/Save";
import {DateTimePicker} from "@mui/x-date-pickers";
import {useRouter} from "next/navigation";
import {useState} from "react";
import type {DashboardEvents} from "~/types/dashboard-events";
import {RichTextEditor} from "~/components/rich-text-editor/rich-text-editor";

const isFormValid = (
  isDate: boolean,
  item: DashboardEvents,
  oldItem?: DashboardEvents,
): boolean => {
  if (
    !item.title ||
    !item.content ||
    (isDate && (!item.validFrom || !item.validTo))
  ) {
    return false;
  }
  return !(
    oldItem &&
    item.title === oldItem.title &&
    item.content === oldItem.content &&
    (!isDate ||
      (item.validFrom === oldItem.validFrom &&
        item.validTo === oldItem.validTo))
  );
};

interface NewsProps {
  pageTitle: string;
  isDate: boolean;
  onSave: (
    title: string,
    content: string,
    validFrom: Date | null,
    validTo: Date | null,
  ) => Promise<void>;
  item?: DashboardEvents;
}

export function News({
  item,
  pageTitle,
  isDate,
  onSave,
} : Readonly<NewsProps>) {
  const router = useRouter();
  const [title, setTitle] = useState<string>(item?.title ?? "");
  const [content, setContent] = useState<string>(item?.content ?? "");
  const [validFrom, setValidFrom] = useState<Date | null>(
    item?.validFrom ?? null,
  );
  const [validTo, setValidTo] = useState<Date | null>(item?.validTo ?? null);

  const onDateChange =
    (setter: (value: Date | null) => void) => (value: Date | null) => {
      if (value) {
        setter(value);
      } else {
        setter(null);
      }
    };

  const onSaveClick = async () => {
    if (
      !isFormValid(
        Boolean(isDate),
        { title, content, validFrom, validTo } as DashboardEvents,
        item,
      )
    ) {
      return;
    }
    await onSave(title, content, validFrom, validTo);
    if (!item) {
      setTitle("");
      setContent("");
      setValidFrom(null);
      setValidTo(null);
    }
  };
  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography sx={{ margin: "20px 0" }} variant="h4">
          {pageTitle}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            id="title"
            label="Titolo"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            size="small"
            value={title}
          />
          {isDate ? (
            <Box sx={{ display: "flex", gap: "40px" }}>
              <DateTimePicker
                label="Da"
                onChange={onDateChange(setValidFrom)}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
                value={validFrom ?? null}
              />
              <DateTimePicker
                label="A"
                onChange={onDateChange(setValidTo)}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
                value={validTo ?? null}
              />
            </Box>
          ) : null}
          <RichTextEditor
            disabled={false}
            label="Contenuto"
            onChange={setContent}
            value={content}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginLeft: "20px",
          }}
        >
          <Button
            color="primary"
            disabled={
              !isFormValid(
                Boolean(isDate),
                { title, content, validFrom, validTo } as DashboardEvents,
                item,
              )
            }
            onClick={onSaveClick}
            startIcon={<SaveIcon />}
            sx={{ marginRight: 1 }}
            variant="outlined"
          >
            Salva
          </Button>
          <Button
            color="warning"
            onClick={() => {
              router.back();
            }}
            startIcon={<ReplyIcon />}
            sx={{ marginRight: 1 }}
            variant="outlined"
          >
            Indietro
          </Button>
        </Box>
      </Box>
    </>
  );
}
