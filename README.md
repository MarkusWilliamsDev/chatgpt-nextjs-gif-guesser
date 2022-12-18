# Random GIF Generator

This is a simple Next.js website that generates a random word, searches the Giphy API for a GIF with that word, and displays the GIF on the page.

## Prerequisites

Before you can run this project, you will need to have the following installed on your computer:

Node.js: You can download and install Node.js from the official website at https://nodejs.org/.

Next.js CLI: To install the Next.js CLI, open a terminal window and enter the following command:

`npm install -g next`

## Running the Project

To run this project on your local development server, follow these steps:

Clone the repository:
`git clone https://github.com/<your-username>/random-gif-generator.git`

Navigate to the project directory:
`cd random-gif-generator`

Install the project dependencies:
`npm install`

Replace your-giphy-api-key with your actual Giphy API key in the API_KEY constant in the pages/index.js file.

Start the development server:
`npm run dev`

This will start the development server and open your project in a new browser window at http://localhost:3000. You should see a button on the page that says "Generate new GIF", and when you click the button, a new random GIF should be displayed on the page.

Customizing the Project
You can customize this project by modifying the following:

The array of possible words: By default, the project uses an array of five words (cat, dog, bird, fish, and lizard) to generate the random word. You can modify this array to include any words you like.

The Giphy API key: You can use your own Giphy API key to access Giphy's content and resources. To get a Giphy API key, sign up for a Giphy account and apply for an API key on the Giphy Developers page at https://developers.giphy.com/.

The style of the page: You can use CSS to style the page however you like. The project includes a simple white background and blue button, but you can modify the CSS to change the appearance of the page.

Credits
This project was created using the Next.js framework and the Giphy API.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
