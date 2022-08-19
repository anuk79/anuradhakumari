import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getTalkDetails() {
    const { futureTalks, pastTalks } = await graphcms.request(
        `
            query {
                futureTalks: talks(where: {talkStatus: future},orderBy: date_ASC) {
                    id
                    topic
                    talkStatus
                    topics
                    date
                    eventDetails
                }
                pastTalks: talks(where: {talkStatus: past}, orderBy: date_DESC) {
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
        futureTalks,
        pastTalks,
    }
  }

export async function getFutureTalkDetails() {
    const { talks } = await graphcms.request(
        `
            query {
                talks(where: {talkStatus: future}, orderBy: date_ASC) {
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