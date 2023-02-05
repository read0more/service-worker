const express = require('express');
const app = express();
const port = 3000;

// disable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/api', (req, res) => {
  res.json({ data: 'hello' });
});
