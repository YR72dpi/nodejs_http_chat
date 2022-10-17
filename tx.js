const tx = async (port, http, readline) => {
        let message = await readline.question("Message : ");
    
        const data = JSON.stringify({
            msg:message
        })

        const options = {
            hostname:'localhost',
            port: parseInt(port),
            path:"/",
            method:"POST",
            header: {
                "Content-Type": "application/json"
            }
        }

        const req = http.request(options, (response) => {
            response.on("end", () => {
                console.log("Sent")
            })
        })
        req.write(data);
        req.end();
}

export default tx