import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getBlogs() {
    const { blogPosts } = await graphcms.request(
        `
        query {
            blogPosts(orderBy: published_DESC) {
            id
            title
            slug
            excerpt
            category
            published
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
                first: 2
            ) {
            id
            title
            slug
            excerpt
            category
            published
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