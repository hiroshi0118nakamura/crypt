const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
 const { id } = req.query;

 // Read the JSON file
 const filePath = path.join(process.cwd(), 'public', 'crypto.json');
 const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

 // Find the item by id
 const item = data.find(item => item.id === id);

 if (item) {
    res.status(200).json(item);
 } else {
    res.status(404).json({ message: 'Item not found' });
 }
};