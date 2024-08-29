// ********** Exercise: Level 1 ***************

// 1. Declare a variable named challenge and assign it to '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log("1. Challenge string:", challenge);

// 3. Print the length of the string
console.log("2. Length:", challenge.length);

// 4. Change all the string characters to capital letters
console.log("3. Uppercase:", challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters
console.log("4. Lowercase:", challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string
console.log("5. First word (substr):", challenge.substr(0, challenge.indexOf(' ')));
console.log("6. First word (substring):", challenge.substring(0, challenge.indexOf(' ')));

// 7. Slice out the phrase 'Days Of JavaScript'
console.log("7. Sliced phrase:", challenge.slice(3));

// 8. Check if the string contains the word 'Script'
console.log("8. Contains 'Script':", challenge.includes('Script'));

// 9. Split the string into an array
console.log("9. Split array:", challenge.split());

// 10. Split the string at the space
console.log("10. Split by space:", challenge.split(' '));

// 11. Split the string 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log("11. Split by comma:", str.split(", "));

// 12. Change '30 Days Of JavaScript' to '30 Days Of Python'
console.log("12. Replace 'JavaScript' with 'Python':", challenge.replace("JavaScript", "Python"));

// 13. What is the character at index 15?
console.log("13. Character at index 15:", challenge.charAt(15));

// 14. What is the character code of 'J'?
console.log("14. Character code of 'J':", challenge.charCodeAt(11));

// 15. Use indexOf to find the position of the first occurrence of 'a'
console.log("15. First occurrence of 'a':", challenge.indexOf('a'));

// 16. Use lastIndexOf to find the position of the last occurrence of 'a'
console.log("16. Last occurrence of 'a':", challenge.lastIndexOf('a'));

// 17. Use indexOf to find the first occurrence of the word 'because' in a given sentence
str = 'You cannot end a sentence with because because because is a conjunction';
console.log("17. First occurrence of 'because':", str.indexOf('because'));

// 18. Use lastIndexOf to find the last occurrence of the word 'because'
console.log("18. Last occurrence of 'because':", str.lastIndexOf('because'));

// 19. Use search to find the first occurrence of the word 'because'
console.log("19. Search for 'because':", str.search(/because/));

// 20. Use trim() to remove trailing whitespace
challenge = ' 30 Days Of JavaScript ';
console.log("20. Trimmed string:", challenge.trim());

// 21. Use startsWith() method
console.log("21. Starts with '30':", challenge.trim().startsWith('30'));

// 22. Use endsWith() method
console.log("22. Ends with 'JavaScript':", challenge.trim().endsWith('JavaScript'));

// 23. Use match() to find all 'a's
console.log("23. All 'a's:", challenge.match(/a/gi));

// 24. Use concat() to merge '30 Days of' and 'JavaScript'
let part1 = "30 Days of";
let part2 = 'JavaScript';
console.log("24. Concat:", part1.concat(' ', part2));

// 25. Use repeat() method to print '30 Days Of JavaScript' 2 times
console.log("25. Repeated:", challenge.trim().repeat(2));

// ********** Exercise: Level 2 ***************

// 1. Print the quote by John Holmes
console.log("1. Quote by John Holmes:", "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print the quote by Mother Teresa
console.log("2. Quote by Mother Teresa:", `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3. Check if typeof '10' is exactly equal to 10
let num1 = '10';
let num2 = 10;
console.log("3. Type of '10':", typeof num1, typeof num2);

// Convert '10' to number
num1 = Number(num1);
console.log("3. Type after conversion:", typeof num1, typeof num2);

// 4. Check if parseFloat('9.8') is equal to 10
num1 = 9.8;
num2 = 10;
console.log("4. 9.8 equals 10:", num1 === num2);

// Convert num1 to exactly 10
num1 = Math.ceil(num1);
console.log("4. After conversion to 10:", num1 === num2);

// 5. Check if 'on' is found in both 'python' and 'jargon'
let str1 = "python";
let str2 = "jargon";
console.log("5. 'on' in both 'python' and 'jargon':", str1.includes('on') && str2.includes('on'));

// 6. Check if 'jargon' is in the sentence
str = 'I hope this course is not full of jargon';
console.log("6. Contains 'jargon':", str.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively
let num = Math.random();
console.log("7. Random number between 0 and 100:", Math.floor(num * 101));

// 8. Generate a random number between 50 and 100 inclusively
console.log("8. Random number between 50 and 100:", Math.floor(num * 51) + 50);

// 9. Generate a random number between 0 and 255 inclusively
console.log("9. Random number between 0 and 255:", Math.floor(num * 256));

// 10. Access the 'JavaScript' string characters using a random number
str = 'JavaScript';
console.log("10. Random character from 'JavaScript':", str[Math.floor(Math.random() * str.length)]);

// 11. Use console.log() and escape characters to print a pattern
console.log(`11. Pattern:
1\t1\t1\t1\t1
2\t1\t2\t4\t8
3\t1\t3\t9\t27
4\t1\t4\t16\t64
5\t1\t5\t25\t125`);

// 12. Use substr to slice out the phrase 'because because because'
console.log("12. Substr 'because because because':", str.substr(str.indexOf('because'), 24));

// ********** Exercise: Level 3 ***************

// 1. Count the number of 'love' in a sentence
str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log("1. Count of 'love':", str.match(/love/gi).length);

// 2. Count the number of 'because' in a sentence
str = 'You cannot end a sentence with because because because is a conjunction';
console.log("2. Count of 'because':", str.match(/because/gi).length);

// 3. Clean the text and find the most frequent word
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleaned = sentence.replace(/[%$@&#;!]/g, '');
const wordsArray = cleaned.split(/\s+/);

const wordFrequency = wordsArray.reduce((acc, word) => {
    word = word.toLowerCase();
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

let mostFrequentWord = '';
let maxFrequency = 0;

for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}

console.log(`3. Most frequent word: '${mostFrequentWord}' with a frequency of ${maxFrequency}.`);

// 4. Calculate the total annual income
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number);
const monthlySalary = numbers[0] * 12; // 5000 euro per month
const annualBonus = numbers[1];        // 10000 euro annual bonus
const monthlyCourses = numbers[2] * 12; // 15000 euro per month for online courses
const totalAnnualIncome = monthlySalary + annualBonus + monthlyCourses;

console.log(`4. Total annual income is ${totalAnnualIncome} euro.`);
