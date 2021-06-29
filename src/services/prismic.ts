import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    "https://lunettes.cdn.prismic.io/api/v2",
    {
      req: req,
    }
  ) 

  return prismic
}