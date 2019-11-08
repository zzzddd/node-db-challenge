
const server = require("./api/server");

const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`\n*** RUNNING ON PORT ${port} ***\n`));