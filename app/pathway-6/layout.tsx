import "./globals.css";

export default function PathwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col pathway-6-container">
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
