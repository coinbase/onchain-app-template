import OnchainProviders from '../components/OnchainProviders';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-1 flex-col">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
