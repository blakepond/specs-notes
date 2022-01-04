/*

        //* react beginner
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
            - <!--comment--> vs {*/ Comment; /*}
            - self-closing tags end in a slash <img />
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



            //* react packages
        - _rfce -> create component
        - npx create-next-app -e with-tailwindcss [project name]
        - npm add emoji-mart
        - npm add firebase
        - npm add react-moment
        - npm add recoil
        - npm add moment
        - npm install @headlessui/react - tailwind modal
        - npm install react-placeholder




        //* Handingling React State
    - Class Component syntax
        - class Welcome extends React.Component {
                render (){
                    return(
                        <h1>
                        Hello, {this.props.name}
                        </h1>
                    )
                }
          } 
    - Functional Component syntax 
          function Welcome(props){
              return (
                  <h1>Hello, {props.name}
                  </h1>
              )
          }

        - state vs props
            - props are received into functional components as the properties of a single argument
                - props cannot change value 
                - props go down
            - prop types
                - 
            - state can only be decalred inside react components
                - can change the state 
                - create event listener
                - update state inside event listener
                - state goes up
        //* react hooks
            - useState [showState, setShowState] = useState(true)
            - useEffect [showState, setShowState] = useEffect()
                - configureable lifecycle method
                - takes 2 args
                    -function
                    -
        - four ways to handle API calls
            - inline (Call fetch/Axios/etc)
            - centralized functions 
                - create functions and import them rather than inlining
            - custom hook
                - simplize state management and eliminate redundant code
            - 3rd party library

        - handling remote state
            - promises
                - '.then'
                - '.catch'
                - '.finally'
            - async/await
                - try
                - catch
                - finally
            - custom hook
                - create new function and export it to reuse state across many pages

        - error boundaries
          -handling error state
        - loading calls
          - loading state to signify something is happening 

        - react synthetic event system
            - event handlers
                -onClick
                -onChange
                -onHover
                -onBlur
                -onSubmit
                -onMouseover
        - react render
            - react renders when a 
                - state changes
                - prop changes
                - parent renders
                - context changes
        - logical && operator
            - runs right side if left side is truthy

        - state best practices
          - declare state in component that needs it 
          - if child components need state pass it down via props
          - if non child components need state lift state to common parent
          - alternative for passing props, global state management librarys
            - context
            - redux
            - mobX
            - recoil
        
        - shared, derived and immutable state
          - derived state
            - state that is disabled till an event has occured
          - array.find 
                - accepts a predicate
                     - predicate
                        - function that returns true or false
        - immutibility  
            - number
            - string
            - boolean
            - undefined
            - null
          - react state is immutible (unchanging)
          - fast comparisons
          - pure functions are easy to understand
          - simpler undo and redo
          - aviod bugs

         - value equality
            - does each property have the same value?
          -reference equailty
            - do both variables reference the same spot in memory

        - mutable
          - objects
            - creating copys of objects in js
                - Object.assign({}, state, {property: "value"})
                - Spread 
                    -const newState = {...state, property: "value"}
          - arrays
            - creating copys of arrays
                - Spread
                    - const newusers = [...state.users]
            - avoid push, pop and reverse array methods, the array must be cloned first before using these methods
            - use map, filter, reduce, concat and spread methods because they return a new array

          - web storage
            - cookies
            - sessionStorage
            - localStorage
            - indexedDb
            - cacheStorage

            - benefits of web storage
                - local
                - simple 
                - fast
                - works offline
            - downsides
                - limited storage
                - security risk
                - localStorage / session storage block i / 0
                - tied to single browser

            - state Enums vs Finite State Machines
                - fsm 
                    - only one state can be active at the same time.
                    - the machine transitions from one state to another
                - state enums
                    - 
        - form validation
          
        - managing state via refs
          - ref
            - reference to HTML element
            - store a value thats stable between renders
            - can mutate the ref's value directly
            - dont cause a re-render when they change 
            - instance variables
                - keep data between renders
                - storing a previous value
                - track if component is mounted
                - hold HTTP request cancel token
                - reference a 3rd party library instance
                - debounce a call / declare local cache
                - store flag that something happened
                - store value used in useEffect

        - useReducer vs useState
          - useState
            - easy to implement
            - easy to learn
          - useReducer
            - more scalable for complex scenarios
                - many complex state transitions
                - multiple sub-values
                - next stae depends on previous one
                - reason about state in isolation
                - testable on isolation
                - reusable

        - context
          - sharing state globally, displaying date across multiple components
         - complex data flows
         - inter-component communication

    - 3rd party state react libraries
          -> local state
            - built into react:
                - useState
                - Class state
                - useReducer
                - refs
                - derived state in render
            - 3rd party: 
                - x state
          -> global state
            - built into react:
                - lift state
                - context
            - 3rd party
                - redux
                - recoil
                - mobX
          -> server state
            - common libraries
                - fetch
                - axios
            - 3rd party
                - react-query
                - swr
                - Relay
                - Apollo
          -> immutable state
            - built into react:
                - plain js
            - 3rd party
                - immer
          -> form state
            - built into react:
                - state
                -event handlers
                - derived state
            - 3rd party
                - formik
                - react hook form

    - 8 ways to handle state and when to use
          - URL - sharable app location (router)
          - Web Storage - persist between session, one browser    
          - Local state - only one component needs the state
          - lifted state - a few related components need the state
          - derived state - state can be derived from existing state
          - refs - reference DOM elements, state that isn't rendered
          - context - global or subtree state
          - third party libraries - global state, server state, form state etc. 
          
        //? questions to consider when handling state
          - does it belong in the URL? 
             - current page, current record, sorting, scroll location
          - want to persist data across sessions or make data available offline?
            -  localStorage, indexedDB, etc
          - is it server date? 
            - try react-query or swr. 
          - using GraphQL? 
            - consider relay or Apollo
          - is it a DOM element reference, state that doesn't change or not rendered at all? 
            - use a ref
          - can it be derived from existing props, state, URL, etc?
            - derive it "on-the-fly" as part of each render (memoize if expensive)
          - does only one compenent use the data? 
            - use local state
          - do a few related components use it?
            - store state in a common parent
          - is it global state? 
            - store in apps root component, context, or separate library like recoil or redux





    //* react router
          - fast, declarative client-side routing
          - handle 404s
          - nest the app in router tag for router to be enabled globally
          - link 
            - like an anchor tag but react router handles the click so the page doesn't reload
          - useParams hook
            - allows to read URL params
          - useNavigate hook
            - redirect to a link
 
    - Next.js Framework
         - server-side rendering and static site generation, built using webpack
         - file-based routing built in 
          - any js file put in directory will be executed 

//? questions
        - useEffect
        - what is options chaining
        - </> closing tags <tag/> vs </tag>
        - when to use "key"
            - use key when iterating over a list in .map method
        - react fragment <> </>
          - app rendering can only have one component rendered at a time. wrap additional components in fragment
        - lambda syntax
        - && 
          - if right side of && is true execute the code to the left
        - ??
        - race conditions
        - time travel
        - persistance 
        - providers
        - pure functions - 
            - depends only on arguments, doesn't rely on anything outside the function
            - doesnt mutate arguments
            - has no side-effects
            - returns new value
            - idempotent
                - return same output for given input
        - enum pattern
        - side-effects


    
    
    
        

            

*/
