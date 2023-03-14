import { fr } from '@codegouvfr/react-dsfr'
import { client } from 'tina'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

type AppProps = {
  params: {
    slug: string
  }
}
export default async function Post({ params }: AppProps) {
  const post = await client.queries.post({ relativePath: `${params.slug}.md` })

  return (
    <div className={fr.cx('fr-container')}>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-py-6w')}>
        <TinaMarkdown content={post.data.post.body} />
      </div>
    </div>
  )
}
