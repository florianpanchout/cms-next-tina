import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead'
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider'
import { getColorSchemeHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes'

import Header from './Header'
import Footer from './Footer'

import { StartDsfr } from './StartDsfr'
import { defaultColorScheme } from './defaultColorScheme'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html {...getColorSchemeHtmlAttributes({ defaultColorScheme })}>
      <head>
        <StartDsfr />
        <DsfrHead defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <DsfrProvider defaultColorScheme={defaultColorScheme}>
          <Header />
          {children}
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  )
}
