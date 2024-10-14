// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let max = (n-1)*2+1;

    for (let i=1; i<=max; i+=2) {
        console.log(' '.repeat((max-i)/2)+'#'.repeat(i)+' '.repeat((max-i)/2));
    }
}

module.exports = pyramid;
