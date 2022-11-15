const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT= process.env.PORT || 3001
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('server listening at 3001'); // eslint-disable-line no-console
  });
});