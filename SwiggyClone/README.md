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
