import http from "http"

const rx = (port) => {
    let server = http.createServer().listen(port)
    server.on("request", (request, response)=>{
      request.on('data', function(chunk) {
        //requestBody += chunck;
         console.log("\t"+JSON.parse(`${chunk}`).msg);
      });
      response.end();
  })
}

export default rx