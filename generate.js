const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your project title? ', function(title){
    rl.question('What installations are required? ', function(installations){
        rl.question('What are the use cases of your project? ', function(usage){
            rl.question("What are the steps to contributing to your project? ", function(contributing){
                console.log(`
                ${title}
                ${installations}
                ${usage}
                ${contributing}`);
                rl.close();
            });
        });
    });
    });

    rl.on("close", function(){
        console.log('Thank you!');
        process.exit(0);
    });