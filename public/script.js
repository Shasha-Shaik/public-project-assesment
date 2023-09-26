document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  // Create a FormData object to send the file to the server
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error: ${errorData.error}`);
      return;
    }

    const data = await response.json();
    displayResults(data.wordFrequency);
  } catch (error) {
    console.error(error);
    alert("An error occurred while uploading the file.");
  }
});

function displayResults(wordFrequency) {
  // Implement the logic to display word frequency results on the page
  // You can create cards or tables to display the data
  console.log(wordFrequency);
}
