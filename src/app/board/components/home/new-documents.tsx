import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { SectionBox } from "~/app/board/components/home/section-box";

const newsItems = [
  "Evento 1: Conferenza sulla tecnologia",
  "Evento 2: Incontro di networking",
  "Evento 3: Workshop sul React",
  "Evento 4: Webinar sulla sicurezza informatica",
  // TODO da recuperare a BE
];

export function HomeEvents() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- not always falsy
    if (marquee) {
      let scrollAmount = 0;
      const speed = 1;

      const scroll = () => {
        scrollAmount += speed;
        marquee.scrollLeft = scrollAmount;
        if (scrollAmount >= marquee.scrollWidth) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);

  return (
    <SectionBox>
      <Typography variant="h4">Ultimi eventi</Typography>
      <div
        ref={marqueeRef}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "16px"
        }}
      >
        {newsItems.map((news, index) => (
          <Typography
            key={index}
            variant="body1"
            style={{ marginRight: "32px" }}
          >
            {news}
          </Typography>
        ))}
      </div>
    </SectionBox>
  );
}
