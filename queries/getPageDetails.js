import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

async function getPageDetails() {
    const { headerNavigations, footerNavigations, abouts } = await graphcms.request(
        `
            query {
                headerNavigations {
                    id
                    label
                    url
                }
                footerNavigations {
                    id
                    label
                    url
                }
                abouts {
                    id
                    title
                    subtitle
                    details
                    person {
                      photo {
                        url(transformation: {image: {resize: {fit: clip, height: 100, width: 100}}})
                      }
                    }
                  }
            }
        `
    );
  
    return {
        header: { navLinks: headerNavigations },
        footer: { navLinks: footerNavigations },
        about: abouts[0]
    }
  }
  
  export default getPageDetails;