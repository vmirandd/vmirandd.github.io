import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://vmirandd.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Victor Miranda | Data Owner & Data Engineer',
    template: '%s | Victor Miranda',
  },

  description:
    'Victor Miranda — Data Owner & Data Engineer especializado en Google Cloud, BigQuery, Data Engineering, Data Governance, BI, AI, automatización y plataformas de datos.',

  keywords: [
    'Victor Miranda',
    'Data Owner',
    'Data Engineer',
    'Data Engineering',
    'Google Cloud',
    'GCP',
    'BigQuery',
    'Data Governance',
    'Data Quality',
    'Data Analytics',
    'Business Intelligence',
    'BI',
    'Qlik Sense',
    'Looker Studio',
    'Apache Airflow',
    'Cloud Composer',
    'Python',
    'SQL',
    'Oracle',
    'PL/SQL',
    'Snowflake',
    'Databricks',
    'Azure Data Factory',
    'Artificial Intelligence',
    'AI Data',
    'DataOps',
    'FinOps',
  ],

  authors: [
    {
      name: 'Victor Miranda',
      url: siteUrl,
    },
  ],

  creator: 'Victor Miranda',
  publisher: 'Victor Miranda',

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Victor Miranda',
    title: 'Victor Miranda | Data Owner & Data Engineer',
    description:
      'Data Owner & Data Engineer especializado en Cloud, Data Engineering, BI, Data Governance, AI y automatización.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Victor Miranda | Data Owner & Data Engineer',
    description:
      'Data Owner & Data Engineer especializado en Cloud, Data Engineering, BI, Data Governance, AI y automatización.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        style={
          {
            '--font-manrope': '"Manrope", "Segoe UI", sans-serif',
            '--font-space-grotesk': '"Space Grotesk", "Segoe UI", sans-serif',
            '--font-ibm-plex-mono':
              '"IBM Plex Mono", Consolas, monospace',
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
