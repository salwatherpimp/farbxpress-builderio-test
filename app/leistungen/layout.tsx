import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen - Farbxpress",
  description:
    "Entdecken Sie unsere umfassenden Malerdienstleistungen: Malerarbeiten, Fassadenrenovation, Gipserarbeiten und mehr.",
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
