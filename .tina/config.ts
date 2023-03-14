import { defineConfig } from 'tinacms'

const branch = process.env.HEAD || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null, // Get this from tina.io
  token: process.env.TINA_TOKEN || null, // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: '/content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'introduction',
            label: 'Introduction',
            required: false,
          },
          {
            type: 'object',
            list: true,
            name: 'cards',
            label: 'Cartes',
            fields: [
              {
                type: 'image',
                label: 'Image',
                name: 'image',
              },
              {
                type: 'string',
                label: 'Title',
                name: 'title',
              },
              {
                type: 'string',
                label: 'Text',
                name: 'text',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Texte',
            isBody: true,
          },
        ],
      },
    ],
  },
})
