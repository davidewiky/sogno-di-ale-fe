import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import {
  getDashboardEvents,
  getDashboardNews,
} from "~/lib/dashboard/dashboard";
import { SingleEvents } from "~/app/board/components/home/single-event";
import type { DashboardEvents} from "~/types/dashboard-events";
import { DashboardItemType } from "~/types/dashboard-events";

interface EventListProps {
  pathFragment: string;
  pageTitle: string;
  type: DashboardItemType;
}

export function NewsList({
  pathFragment,
  pageTitle,
  type,
}: Readonly<EventListProps>) {
  const router = useRouter();
  const { data = [], isLoading } = useQuery({
    queryKey: [`${type}-list`],
    queryFn: async () => {
      if (type === DashboardItemType.Events) {
        return getDashboardEvents();
      }
      if (type === DashboardItemType.News) {
        return getDashboardNews();
      }
    },
  });
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
          {pageTitle}
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
          <SingleEvents
            dashboradEvents={value}
            height="8cm"
            key={value.id}
            onClickEdit={onClickEdit}
            width="8cm"
          />
        ))
      )}
    </>
  );
}
