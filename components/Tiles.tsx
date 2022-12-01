export const Tile = () => {
  return (
    <div className="w-tile h-tile max-w-tile max-h-tile bg-gray-500"></div>
  );
};

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const TileGrid = ({ children, title }: Props) => {
  return (
    <>
      <div className="sticky top-0 py-6 pl-16 bg-white">
        <h3 className="text-2xl uppercase">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-6 pl-16 mr-6">{children}</div>
    </>
  );
};
