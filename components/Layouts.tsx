type FProps = {
  title?: string;
  subtitle?: string;
  subcopy?: string;
  sublist?: string[];
};

export const FixedCol = ({ title, subtitle, subcopy, sublist }: FProps) => {
  return (
    <div className="sticky top-0 w-2/5 min-w-600 h-screen flex flex-col items-end justify-center ml-6 mr-16">
      <div className="max-w-384 text-right">
        <h3>{subtitle}</h3>
        <h1 className="text-3xl font-bold uppercase">
          {title ? (
            <span>{title}</span>
          ) : (
            <span>
              Cereal
              <br />
              M_LK
            </span>
          )}
        </h1>

        <p className="mt-4 mb-2">{subcopy}</p>

        <ul className="mt-2 mb-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export const DynamicCol = ({ children }: Props) => {
  return <div className={`relative w-full overflow-hidden`}>{children}</div>;
};

export const Wrapper = ({ children }: Props) => {
  return (
    <main className="mx-auto max-w-1800">
      <div className="relative flex">{children}</div>
    </main>
  );
};
