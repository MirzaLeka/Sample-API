require ('./config/config');
const app = require('./app');

const port = process.env.PORT || 3000;

// Server launch
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});