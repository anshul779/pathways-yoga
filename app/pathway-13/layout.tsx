import "./globals.css";
import PathwayHeader from "@/app/components/PathwayHeader";

export default function PathwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col pathway-13-container">
      <PathwayHeader currentId={13} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
