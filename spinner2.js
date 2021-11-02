let spin = ['|','/','-','\\','|','/','-','\\','|'];
let time = 100;
for (const char of spin) {
  //console.log(char)
  setTimeout(() => {
    process.stdout.write(`\r${char}     `);
  }, time);
  time += 200;
}

