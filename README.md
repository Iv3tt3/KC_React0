# React Fundamentals Practice

## Introduction

This project is a dashboard application serving as the graphical interface for managing the Nodepop API. The backend for this application is provided by the following project: [Nodepop API](https://github.com/...). Once set up, the backend will run on port 3001 (configurable via the .env file). You can explore the available endpoints using the Swagger UI at the path `/swagger`.

### Backend

The backend provides the following endpoints:

- `/api/auth/signup`: POST request to create users.
- `/api/auth/me`: GET request to retrieve information of the authenticated user.
- `/api/auth/login`: POST request to obtain an access token by providing correct email and password.
- `/api/v1/adverts`:
  - GET request to retrieve a list of adverts with filtering options available in the query parameters.
  - POST request to create a new advert.
- `/api/v1/adverts/tags`: GET request to retrieve the list of available tags.
- `/api/v1/adverts/:id`:
  - GET request to retrieve a single advert by its ID.
  - DELETE request to delete an advert by its ID.

**Note:** All endpoints under `/adverts` require the token provided by the login endpoint to be sent in the request header as follows: `Authorization: Bearer <token>`. Backend data is persisted in a SQLite database located in the `/data` directory, and uploaded images are stored in the `/uploads` directory and served as static content in `/public`.

### Frontend

The frontend application is a Single Page Application (SPA) developed using React. You can bootstrap the application using `create-react-app`.

#### Routes

The application has two types of routes: Public and Protected.

**Public Routes:**

- `/login`: LoginPage

**Protected Routes:**

- `/: Redirects to /adverts`.
- `/adverts`: AdvertsPage
- `/adverts/:id`: AdvertPage
- `/adverts/new`: NewAdvertPage

Any other URL will render a NotFoundPage component.

#### Functionality of Each Page-Component

**LoginPage**

- Form to collect user email and password.
- "Remember me" checkbox to store login information in localStorage.

**AdvertsPage**

- List of adverts displaying name, price, sale status, and tags.
- Handles the state when no adverts are available with a link to the new advert page.
- Each advert in the list links to its detail page (`/adverts/:id`).
- Filter section allowing users to filter adverts based on various criteria.

**AdvertPage**

- Displays details of a specific advert.
- Shows the advert's photo or a placeholder if no photo exists.
- Provides a button to delete the advert with a confirmation prompt.

**NewAdvertPage**

- Form to create a new advert with all required inputs.
- Validation for all fields except the photo.
- Redirects to the advert page after creation.

## Download and Install the Application

1. **Download the Application:**
   - Clone or download the repository

2. **Install Dependencies:**
   - Open a terminal and navigate to the root directory of the application.
   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

3. **Launch the Application:**
   - After installing the dependencies, you can start the application with the following command:
     ```bash
     npm run dev
     ```
   - This will launch the development server and open the application in your default browser.

**Note:** Before using the application, it's necessary to create a user in the API from the Swagger and launch the backend server.
