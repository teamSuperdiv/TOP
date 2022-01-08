// Output even numbers from 2 to 10
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}

// replace for with while
// example code
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

// replacement
let i = 0;
while(i < 3) {
    console.log( `number ${i}!` );
    i++;
}

/* *********************** */

// write a loop which prompts for a number greater than 100.
// if user prompts another number, ask again

// let number;
// do {
//     number = prompt("Give me a number greater than 100!")
//     if (!number) break;
// } while (number <= 100 && number)

/* *********************** */

// output prime numbers from 2 to n
let n = 20;

next:
for (let i = 2; i <=n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue next;
    }
    console.log(i)
}
