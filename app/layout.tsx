import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Victor Miranda | Data Owner & Data Engineer',
  description: 'Victor Miranda — Data Owner & Data Engineer especializado en Google Cloud, BigQuery, Data Engineering, Data Governance, BI, AI y automatización.',
  metadataBase: new URL('https://vmirandd.github.io'),
  openGraph: {
    title: 'Victor Miranda | Data Owner & Data Engineer',
    description: 'Transformo problemas de datos en soluciones tecnológicas confiables y orientadas al negocio.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body style={{ '--font-manrope': '"Manrope", "Segoe UI", sans-serif', '--font-space-grotesk': '"Space Grotesk", "Segoe UI", sans-serif', '--font-ibm-plex-mono': '"IBM Plex Mono", Consolas, monospace' } as React.CSSProperties}>{children}</body></html>;
}
