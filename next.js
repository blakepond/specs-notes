//* creating a blog site using next.js, graphcms, graphQL, node, tailwindcss

/*
   * First start with creating next.js app with tailwind css
        - npx create-next-app -e with-tailwindcss <project name>
        - dependancies
        - npm install graphql graphql-request html-react-parser moment react-multi-carousel sass

        - design layout 
        - create components
            - rfce (react functional component)
            - PostCard
            - PostWidgets
            - Categories
            - Header
            - Layout
                - create layout to show default display
        - add global styles
            - add custom styles in globals css file
        - fetching data from graphcms 

    * tailwind notes
        - contents - create a phantom container whose children act like direct children of the parent
        - overflow


    * graphql notes
        - create services folder
        - import { request, gql } from "graphql-request"
            - allows making graphql queries
        - create graphcms endpoint
            - const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
            - create new .env variable and store graphcms api endpoint in .env file
        - create the query
            - fetch info
            - export const getPosts = async () => {
                 const query = gql`
                    query MyQuery {
                        
                    }
                `
            - in graphcms go to API playground
                - create a custom query by selecting the specific info requested
                    - postsConnections
                        - edges
                            - node
                                - author
                                    - bio
                                        - name
                                            - id
                                            - photo
                                                - url
                                                - created at
                                                - slug 
                                                - title
                                                - excerpt
                                                - featuredimage
                                                    - url
                                                - categories
                                                    - name
                                                    - slug

}
        -  then specify from where
            - const result = await request(graphqlAPI, query)

        - return results
            - return result.postsConnection.edges;
        
        - mutation
            - data that changes in graphQL

    * graphcms notes
            - create schemea
            - find endpoint to put in .env file
                - project settings
                    - environments
                        - copy and paste master environment into .env file
            - allow access 
                - API access
                    - click "yes initialize defaults"
            - slug? 
    * next.js
        - file routing
        - getStaticPaths 
            - when passing a dynamic url
        - getStaticProps
        - return fallback
        - Image




        ? questions
            - next
                - link
            - getStaticProps
                - create a new function outside of function to get db in a component
                    export async function getStaticProps() {
                        const posts = await getPosts() || []
                        return {
                        props: { posts }
                        }
                    }
                - fetch data at build time, serverside render
            - graphql
                    - how to query
            - graphcms
                    - slug? 

*/