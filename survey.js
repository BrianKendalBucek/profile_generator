const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  
  rl.question('What\'s an activity you like doing?', (answer2) => {
  
    rl.question('What do you listen to while doing that?', (answer3) => {
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
      
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
        
          rl.question('Which sport is your absolute favorite?', (answer6) => {
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {

              console.log(`Thank you for your valuable feedback`);

              console.log(
              `Hello, my name is  ${answer1}. 
              An activity I like doing is  ${answer2}. 
              While doing that, I listen to  ${answer3}. 
              My favorite meal of the day is  ${answer4}, and my favourite food is  ${answer5}. 
              My favorite sport is  ${answer6}. 
              My superpower is  ${answer7}`);

              rl.close();

            });

          });

        });

      });

    });

  });

});

