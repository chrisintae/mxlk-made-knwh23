type Props = {
  children: React.ReactNode;
};

export default function AccountLayout({ children }: Props) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      {children}
    </div>
  );
}
