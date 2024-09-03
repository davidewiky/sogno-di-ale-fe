import Card from "@mui/material/Card";

interface SectionBoxProps {
  children: React.ReactNode;
}

export function SectionBox({ children }: SectionBoxProps) {
  return (
    <Card
      elevation={0}
      sx={{
        marginBottom: 2,
        bgcolor: "primary.light",
        padding: 2,
      }}
    >
      {children}
    </Card>
  );
}
