let secretMessage = [
    'Learning',
    'is',
    'not',
    'about',
    'what',
    'you',
    'get',
    'easily',
    'the',
    'first',
    'time,',
    'it',
    'is',
    'about',
    'what',
    'you',
    'can',
    'figure',
    'out.',
    '-2015,',
    'Chris',
    'Pine,',
    'Learn',
    'JavaScript',
];

//2. Removing the last string ('JavaScript') using pop() method
secretMessage.pop();

//3. Adding two new strings to the array using push('') method
secretMessage.push('to', 'Program');

//4. Changing the word easily to the word right by accessing the index and replacing it
const easilyIndex = secretMessage.indexOf('easily');
secretMessage.splice(7, 1, 'right');

//5. Removing the first string of the array using shift() method
secretMessage.shift();

//6. Adding a new string to the beginning of the array using unshift() method
secretMessage.unshift('Programming');

//7. remove the strings get, right, the, first, time,, and replace them with the single string 'know,'
const getIndex = secretMessage.indexOf('get');
secretMessage.splice(6, 5, 'know,');

console.log(secretMessage.join(' '));

//The secret message is: Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
