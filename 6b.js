const http= Require("http");
const host='local host';
const port=8000;
const requestListner=function(req,res){
    res.end("my first server");
};
const server=http.createServer(requestListner );
serverListner(port,host,()=>{
    document.write("server is running on http=//${host}:${port}");
})