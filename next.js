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
        - deployment
            - 

            NEXT_PUBLIC_GRAPHCMS_ENDPOINT=https://api-us-west-2.graphcms.com/v2/ckxnpgeyb58ce01xo837ih750/master
GRAPHCMS_TOKEN=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDA2MzIwOTUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NreG5wZ2V5YjU4Y2UwMXhvODM3aWg3NTAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWQwOTFmZmEtOTQ1OC00NDU4LWIwMzEtNzhmN2E4M2U5YzUzIiwianRpIjoiY2t4cDF6bW4wNmQ3cDAxeHA4cnczOWRmMSJ9.pjhNIWxrodyLDhJ3akDWTnJ5nZAh3-K6LYcMJUHv54yINwydZvAJTgaDBEnd5UoaGTVrFs8Tkew-5rIL526B4vyrhu7K3yZkLG5ykR9vdxw29LXQS_YVwqjCs5C8kgxY9oYZkIIcUQp-MzkNaNjoiGQxWb6yrqkOBTpaVvVVucE4Ya1da2Ptuf6DgMH0A0QpkYtG0srbd0V3Ugf_-xbrAodLbRhxM8fQv5gFnS7BaIdIQL52J_2a81E2DElbTDCtl84GnWpZSCWe7eK1o1VkAOyxTY9LiDAtqOTqVbBeLzqzNwnM7-6VWXtim_cBuerS1875pbv_Gw2tu2YbaawDLjci-WaFGTXEqRD-E6Y7Ayy3DHQHu4sFxiqAe_bJmxuP4ApiN9qPuW7vLu55uBEc75Y36s9nf-hzAyv7_wOW6ePaF0-ocBoCJbeSQeupgwyrX25CnzNUazOAFWGFiLKShhBKHNYyPgtkpzOvYUYfNwVApmci_ktzfet6hhHDmYvTJtwuEHNe_yKKMM0NQ4LpgU_FaTDnjrbxYJAgZZOwdiqfYGkSefA1QiwiNrDS0M30DauPaiE-V97Au30xd0GFvpLfVPG_8RFhq4f5Wcd2vNU2hPW8z2HIRjFNafoFS19W_08BrtHs9lNvmuQnBp3-tpvCz8IEryzTfxsFd4t4H2g




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


/*
*1
*years
    
**/