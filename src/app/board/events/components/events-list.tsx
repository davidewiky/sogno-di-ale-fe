import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "~/lib/home/home";
import { CardEvent } from "~/app/board/events/components/card-event";

export function EventsViewList() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events-view-list"],
    queryFn: () => {
      return getAllEvents();
    },
  });

  if (isLoading || isError || data.length === 0) {
    return null;
  }

  return (
    <>
      {data.map((event) => (
        <CardEvent event={event} key={event.id} />
      ))}
    </>
  );
}
