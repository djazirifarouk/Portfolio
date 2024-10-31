---
title: Project Planner
publishDate: 2021-12-10 00:00:00
img: /assets/powerbi.jpg
img_alt: Project Planner Web App Screenshot
description: |
  ProjectPlanner is a web application built using Blazor Server and Entity Framework Core, designed to help users organize and manage projects with a focus on ticket management, project logging, and custom project component creation.
tags:
  - Blazor
  - .NET
  - Entity Framework Core
  - Web Development
  - Project Management
---

## ProjectPlanner

**ProjectPlanner** is a web application designed for effective project and task management, built using **Blazor Server** and **Entity Framework Core**. This app provides users with robust features for project organization, ticket management, and action logging, supporting customizability and flexibility for diverse project needs.

### Features Overview

#### Persistence
- **EF Core Setup & SQL Server Connection**: Configured Entity Framework Core for data persistence, enabling reliable storage with SQL Server integration.
- **Initial Migration**: Established database schema with migrations for easy future modifications.

#### Authentication
- **Identity Setup**: Implemented secure user authentication using ASP.NET Identity.
- **Login & Signup Customization**: Created customized login and sign-up pages to enhance user experience and security.

#### UI Components
- **Project Card, Ticket, & Column Components**: Built modular components for displaying and organizing projects, tickets, and workflow columns.
- **Page Setup**: Developed "My Projects" and "Project" pages, facilitating easy navigation and access to project details.
- **Creation Forms**: Included forms for adding new columns and tickets, with plans for future tag creation.

#### General Functionality
- **Project Logging**: Tracks and logs all actions within each project, stored in an accessible file for traceability.
- **Ticket Management**: Added functionality for ticket filtering, removal, and improved categorization to streamline workflows.
- **Column Management**: Provided the ability to add or remove columns as needed for flexible project structuring.

### Future Enhancements
- **Tag Creation Form**: Extend the customization options by allowing users to tag and categorize tickets further.

---

<!-- ### Screenshots
Below are some examples of **ProjectPlanner's** interface and component features:

![Project Card Component](/assets/project-card.jpg)
![Ticket Filtering](/assets/ticket-filtering.jpg)
![Project Logging Output](/assets/project-log.jpg) -->


### Technical Stack
- **Blazor Server**: For real-time user interface interactivity.
- **Entity Framework Core**: For object-relational mapping and database management.
- **ASP.NET Identity**: To secure user authentication.

---

ProjectPlanner showcases a modular approach to project management, delivering a customizable and efficient planning experience.
