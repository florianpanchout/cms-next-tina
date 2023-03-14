import { fr } from '@codegouvfr/react-dsfr'
import { Card } from '@codegouvfr/react-dsfr/Card'
import { client } from 'tina'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default async function Home() {
  const page = await client.queries.page({ relativePath: 'home.mdx' })

  return (
    <div className={fr.cx('fr-container')}>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-py-6w')}>
        <h1>{page.data.page.title}</h1>
        <TinaMarkdown content={page.data.page.introduction} />
      </div>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {page.data.page.cards?.map((card) => (
          <div key={card?.title} className={fr.cx('fr-col-md-4', 'fr-col')}>
            <Card
              desc={card?.text}
              imageAlt={card?.title || ''}
              imageUrl={card?.image || ''}
              linkProps={{
                href: '#',
              }}
              title={card?.title}
            />
          </div>
        ))}
      </div>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-py-6w')}>
        <TinaMarkdown content={page.data.page.body} />
      </div>
    </div>
  )
}
