import { DynamicCol, FixedCol } from "@comps/Layouts";

type Props = {
  params: {
    topic: string;
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { topic, slug } = params;

  return (
    <>
      <FixedCol title={slug} subtitle={topic} />
      <DynamicCol>
        <div className="flex gap-6">
          <div className="w-tile h-screen bg-gray-500"></div>
        </div>
      </DynamicCol>
    </>
  );
}
