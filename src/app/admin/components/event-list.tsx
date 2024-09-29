import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { getDashboardEvents, getDashboardNews } from "~/lib/dashboard/dashboard";
import { SingleEvents } from "~/app/board/components/home/single-event";
import type { DashboardEvents } from "~/types/dashboardEvents";

interface EventListProps {
  pathFragment: string;
}

export function EventList({
  pathFragment,
}: Readonly<EventListProps>) {
  const router = useRouter();
  const { data = [], isLoading } = useQuery({
    queryKey: ["event-list"],
    queryFn: async () => {
      const [dashboardNews, dashboardEvents] = await Promise.all([
        getDashboardNews(),
        getDashboardEvents(),
      ]);
      return [...dashboardNews, ...dashboardEvents];
    }
  })
  const onClickEdit = (value: DashboardEvents) => {
    if (!value.id) {
      return;
    }
    router.push(`/admin/${pathFragment}/edit/${value.id}`);
  };

  const onClickAdd = () => {
    router.push(`/admin/${pathFragment}/add`);
  };
  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography sx={{ margin: "20px 0" }} variant="h4">
          Gestione Notizie/Eventi
        </Typography>
        <Button
          color="primary"
          onClick={onClickAdd}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Aggiungi
        </Button>
      </Box>
      {isLoading ? (
        <Skeleton animation="pulse" variant="rectangular" />
      ) : (
        data.map((value) => (
          <SingleEvents dashboradEvents={value} height="8cm" isEdit key={value.id} onClickEdit={onClickEdit} width="8cm"/>
        ))
      )}
    </>
  );
}
