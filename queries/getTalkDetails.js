import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

async function getTalkDetails() {
    const { talks } = await graphcms.request(
        `
            query {
                talks {
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
  
  export default getTalkDetails;