const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const { id } = req.query;
    console.log("Requested ID:", id); // Log the requested ID

    // Read the JSON file
    const filePath = path.join(process.cwd(), "public", "crypto.json");
    console.log("File path:", filePath); // Log the file path
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log("Data:", data); // Log the parsed data

    // Find the item by id
    const item = data.find((item) => item.id === id);
    console.log("Found item:", item); // Log the found item

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
