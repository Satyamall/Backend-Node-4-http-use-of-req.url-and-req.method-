
const users=[
    { 
        "name":"Satya", 
        "id":1
    },
    {
        "name":"Albert", 
        "id":2
    },
    {
        "name":"Jaswant", 
        "id":3
    },
    { 
        "name":"Anamika",
        "id":4
    },
    { 
        "name":"Pawan",
        "id":5
    },
    { 
        "name":"Ravi",
        "id":6
    },
    { 
        "name":"Abhinav",
        "id":7
    },
    { 
        "name":"Aayush",
        "id":8
    },
    { 
        "name":"Viksheet",
        "id":9
    },
    { 
        "name":"Gurbir",
        "id":10
    },
    { 
        "name":"Parug",
        "id":10
    }
]

function getAllUsers(page=1){
    const start=(page-1)*3;
    const end=start+3;
    return users.slice(start,end);
}

function getUser(index){
    if(index===0 && index<users.length)
    {
        return users[index];
    }
    else{
        return null
    }
}

function getUserById(id=1){
    for(let elem in users){
        if(users[elem].id === id){
            return users[elem];
        }
    }
}

function addUser(name){
    users.push(name);
    return users
}

module.exports={
    getAllUsers,
    getUserById,
    getUser,
    addUser
}