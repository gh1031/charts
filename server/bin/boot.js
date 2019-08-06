const app = require('../index');

console.log(`server is running at http://localhost:${process.env.PORT || 6060}`)
app.listen(process.env.PORT || 6060);