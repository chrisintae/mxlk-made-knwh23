import { DynamicCol, FixedCol } from "@comps/Layouts";
import { Tile, TileGrid } from "@comps/Tiles";

const pageData = {
  subcopy:
    "Our journey into the cannabis industry and a bunch of complete random sh!t. Shop coming soon.",
};

export default function Home() {
  const { subcopy } = pageData;

  return (
    <>
      <FixedCol subcopy={subcopy} />
      <DynamicCol>
        <TileGrid title="All the sh!t">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </TileGrid>
      </DynamicCol>
    </>
  );
}
