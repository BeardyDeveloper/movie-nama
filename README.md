# Movie Search

Welcome to the Movie Search Challenge! Your task is to build a simple movie search application using Next.js that requires user authentication. The application should allow users to search for movies by title and display the results in a list. Users should also be able to click on a movie in the list to see more details.

## Requirements

Your application should meet the following requirements:

### Authentication

- Implement user authentication using a mock authentication service that simulates the behavior of a real authentication service.
- Users should be able to log in using their email (e.g. Sincere@april.biz) as the email and their username (e.g. Bret) as the password.
- After successful authentication, the user should be redirected to the movie search page.
  You can use [JSONPlaceholder Fake Online REST API](https://jsonplaceholder.typicode.com/) to simulate user authentication. You can use the `/users` endpoint to fetch user data.

### Movie Search

- Users should be able to search for movies by entering a title into a search bar.
- The application should display a list of movies matching the search criteria. For each movie, display the title, year and poster if available.
- The user should be able to click on a movie in the list to see more details. Display the title, year, rating, plot summary and any other relevant information.
- Implement pagination on the movie search results page so that the user can browse through multiple pages of results.
- Implement sorting and filtering options so that the user can sort the results by various criteria (e.g. year, rating) and filter the results based on various attributes (e.g. genre, release year).
- Implement a "favorites" feature that allows logged-in users to add movies to a list of favorite movies. You can use local storage to store the user's favorites list.

### Technical Requirements

- Use Typescript throughout the entire codebase to ensure type safety.
- Use a state management tool like Redux, Zustand or others to manage the application's state.
- Use a data fetching library like react-query, SWR or others to consume a public API where you can obtain information on movies. You can use the following links:
  - The Open Movie Database (OMDb) API - http://www.omdbapi.com/
- Use Formik and Yup or others to handle the user input when searching for movies and logging in.
- Use a UI library like MUI, Antd, Tailwind or others to make the application look polished and professional.
- Ensure that your code is well-structured, reusable, and easy to understand.

## Deadline

You have 2 days (14 hours) to complete this task.

Good luck!
