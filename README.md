Project Name: Text Analyzer and Search Web Application

Project completion screenshots:

![Screenshot (1)](https://github.com/Shasha-Shaik/a/assets/127418219/0ace3188-2667-47c9-85d0-b9762766205e)

![Screenshot (2)](https://github.com/Shasha-Shaik/a/assets/127418219/76b40c29-df7c-4db6-99d7-fc5284bf24da)

![Screenshot (3)](https://github.com/Shasha-Shaik/a/assets/127418219/ca872c70-a5af-452a-9f27-11f361bef851)

![Screenshot (4)](https://github.com/Shasha-Shaik/a/assets/127418219/ed11f4f7-0ec9-4888-af2f-53600cf3b127)

Description: The Text Analyzer and Search Web Application is a web-based tool designed to analyze text files (.txt) and provide various text-related functionalities. It allows users to upload text files, perform word frequency analysis, identify co-occurring word pairs, and conduct keyword searches within the text.

Key Features:

1. File Upload:

   • Users can upload text files with a maximum size limit of 5 MB.
   • Uploaded files are processed on the server to extract textual data.

2. Word Frequency Analysis:

   • The application calculates and displays the top 5 most frequently occurring words in the uploaded text.
   • Users can gain insights into the most common words in the text data.

3. Co-occurring Words:

   • The application identifies the top 5 most frequently co-occurring word pairs in the text.
   • This feature helps users understand which words tend to appear together in the provided text.

4. Keyword Search:

   • Users can perform keyword searches within the text to find specific terms or phrases.
   • The application provides a client-side search functionality for filtering content.

5. Responsive Design:

   • The web application is designed to be responsive, ensuring an optimal user experience on various devices, including laptops, tablets, and mobile phones.

Technologies Used:

    Backend: Node.js with Express.js for server-side logic and API endpoints.
    Frontend: HTML, CSS, and JavaScript for the user interface.
    File Upload: Multer library for handling file uploads.
    Version Control: Git and GitHub for source code management.

Usage:

    Users can access the application in a web browser.
    After uploading a text file, the application provides word frequency analysis, co-occurring words, and keyword search functionality.
    Users can explore and analyze textual data interactively through the user interface.

Analyze text files and return the following information:

    The top 5 most frequently occurring words.
    The top 5 pairs of adjacent words (co-occurring words).
    The frequency of each word in the text.
    Display the analysis results on the frontend as cards, with 5 cards showing the most frequent words and 5 cards showing themost co-occurring words.
    Implement a client-side keyword search feature to filter the displayed cards based on keywords.
    Visualize the frequency of words using optional graphs.

How to Set Up the Project:

To set up and run the project, follow these steps:

    Navigate to the Project Directory

Change your working directory to the project folder:

    cd text_analyzer_project

Install Dependencies:

    Install the project dependencies by running:

    npm install

Start the Node.js server by running the following command:

    node src/server.js
    This will start the backend server, and it will be accessible at http://localhost:3000.

Open the Frontend Interface:

    Open a web browser and navigate to http://localhost:3000 to access the frontend interface of the text analyzer project.

Project in Action:

    You can now use the web interface to upload text files, analyze them, and view the results. The top 5 most frequently occurring words and co-occurring words will be displayed as cards on the page. You can also use the keyword search feature to filter the cards based on specific keywords.
