import { DynamicCol, FixedCol } from "@comps/Layouts";

type Props = {
  params: {
    type: string;
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { type, slug } = params;

  return (
    <>
      <FixedCol title={slug} subtitle={type} />
      <DynamicCol>
        <div className="absolute inset-0 flex gap-6">
          <div className="min-w-[720px] h-screen bg-gray-500"></div>
          <div className="min-w-[720px] h-screen bg-gray-500"></div>
        </div>
      </DynamicCol>
    </>
  );
}
