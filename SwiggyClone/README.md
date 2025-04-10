# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching algorithm -writte in c++
- Image Optimization
- Minification
- Bundling
- Comprassing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Sheking - remove unused code
- Defferent dev and prod bundles

# Project structure

- header
  - logo
  - Nav items
- Body
  - Search
  - Restaurant Container - Restaurant cart
- Footer
  - Copyright
  - Links
  - Address
  - Contact

# Two type of Export/Import

- Default Export/Import

export default "Component Name";
import "Component" from "path";

- Named Export/Import

export const "Component Name or Varivable name"
import {Component} from "path"

# React Hooks

- They are Normal JS Utility function (Written by facebook developer)

- 1- useState()
- 2- useEffect()

# Routing in web apps

- Client Side Routing
  (We are not featching any page outside application)
- Server Side Routing
  ( We are fetching the page outside the appliction like api call)

# UseParam Hook

- useParam (use for the extrating the id from route url) it return the "resId"

# propDriling

- this a way to passing the data from parent to child or nesteed child
- (this way has one problem if i want to pass data from parent to nested child and
  and intermediant child don't want data but we pass data trough that child
  show it means we pass data that child. those not want data )
  sho that problem solve by the "contextAPI"

# ContextAPI(this solve the propdriling problem)

- It create the central data store that called the "Context Provider"
  (And we receive the data any where that part called the "Context Cunsumer)

# Redux tool kit(RTK)

- Install @reduxjs/toolkit and react-redux

  - Build our store(Redux store)
  - Build slice(cardSlice)
  - Connect our store to our App
    "Store have tha multiple component that called the slice of the strore (actualy the that are component)"

  - If we want update the store follow these steps
    1- Fist happend the action (like click)
    2- This action goes into dispatcher(action)
    3- After this reducer function update slice
  - If we want read the data frome store
    1- First subscribe the store
    2- read the the data using "selector"
    3- after update the UI

# Types of testing (developer)
  - Unit testing
  - Integration testing
  - End to End Testing -e2e testing

# Setting up Testing in our app

  - Install React Testing Library
  - Installed jest
  - Installed Babel dependencies
  - Configure Babel
  - Configure Parcel Config file to disable default babel transpilation(becouse i want to use balel.config.js not default one)
  - Jest configure file (npx jest --init)
  - Install jsdom library
  - Create __tests__ folder for writing the testcase
  - Install @babel/preset-react to make JSX work in text cases
  - Include @babel/preset-react inside my babel config
  - Install @testing-liberary/jest-dom
  - Add the infinite scrolling  for loading the restaurant card

