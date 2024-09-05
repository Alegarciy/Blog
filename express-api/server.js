const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});