import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio de Desenvolvimento Front-end por Filipe Salles',
  description: 'Criei um portfólio pessoal que apresenta uma seleção dos projetos desenvolvidos por mim, Filipe Salles, como um Desenvolvedor Front-end. O portfólio destaca minha experiência e habilidades no campo, demonstrando os projetos que entreguei com sucesso ao longo da minha carreira.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body>{children}</body>
  </html>
  )
}
