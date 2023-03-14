import { Header } from '@codegouvfr/react-dsfr/Header'

export default function AppHeader() {
  return (
    <Header
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      homeLinkProps={{
        href: '/',
        title: 'Accueil - Accélérateur de la Transition Écologique',
      }}
      navigation={[
        {
          linkProps: {
            href: '/actualites',
            target: '_self',
          },
          text: 'Actualités',
        },
      ]}
    />
  )
}
