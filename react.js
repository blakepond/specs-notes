/*
React overview

    -why react
        -react is a library not a framework
            - usecases
                -web apps
                - static sites
                - mobile
                - desktop applications
                - server renderded
                - virtual reality
        - flexibility
        - developer experience
        - corporate investment
        - community
        - performance
        - testibility

    - tradeoffs
        - framework vs library
            -framework
                - clear opinions
                - less decision fatigue
                - less setup overhead
                - more cross-team consistency
            - library
                - light-weight
                - sprinkle on existing apps
                - pick what you need
                - choose best tech
                - popular boilerplates exist
        - concise vs explicit
            - two-way binding
                - less coding
                - automatic
            - one-way binding 
                - more control
                - more explicit
                - easy to debug
        - template centric vs java centric
            - angular, vue, ember
                - learn their own syntax
                - dont need js knowledge 
                - avoid confusion with js binding
                - rule of least power
            - react
                - learn js syntax
                - fewer concepts to learn
                - less code
                - easier to read
                - error handling 
        - separate vs single file
            - MVC Model, View, Component
            - seperation of concerns
                - place technologies in separate files
            - react implements all 
        - standard vs nonstandard
            - web component standard
                -templates
                -custom elements
                -shadow dom
                -imports
                - spotty brower support
                - doesn't enable anything new
                - js libraries keep innovating
                - only run in browser not mobile or other platforms
            - react 
                - jsx, js for templates
                - declare single file components for custom elemtns
                - css modules, css in js, "inline" for shadow DOM
                - one component per file for imports
        - community vs corporate backing
            - react is open source but backed by facebook
                - driven by FB's needs
                - full-time development staff and support
                - large community
                - fb has 50,000 components in prod
    - common concerns
        - jsx differs from html
            - for vs htmlFor
            - class vs className
            - <style color="blue"> vs <style={{ color:"blue"}}>
            - <!--comment--> vs {*/Comment/*}
        -> converting html to JSX 
            - find/replace
            - online complier
            - htmltojsx on npm
            - magic.reactis.net/htmltojsx.htm
        - build setup
            - minify
            - transpile
            - test and lint
        - potential version conflicts
            - runtime = potential version conflicts
            - web components standard doesnt have runtime
            - need to run recent versions of react to use with other components
        -> avoid conflics
            - standardize on a version
            - upgrade react when upgrading libraries
            - upgrade as a team
        - old features in searches
            - react evolves
            - react DOM library
        - decision fatigue
            - multiple ways to do same things
            - 5 key decisions
                - dev environment
                    - create-react-app 
                        - built in automated testing
                        - transpiling
                        - bundling
                        - linting
                        - automated build
                    - next.js
                    - gatsby
                    - etc.
                - classes or functions
                    - popular preference is functions
                - types
                    - prop types
                    - greeting
                    - flow
                - state
                    - state is the apps data
                    - plain react
                    - flux
                    - redux
                        - most popular
                    - mobX
                - styling
                    - 50 different styling 
                    - css in js
        

            

*/