import { Footer } from '@codegouvfr/react-dsfr/Footer'

export default function AppFooter() {
  return (
    <Footer
      accessibility='non compliant'
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      contentDescription='
    Ce message est à remplacer par les informations de votre site.

    Comme exemple de contenu, vous pouvez indiquer les informations 
    suivantes : Le site officiel d’information administrative pour les entreprises.
    Retrouvez toutes les informations et démarches administratives nécessaires à la création, 
    à la gestion et au développement de votre entreprise.
    '
      cookiesManagementLinkProps={{
        href: '#',
      }}
      homeLinkProps={{
        href: '/',
        title:
          'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)',
      }}
      personalDataLinkProps={{
        href: '#',
      }}
      termsLinkProps={{
        href: '#',
      }}
      websiteMapLinkProps={{
        href: '#',
      }}
    />
  )
}
