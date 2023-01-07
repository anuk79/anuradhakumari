import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getBlogs(category = 'GUIDE') {
    const { blogPosts } = await graphcms.request(
        `
        query {
            blogPosts(orderBy: published_DESC, , where: {category_in: ${category}}) {
                id
                title
                slug
                excerpt
                category
                published
                topics
            }
        }
        `
    );

    return {
        ...blogPosts
    };
}

export async function getRecentBlogs() {
    const { blogPosts } = await graphcms.request(
        `
        query {
            blogPosts(
                orderBy: published_DESC
                first: 3
                where: {category_in: GUIDE}
            ) {
                id
                title
                slug
                category
                published
                topics
            }
        }
    `
    );

    return {
        ...blogPosts
    };
}

export async function getBlogPost(slug) {
    const { blogPost } = await graphcms.request(
        `
        query BlogPosts($slug: String!) {
            blogPost(where: { slug: $slug }) {
                id
                title
                content
                slug
                coverImage {
                    url
                }
                published
                category
                topics
          }
        }
      `,
        {
          slug,
        }
      );
    
      return {
          post: blogPost,
      };
}