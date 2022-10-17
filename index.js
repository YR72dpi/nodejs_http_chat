import rx from './rx.js'
import tx from './tx.js'
import http from "http"
import readline from "readline-sync";

var mode = "", port = "", host="";

function printHelper() {
    console.log("help")
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

            }
            i++;
        });
        
    }
});

//console.log(mode)
//console.log(port)

if(!(mode == "" || port == "")) {
    if(mode === "rx"){
        rx(port, http)
    } else if(mode === "tx"){
        tx(port, http, readline)
    } else {
        printHelper()
    }
} else {
    printHelper()    
}