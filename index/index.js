const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const properties = [];

function getInput() {
  rl.question('Digite uma propriedade de CSS ou SAIR para terminar: ', (answer) => {
    if (answer.toUpperCase() === 'SAIR') {
      printProperties();
      rl.close();
    } else {
      properties.push(answer);
      getInput();
    }
  });
}

function printProperties() {
  const sortedProperties = properties.sort();
  for (let i = 0; i < sortedProperties.length; i++) {
    console.log(sortedProperties[i]);
  }
}

getInput();
