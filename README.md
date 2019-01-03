# Taskana

Taskana is a full-stack desktop application to help you organize your tasks and projects. It is inspired by website Asana, and was built using a PostgreSQL database, Ruby on Rails on the backend, and React.js on the frontend, using Redux as an architectural framework.

Live link: https://taskana.herokuapp.com/#/

## Features

### Teams

Teams are the main structure of the app. Users can create, edit, and delete teams. The users can have many teams, and teams can have many members. Each team has their own projects.

### Projects

Projects organize the app further. Users can create projects, but they can only edit, and delete a project if they belong to the team that holds the project. Projects have a name and a description, as well as a team id

### Columns

Columns are located in each project's show page. Users can create and edit a column whenever they want, but can only delete a column if the column has no tasks. Columns help organize tasks in different topics. Columns have a name and a project id, as well as a list of tasks that were assigned to the column.

### Tasks

Tasks are the smallest feature of the application, yet they are the ones that have the most characteristics. They have the create, edit and delete functionality just as the other features. They have a name and a description, and they also include a due date, an author id, a column id, and a button to check whether the task was completed or not.
