//exports from net module is needed in this program 
//else how can we use the export and create a socket 
const net = require("net");   


//console is an object over the abstraction 
//process.stdout and std err 
// which is abstracted or the fd which is needed to the ipc to out the information 
console.log("Logs from your program will appear here!");

//net is still needed to access 
//and net provides a method to create a socket fd 
// then we assign the object to the server 
 const server = net.createServer((connection) => {
});
//listen inorder to create a queue under the kernel
server.listen(6379, "127.0.0.1");
