import rx from './rx.js'
import tx from './tx.js'


var mode = "", port = "", host="";

function printHelper() {
    console.log("\n")
    console.log("First of all, specify the mode:")
    console.log('\t "rx" to receive')
    console.log('\t "tx" to transmet')
    
    console.log("\n")
    console.log("Next, you have to specify the port")
    console.log("If you want to transmet, specify the host")
    
    console.log("\n")
    console.log("=== Example ===")

    console.log("Receive : node index.js mode=rx port=8080")
    console.log("Transmet : node index.js mode=tx host=127.0.0.1 port=8080")
}

const args = process.argv.slice(2);
args.forEach(param => {
    //console.log(param);

    const regex = /(.*)=(.*)/gm;
    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('(.*)=(.*)', 'gm')

    const str = param;
    let m;
    while ((m = regex.exec(str)) !== null) {
    
        // This is necessary to avoid infinite loops with zero-width matches
    
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
        let i = 0;
        m.forEach(param => {
            if(i%3 == 1) {

                if(param === "mode") {
                    mode = m[i+1]
                }
                if(param === "port") {
                    port = m[i+1]
                }
                if(param === "host") {
                    host = m[i+1]
                }

            }
            i++;
        });
        
    }
});


    if(mode != "") {
        if(port != "") {
    
            if (mode === "rx") {
                console.log("\x1b[32mListen port : "+port+"\x1b[0m ")
                console.log("Message receive :\n")
                rx(port)
            } else if(mode == "tx" && host!=""){
                console.log("\x1b[32mGonna be send to "+host+" on port "+port+"\x1b[0m \n")
                tx(host, port)
            } else {
                console.log("\n \x1b[41m [host] missing \x1b[0m")
                printHelper()
            }
    
        } else {
            console.log("\n \x1b[41m [port] missing \x1b[0m")
            printHelper()
        }
    
        
    } else {
        console.log("\n \x1b[41m [mode] missing \x1b[0m")
        printHelper()    
    }