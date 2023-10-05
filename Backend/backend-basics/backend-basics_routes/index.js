import { server } from "./server.js";

const port = 8000
server.listen( port, () => {
    console.log(`the Server running on port ${port}`);
})
