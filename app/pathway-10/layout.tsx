import "./globals.css";
import PathwayHeader from "@/app/components/PathwayHeader";

export default function PathwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col pathway-10-container">
      <PathwayHeader currentId={10} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
