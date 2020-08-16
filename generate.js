const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your project title? ', function(title){
    const file = 'ReadMe.md'
    rl.question('What installations are required? ', function(installations){
        rl.question('What are the use cases of your project? ', function(usage){
            rl.question("What are the steps to contributing to your project? ", function(contributing){
                console.log(`${title}`);
                fs.writeFileSync(path.join(__dirname,file),"\n"+"# " + title  + "\n")
						        fs.appendFileSync(file, "\n" + "## Installations"+ "\n" + installations +"\n")
						        fs.appendFileSync(file, "\n" + "## Use Cases"+ "\n" + usage +"\n")
						        fs.appendFileSync(file, "\n" + "## Contributing"+ "\n" + contributing+"\n")
                rl.close();
            });
        });
    });
    });

    rl.on("close", function(){
        console.log('Thank you!');
        process.exit(0);
    });

