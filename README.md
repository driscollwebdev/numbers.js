numbers
=======

numbers is a client-side javascript library that adds some advanced mathematics functionality to the standard Math library.

Library Contents
-------
- **README.md:** This file.
- **numbers-x.y.z.js:** Version **x.y.z** of the numbers library, suitable for development.
- **numbers-x.y.z-min.js:** Version **x.y.z** of the numbers library, suitable for production.

Reference
-------
### Metadata
- **ver (or version):** The current version of the numbers library.

  ```JavaScript
  console.log(F.ver); // > 0.1.0
  ```

### Basic Arithmetic Functions
- **sum:** Find the sum of a set of numbers.
         
  ```JavaScript
  var s = F.sum([1,2,3,4]);
  console.log(s); // > 10
  ```

- **product:** Find the product of a set of numbers.
  
  ```JavaScript
  var p = F.product([1,2,3,4]);
  console.log(p); // > 24
  ```

- **nFac (or factorial):** Find the factorial (_n!_) of a number **n**.

  ```JavaScript
  var f1 = F.nFac(5);
  var f2 = F.factorial(5);
  console.log(f1); // > 120
  console.log(f2); // > 120
  ```
  
- **gcd (or greatestCommonDivisor):** Find the greatest common divisor of a set of numbers.
  
  ```JavaScript
  var d1 = F.gcd([2,4,6]);
  var d2 = F.greatestCommonDivisor([2,4,6]);
  console.log(d1); // > 2
  console.log(d2); // > 2
  ```

- **lcm (or leastCommonMultiple):** Find the least common multiple of a set of numbers.
 
  ```JavaScript
  var m1 = F.lcm([3,6,9,12]);
  var m2 = F.leastCommonMulitple([3,6,9,12]);
  console.log(m1); // > 36
  console.log(m2); // > 36
  ```

- **isPrime:** Determine whether a number **n** (less than 2<sup>53</sup>) is prime using a combination of sieve and trial division.

  ```JavaScript
  console.log(F.isPrime(21)); // > false
  console.log(F.isPrime(31)); // > true
  ```

### Statistical Functions
- **mean (or avg):** Find the arithmetic mean of a set of numbers.
- **variance:** Find the variance of a set of numbers.
- **stdev (or standardDeviation):** Find the standard deviation of a set of numbers.
- **stderr (or standardError):** Find the standard error of a set of numbers.
- **covariance:** Find the covariance of two sets of numbers.
- **z (or zValue):** Given a mean and standard deviation, find the z-value of a number **n**.

### Combinatorial Functions
- **nPr (or permutations):** Find the number of ordered sets of **r** items that can be selected from a set of **n** items.
- **nCr (or combinations):** Find the number of unordered sets of **r** items that can be selected from a set of **n** items.

### Other Functions
- **rebase:** Convert a number from one base to another. If no value is given for the input base, decimal (base 10) is assumed.

  ```JavaScript
  console.log(F.rebase(42,2)); // > 101010
  console.log(F.rebase(101010,10,2)); // > 42
  ```
