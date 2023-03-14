import { fr } from '@codegouvfr/react-dsfr'
import { Card } from '@codegouvfr/react-dsfr/Card'
import { client } from 'tina'

export default async function Posts() {
  const postsResponse = await client.queries.postConnection()
  if (postsResponse.data.postConnection.edges) {
    console.log(postsResponse.data.postConnection.edges[0]?.node)
  }
  return (
    <div className={fr.cx('fr-container')}>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-py-6w')}>
        <h1>Actualités</h1>
      </div>

      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {postsResponse.data.postConnection.edges?.map((edge) => (
          <div
            key={edge?.node?.title}
            className={fr.cx('fr-col-md-4', 'fr-col')}
          >
            <Card
              linkProps={{
                href: `/actualites/${edge?.node?._sys.filename.replace(
                  '.md',
                  ''
                )}`,
              }}
              title={edge?.node?.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
