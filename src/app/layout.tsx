import StyledComponentsRegistry from '@/lib/styled-components-registry';
import Providers from './providers';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
