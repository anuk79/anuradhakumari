import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getVideoDetails() {
    const { videos } = await graphcms.request(
        `
            query {
                videos(
                    orderBy: published_DESC
                    first: 3
                ) {
                    id
                    title
                    coverImage {
                        url
                    }
                    link {
                        url
                        displayText
                        openInNewTab
                        external
                    }
                    published
                }
            }
        `
    );
    return {
        videos
    }
}