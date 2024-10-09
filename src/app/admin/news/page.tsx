"use client";

import { NewsList } from "~/app/admin/components/news-list";

export default function HomeNews() {
  return <NewsList pathFragment={"news"} />;
}
