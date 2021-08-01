import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getTalkDetails() {
    const { talks } = await graphcms.request(
        `
            query {
                talks(orderBy: date_DESC) {
                    id
                    topic
                    talkStatus
                    topics
                    date
                    eventDetails
                }
            }
        `
    );
  
    return {
        talks
    }
  }

export async function getFutureTalkDetails() {
    const { talks } = await graphcms.request(
        `
            query {
                talks(where: {talkStatus: future}) {
                    id
                    topic
                    talkStatus
                    topics
                    date
                    eventDetails
                }
            }
        `
    );

    return {
        futureTalks: talks
    }
}