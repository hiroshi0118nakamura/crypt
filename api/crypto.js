const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
 // Read the JSON file
 const filePath = path.join(process.cwd(), 'public', 'crypto.json');
 const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

 // Return the data
 res.status(200).json(data);
};