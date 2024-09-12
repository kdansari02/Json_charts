import "./globals.css";

export const metadata = {
  title: "Data Visualization",
  description: "A data visualization app built with React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
