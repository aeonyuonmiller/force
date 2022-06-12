import * as prismic from '@prismicio/client'

export const repositoryName = 'force-recs'

export const client = prismic.createClient(repositoryName, {
  accessToken: 'process.env.PRISMIC_ACCESS_TOKEN',
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],
})