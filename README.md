Portfolio Site

This is a portfolio project showcasing various development projects, built with Node.js, Express, and Pug. The portfolio includes projects completed as part of the FullStack JavaScript Tech Degree through Treehouse, highlighting skills in JavaScript, front-end development, and API interaction.

Table of Contents

	•	Portfolio Site
	•	Installation
	•	Usage
	•	Features
	•	Technologies
	•	Project Structure
	•	Contributing
	•	License
  •	Changes 
 

Installation

To get started with this project, clone the repository and install the necessary dependencies.

# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git

# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

Usage

To run the project locally:

# Start the server
npm start

Visit http://localhost:3000 in your browser to view the app.

Features

	•	Dynamic project pages displaying details for each project
	•	Error handling with customized error pages for 404 and other errors
	•	Static assets served via Express middleware
	•	Modular Pug templates for reusable layout and component structure

Technologies

	•	Node.js - Server environment
	•	Express - Web framework for handling routing and middleware
	•	Pug - Templating engine for server-rendered views
	•	CSS - Styling for the front end

Project Structure

├── public
│   ├── css
│   │   ├── normalize.css
│   │   └── styles.css
│   ├── images
│   └── js
│       └── script.js
├── views
│   ├── layout.pug          # Base layout template
│   ├── index.pug           # Homepage with project listings
│   ├── about.pug           # About page
│   ├── project.pug         # Dynamic project detail pages
│   ├── error.pug           # General error page
│   └── page-not-found.pug  # 404 error page
├── data.json               # Data for projects
├── app.js                  # Main server file
└── README.md               # Project documentation

Contributing

To contribute to this project:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request for review.

License

Changes


