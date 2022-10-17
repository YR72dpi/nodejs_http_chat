import http from "http"
import readline from "readline-sync";

const tx = async (host, port) => {

       

        let message = await readline.question("Message : ");
    
        const data = JSON.stringify({
            msg:message
        })

        const options = {
            hostname: host,
            port: parseInt(port),
            path:"/",
            method:"POST",
            header: {
                "Content-Type": "application/json"
            }
        }

        const req = http.request(options, (request, response) => {

        })
        req.write(data);
        req.end(() => {
            console.log("\x1b[32m Sent ! \x1b[0m\n")
            tx(host, port)
        });
}

export default tx