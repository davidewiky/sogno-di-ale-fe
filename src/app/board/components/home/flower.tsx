import { Hexagon, HexGrid, Layout, Pattern } from "react-hexgrid";
import React from "react";
import { useRouter } from "next/navigation";
import bomboniere from "../../../../../public/Bomboniere.jpg";
import eventi from "../../../../../public/il_sogno_di_ale-22092024-motogiro.jpg";

export function Flower() {
  const router = useRouter();
  return (
    <HexGrid height={600} width={600}>
      <Layout
        flat
        origin={{ x: 0, y: -30 }}
        size={{ x: 15, y: 15 }}
        spacing={1}
      >
        <Hexagon
          fill="bomboniere"
          onClick={() => {
            router.replace("/board/works");
          }}
          q={0}
          r={0}
          s={0}
        />
        <Hexagon
          fill="eventi"
          onClick={() => {
            router.replace("/board/events");
          }}
          q={-1}
          r={1}
          s={-1}
        />
        <Hexagon q={-1} r={2} s={-1} />
        <Hexagon q={0} r={2} s={-1} />
      </Layout>
      <Pattern id="bomboniere" link={bomboniere.src} />
      <Pattern id="eventi" link={eventi.src} />
    </HexGrid>
  );
}
