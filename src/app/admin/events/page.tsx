"use client";

import { NewsList } from "~/app/admin/components/news-list";

export default function EventsConfig() {
  return <NewsList pageTitle="Gestione Eventi" pathFragment="events" />;
}
