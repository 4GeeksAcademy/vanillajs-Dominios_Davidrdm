let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let end = ".com";
let result = []
for(let i =0 ; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let f = 0; f < noun.length; f++){
           result.push(`${pronoun[i]}${adj[j]}${noun[f]}${end}`)

        }
    }
}
console.log(result);