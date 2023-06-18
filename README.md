# Portfolio API

This repository contains the code for the API backend of a portfolio web application. The API serves as a backend to handle data retrieval and manipulation for the portfolio website.

## Features

- **Projects**: Retrieve and manage project details, including title, description, images, and links.
- **Skills**: Store and retrieve skills information, such as skill name, proficiency level, and related projects.
- **Contact**: Handle contact form submissions and send emails to the portfolio owner.
- **Authentication**: Implement user authentication and authorization for secure access to certain API endpoints.

## API Endpoints

The following endpoints are available:

- **Projects**
- `GET /projects`: Get all projects
- `GET /projects/:id`: Get a specific project by ID
- `POST /projects`: Create a new project
- `PUT /projects/:id`: Update an existing project
- `DELETE /projects/:id`: Delete a project

- **Skills**
- `GET /skills`: Get all skills
- `GET /skills/:id`: Get a specific skill by ID
- `POST /skills`: Create a new skill
- `PUT /skills/:id`: Update an existing skill
- `DELETE /skills/:id`: Delete a skill

- **Contact**
- `POST /contact`: Submit a contact form

- **Authentication**
- `POST /auth/signup`: Create a new user account
- `POST /auth/login`: Log in to an existing account
- `POST /auth/logout`: Log out the currently authenticated user

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
