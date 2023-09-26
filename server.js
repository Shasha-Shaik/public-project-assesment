const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Set up Multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files (e.g., HTML, CSS, JavaScript)
app.use(express.static("public"));

// Define a route for uploading files
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Process the uploaded file (example: word frequency analysis)
    const fileBuffer = req.file.buffer.toString();
    const words = fileBuffer.split(/\s+/).filter(Boolean);
    const wordFrequency = {};

    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Respond with the word frequency analysis as JSON
    return res.json({ wordFrequency });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
