export const scaleFactor = 4;

export const dialogueData = {
  pc: `Arithmetic Operations:
  Addition (+): This is the basic operation where you add numbers together. For example, 2 + 2 equals 4.
  Integer Division (//): This operation divides one number by another and rounds the result down to the nearest integer (whole number). For example, 5 // 2 gives 2 because it divides 5 into two whole parts.
  Modulus (%): This gives you the remainder after dividing two numbers. For example, 10 % 3 results in 1 because 10 divided by 3 leaves a remainder of 1.
  Multiplication (*): The multiplication operator repeats a string or multiplies two numbers. For example, 3 * 'A' gives you 'AAA', repeating the letter A three times.`,

  "cs-degree": `String Manipulation:
  Uppercase (upper()): The .upper() method is used on strings to convert all letters to uppercase. For example, 'hello'.upper() returns 'HELLO'.
  Reversing a String ([::-1]): This is a slicing technique to reverse a string. For example, 'Python'[::-1] results in 'nohtyP'.
  Repeating a String (*): You can repeat a string multiple times by using the * operator. For example, 3 * 'A' will give you 'AAA'.`,

  "sofa-table": `Range and Lists:
  Range (range()): The range() function generates a sequence of numbers. It is often used in loops. For example, range(5) produces the numbers 0, 1, 2, 3, 4. It doesn’t include 5.
  List Conversion (list(range())): The list() function converts the range of numbers into a list format. For example, list(range(3)) will give [0, 1, 2], which is a list.`,

  tv: `Type Checking and Type Conversion:
  Type Checking (type()): The type() function tells you what kind of data you are working with. For example, type(3.14) will tell you that it’s a float, which is a number with a decimal point.
  Type Conversion (int() or str()): You can convert one data type to another. For instance, if you have a string '10', you can convert it to an integer by using int('10'), which gives 10.`,

  bed: `Boolean Values:
  Boolean Logic (True and False): In Python, True and False are special values used in logical operations. They help determine the flow of a program based on conditions.
  Empty List as False (bool([])): In Python, an empty list is considered False in a boolean context. For example, bool([]) will return False because an empty list is "falsy" in Python.`,

  resume: `Dictionaries:
  Dictionaries ({}): A dictionary in Python stores values in key-value pairs. The keys are unique identifiers for accessing the values. For example, {'a': 1} stores the key 'a' and its value 1.
  Get Method (get()): The get() method allows you to fetch a value from a dictionary using its key. If the key doesn’t exist, it will return a default value. For example, {'a': 1}.get('b', 0) will return 0 because 'b' isn’t a key in the dictionary.`,

  projects: `Mathematical Functions:
  Minimum (min()): The min() function returns the smallest number in a list or collection of values. For example, min([7, 1, 9]) gives 1, because it's the smallest number in the list.
  Sum (sum()): The sum() function adds up all the numbers in a list. For example, sum([1, 2, 3]) gives 6, which is the sum of 1, 2, and 3.`,

  library: `Character Encoding:
  Unicode Code Point (ord()): The ord() function returns the Unicode code point of a character. For example, ord('A') returns 65, which is the Unicode number for the character 'A'.
  Character from Code Point (chr()): The chr() function converts a Unicode code point back to a character. For example, chr(97) returns 'a', which is the character corresponding to the Unicode code 97.`,

  exit: `Check your knowledge`,
};
