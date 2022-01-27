
const http=require('http');

const {getAllUsers,getUserById, addUser,getUser}=require('./app/api/users/')

const server=http.createServer((req,res)=>{
    try{
        console.log(req.method,req.url);
        const url = req.url;
        if(url.startsWith('/users/:') ){
            if(req.method === 'GET'){
                const [link,id] = req.url.split(":");
                res.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(getUserById(Number(id))));
            }
        }
        else if(url.startsWith('/users') ){
            const [link, query] = req.url.split("?");
            console.log(query,"query");
            if(req.method === 'GET'){
                const q = new URLSearchParams(`?${query}`);
                const page = q.get('page') ?? 1;
                res.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(getAllUsers(Number(page))));
            }
            else if(req.method === 'POST'){
                console.log(link, query);
                const q = new URLSearchParams(`?${query}`);
                const name = q.get('name');
                addUser(name);
                res.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(getAllUsers()));
            }
        }
        else if(url.startsWith('/users/')){
            const index=Number(url.split('/')[2])
            res.writeHead(201,{'Content-Type': 'application/json'});
            res.end(JSON.stringify(getUser(index)));
        }
        else{
            throw new Error('Did not understand query')
        }
    }
    catch(err){
        res.writeHead(401,{'Content-Type': 'application/json'})
        res.end(JSON.stringify({
        data: 'Error '+ err.message
        }))
    }
})

server.listen(3001,()=>{
    console.log("Listen on port 3001")
})