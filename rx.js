const rx = (port, http) => {
    let server = http.createServer().listen(port)
    server.on("request", (request, response)=>{
      request.on('data', function(chunk) {
        //requestBody += chunck;
         console.log(JSON.parse(`${chunk}`).msg);
      });
      response.end();
  })
}

export default rx