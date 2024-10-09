"use client";

import {enqueueSnackbar} from "notistack";
import {useQueryClient} from "@tanstack/react-query";
import {DashboardEvents, DashboardItemType} from "~/types/dashboard-events";
import {News} from "~/app/admin/components/news";
import {saveDashboardEvents} from "~/lib/dashboard/dashboard";

interface AddNewsProps {
  pageTitle: string;
  type: DashboardItemType;
  isDate?: boolean;
}

export default function AddNewsPage({ pageTitle, isDate, type }: Readonly<AddNewsProps>) {
  const queryClient = useQueryClient();
  const onSave = async (
    title: string,
    content: string,
    validFrom: Date | null,
    validTo: Date | null,
  ) => {
    const newItem = {
      title,
      content,
      validFrom,
      validTo,
      type,
      orderView: 0,
    } as DashboardEvents;
    await saveDashboardEvents(newItem);
    await queryClient.invalidateQueries({ queryKey: [`${type}-list`] });
    enqueueSnackbar("Salvataggio avvenuto correttamente", {
      variant: "success",
    });
  };
  return <News pageTitle={pageTitle} onSave={onSave} isDate={Boolean(isDate)} />;
}
