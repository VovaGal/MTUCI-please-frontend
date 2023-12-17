## Project Launch

1. Clone the current repository
2. Navigate to the project directory 
3. Installing dependencies
    ```bash
    npm install
    ```
4. Start the application
    ```bash
    npm run dev
    ```
---

## Project Structure

### _ tests _
The _ tests _ folder consists of tests set up by [@Sypoo1](https://github.com/Sypoo1)

### api
The api folder consists of Axios requests functions for further use in the project when interracting with backend and was mainly writtn by [@Sypoo1](https://github.com/Sypoo1)

### assets
The assets folder consists of general assets used in project's elements. Certain assets will be removed in the future as they are no longer required and are simply there for testing.

### funcs
The funcs folder consists of general functions to be used inside other jsx files. They have been separated as they are either commonly used (increasing optimisation and clairty of the project) or simply been taken out to make major files such as App.jsx, lvl1.jsx etc. more comprehensive.

### hooks
The hooks folder consists of jsx files related to displaying and interracting with events through props and event listeners (such as changes to checkbox states and window resize).

### pages
The pages folder currently consists of two folders responsible for the home page and the first level page (structurally this folder and redirect will not be renames as the project will be further expanded on, adding more levels). Each of the page folders consists of sub elements defining the structure and design of the relative url/page through  jsx and css files. For further clarity of the project's structure first level has also been separated, with its sub-elements located in the items folder. Further separation of css and jsx was deemed unnecessary as the project isn't large enough. 
It is worth noting that to ensure equal workload across the project, the Home page and folder was done by [@Sypoo1](https://github.com/Sypoo1).

---

## Languages & tools

### HTML
### CSS
### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [Vite](https://vitejs.dev/) allows for easier and faster unwrapping of the server. Helps with pre-building, use of jsx files and dynamic imports.
- [Axios](https://axios-http.com/) is used to set up GET requests from backend and for general connection to backend.

