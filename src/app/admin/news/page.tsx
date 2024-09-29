"use client";

import { EventList } from "~/app/admin/components/event-list";

export default function HomeNews() {
  return <EventList pathFragment={"news"} />;
}
