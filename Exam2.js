function solve(input){

    let followers = {}
    let likes = {}

    for (const line of input) {

        let tokens = line.split(': ')

        let command = tokens[0]
        let username = tokens[1]
        let count = +tokens[2]

        if(command === 'Log out'){
            break;
        }

        if(command === 'New follower'){
            if(!followers.hasOwnProperty(username)){
                followers[username] = 0
            }
        }else if(command === 'Like'){
            if(!followers.hasOwnProperty(username)){
                followers[username] = count
                likes[username] = count
            }else{
                followers[username] += count
                likes[username] += count
            }
        }else if(command === 'Comment'){
            if(!followers.hasOwnProperty(username)){
                followers[username] = 1
            }else{
                followers[username] += 1
            }
        }else if(command === 'Blocked'){
            if(followers.hasOwnProperty(username)){
                delete followers[username]
                delete likes[username]
            }else{
                console.log(`${username} doesn't exist.`);               
            }
        }     
    }


    likes = Object.entries(likes)


    
    followers = Object.entries(followers)



    for (let i = 0; i < followers.length; i++) {

        let char = followers[i][0]

        for (let j = 0; j < likes.length; j++) {

            let char2 = likes[j][0]
            let numLikes = likes[j][1]
            if(char === char2){
                followers[i].push(numLikes)
            }
        }

        let count = followers[i].length

        if(count === 2){
            followers[i].push(0)
        }
        
        
    }

    followers.sort(function(a, b){
        if(b[2] > a[2]){
            return 1
        }
        if(b[2] < a[2]){
            return -1
        }
        if(a[0] > b[0]){
            return 1
        }
        if(a[0] < b[0]){
            return -1
        }
    })


    

    let count = followers.length
    console.log(`${count} followers`);
    
    for (const follower of followers) {
        console.log(`${follower[0]}: ${follower[1]}`);
        
    }





}
solve('New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
   'New follower: tosho',
    'Comment: gosho'
    'Comment: tosho'
    'Comment: pesho'
    'Log out'
)