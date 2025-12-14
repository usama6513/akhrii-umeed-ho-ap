# Quickstart Guide for Contributors

This guide provides the essential steps to set up a local development environment and contribute to the "AI-Driven Humanoid Robotics Development Book".

## Prerequisites

- **Node.js**: Version 18.x or later.
- **npm**: Should be included with Node.js.
- **Git**: For version control.

## 1. Clone the Repository

First, clone the project repository from GitHub to your local machine.

```bash
# Replace with the actual repository URL
git clone https://github.com/your-username/humanoid-robotics-book.git
cd humanoid-robotics-book
```

## 2. Install Dependencies

The project uses Docusaurus, a static site generator based on React. Install all the necessary npm packages.

```bash
npm install
```

This command will read the `package.json` file and install all the required dependencies, including Docusaurus, React, and any plugins.

## 3. Run the Development Server

Start the local development server to preview the book site as you make changes.

```bash
npm start
```

This command will launch a local development server, typically at `http://localhost:3000`. The site will automatically reload when you save changes to the content or code.

## 4. Content Contribution Workflow

- **Content Location**: All book chapters are located in the `/docs` directory as `.mdx` files.
- **Code Examples**: All source code for the examples is located in the `/code` directory, organized by module.
- **Making Changes**:
    1. Create a new branch for your feature or chapter: `git checkout -b feature/my-new-chapter`.
    2. Add or edit `.mdx` files in the `/docs` directory.
    3. Add or edit code examples in the `/code` directory.
    4. Verify that your changes render correctly in the local preview.
    5. Commit your changes with a descriptive message and open a pull request.
