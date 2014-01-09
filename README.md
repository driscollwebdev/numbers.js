numbers.js
=======

numbers.js is a client-side javascript library that adds some advanced mathematics functionality to the standard Math library.

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

  ```JavaScript
  console.log(F.mean([2,3,4,5])); // > 3.5
  console.log(F.avg([2,3,4,5])); // > 3.5
  ```

- **variance:** Find the variance of a set of numbers.

  ```JavaScript
  console.log(F.variance([2,3,4,5])); // > 1.25
  ```

- **stdev (or standardDeviation):** Find the standard deviation of a set of numbers.

  ```JavaScript
  console.log(F.stdev([2,3,4,5])); // > 1.118033988749895
  console.log(F.standardDeviation([2,3,4,5])); // > 1.118033988749895
  ```

- **stderr (or standardError):** Find the standard error of a set of numbers.
- **covariance:** Find the covariance of two sets of numbers.
- **z (or zValue):** Given a mean and standard deviation, find the z-value of a number **n**.

### Combinatorial Functions
- **nPr (or permutations):** Find the number of ordered sets of **r** items that can be selected from a set of **n** items.

  ```JavaScript
  console.log(F.nPr(20,2)); // > 380
  console.log(F.permutations(20,2)); // > 380
  ```

- **nCr (or combinations):** Find the number of unordered sets of **r** items that can be selected from a set of **n** items.

  ```JavaScript
  console.log(F.nCr(10,5)); // > 252
  console.log(F.combinations(10,5)); // > 252
  ```

### Conversion Functions
- **rebase:** Convert a number from one base to another. If no value is given for the input base, decimal (base 10) is assumed.

  ```JavaScript
  console.log(F.rebase(42,2)); // > 101010
  console.log(F.rebase(101010,10,2)); // > 42
  ```

- **deg2rad:** Convert an angle in degrees to an angle in radians.

  ```JavaScript
  console.log(F.deg2rad(45)); // > 0.7853981633974483
  ```

- **rad2deg:** Convert an angle in radians to an angle in degrees.

  ```JavaScript
  console.log(F.rad2deg(Math.PI/2); // > 90
  ```

- **rect2pol:** Convert a point described in cartesian coordinates (x,y) to a point described in polar coordinates (r,t). Returns an object with properties r and t, with t measured in radians from -Math.PI to Math.PI.

  ```JavaScript
  var p = F.rect2pol(0,1);
  console.log(p.r); // > 1
  console.log(p.t); // > 1.5707963267948966
  ```

- **pol2rect:** Convert a point described in polar coordinates (r,t) to a point described in cartesian coordinates (x,y). Returns an object with properties x and y.

  ```JavaScript
  var p = F.pol2rect(1,3*Math.PI/4);
  console.log(p.x); // > -0.7071067811865475
  console.log(p.y); // > 0.7071067811865476
  ```

### Other Functions
- **noConflict:** Run numbers.js in no-conflict mode, optionally aliasing the library to a different variable. Has no effect on global **F** variable if there is no conflict.

  **Example 1:** Reassign value of F
  ```HTML
  <script>
    window.F = { foo: function() { return "Hello, world!"; } };
  </script>
  <script src="numbers-0.1.0-min.js"></script>
  <script>
    console.log(F.foo()); // > undefined
    G = numbers.noConflict();
    console.log(F.foo()); // > Hello, world!
    console.log(G.avg([1,2,3,4])); > 2.5
  </script>
  ```

  **Example 2:** Use global _numbers_ variable
   ```HTML
   <script>
     window.F = { foo: function() { return "Hello, world!"; } };
   </script>
   <script src="numbers-0.1.0-min.js"></script>
   <script>
     console.log(F.foo()); // > undefined
     numbers.noConflict();
     console.log(F.foo()); // > Hello, world!
     console.log(numbers.avg([1,2,3,4])); > 2.5
   </script>
   ```

  **Example 3:** Do nothing if there is no conflict
  ```HTML
  <script src="numbers-0.1.0-min.js"></script>
  <script>
    console.log(F.avg([1,2,3,4])); // > 2.5
    numbers.noConflict();
    console.log(F.avg([1,2,3,4])); // > 2.5
  </script>
  ```