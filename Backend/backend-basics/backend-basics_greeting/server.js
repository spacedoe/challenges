import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode == 200;
  console.log(request.url);
  response.end("Hello, Anna!");
});
