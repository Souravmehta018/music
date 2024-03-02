export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <h2> Chai Items </h2>
          {children}</>
    );
  }