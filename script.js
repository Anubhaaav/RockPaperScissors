
    let user = prompt("Enter R,P or S");
    let cpu1 = Math.floor(Math.random() * 3);
    let cpu = ["R", "P", "S"][cpu1];

    const match = (cpu, user) =>{
        if(cpu === user){
            return "Nobody: Match is tied";
        }
        else if(cpu == "R" && user =="P"){
            return "user"
        }
        else if(cpu == "S" && user =="P"){
            return "cpu"
        }
        else if(cpu == "R" && user =="S"){
            return "cpu"
        }
        else if(cpu == "P" && user =="S"){
            return "user"
        }
        else if(cpu == "P" && user =="R"){
            return "cpu"
        }
        else if(cpu == "S" && user =="R"){
            return "user"
        }
    }

let result = match(cpu, user)
document.write(`CPU:${cpu} <br> and User: ${user} <br> The winner is :${result} <br>`)
