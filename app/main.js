//exports from net module is needed in this program 
//else how can we use the export and create a socket 
const net = require("net");   
//net allows to create socket under tcp : hey i want to connect : lets connect if ur serious and send me connect : connect back 

//console is an object over the abstraction 
//process.stdout and std err 
// which is abstracted or the fd which is needed to the ipc to out the information 
console.log("Logs from your program will appear here!");


 const server = net.createServer((connection) => {//create server creates the socket fd 
    //and we need socket fd to access inorder to read and write to the network interface 
 connection.on('data',(data)=>{ //so after creating this method allows to pass a callback function 
       console.log(data);      //when ever the socket is created the callback is executed with the socket or server object is passed 
       connection._write('+PONG\r\n');//with we just need to create an event with the server object 
       //when a connection is called on the server object event listener is called which says PONG 
 })  
 
});
//listen inorder to create a queue under the kernel
server.listen(6379, "127.0.0.1");

//whats an even listener array 
//why the on method stores the callback reference to the listener array 