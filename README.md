# Jithuze Blog App

Jithuze Blog App is a simple React application for blogging, where users can view a list of blogs and add new blogs through an intuitive UI.

## Features

- **Home Page**: Displays a list of blogs fetched from a placeholder API.
- **Add Blog Page**: Provides a form for users to add a new blog.
- **Responsive Navigation Bar**: Allows easy navigation between pages.

## Tech Stack

- **Frontend**: React, Material-UI, CSS
- **Backend**: Placeholder API for mock data
- **Libraries**:
  - `@mui/material`: For styling and components.
  - `axios`: For API calls.
  - `react-router-dom`: For routing.

## Components

### App Component

The main entry point of the application. It defines the routing and includes the `Navbar` component.

### Navbar Component

A responsive navigation bar implemented with Material-UI's `AppBar`. It includes links to the Home and Add Blog pages.

### Home Component

- Fetches and displays blogs from `https://jsonplaceholder.typicode.com/posts` using `axios`.
- Uses Material-UI's `Card` component to showcase each blog.

### BlogPage Component

- Provides a form with `TextField` components for users to enter blog details.
- A `Button` allows users to submit the blog.

## File Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── BlogPage.js
│   └── Home.js
├── App.js
├── App.css
└── index.js
```

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd jithuze-blog-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## Customization

- To change the API endpoint for fetching blogs, modify the URL in the `Home` component:

  ```javascript
  axios.get('https://jsonplaceholder.typicode.com/posts')
  ```

- Update styles in the `App.css` file as needed.

## Future Enhancements

- Add form validation in the `BlogPage` component.
- Integrate a real backend for storing and retrieving blogs.
- Implement user authentication.

##

