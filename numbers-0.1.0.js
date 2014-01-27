window.numbers = {};
window.numbers = function (nums) {
    var knownPrimesLessThan100 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var ref_F = null;

    (function init() {
        if(window.F !== null && typeof window.F !== 'undefined') {
            ref_F = window.F;
        }
    })();

    nums.version = nums.ver = nums.v = "0.1.0";

    nums.noConflict = function() {
        if(ref_F !== null) {
            window.F = ref_F;
        }
        return this;
    };

    nums.sum = function (nSet) {
        var c = nSet.length;
        var s = 0;
        for (var i = 0; i < c; i++) {
            s += nSet[i];
        }
        return s;
    };

    nums.product = function (nSet) {
        var c = nSet.length;
        var p = 1;
        for (var i = 0; i < c; i++) {
            p *= nSet[i];
        }
        return p;
    };

    nums.avg = nums.mean = function (nSet) {
        var c = nSet.length;
        return this.sum(nSet) / c;
    };

    nums.variance = function (nSet) {
        var c = nSet.length;
        var squareSum = 0;
        var avg = this.mean(nSet);
        for (var i = 0; i < c; i++) {
            squareSum += Math.pow((nSet[i] - avg), 2);
        }

        return squareSum / c;
    };

    nums.covariance = function (xSet, ySet) {
        var cX = xSet.length;
        var cY = ySet.length;

        if (cX !== cY) {
            throw new Error("Sets are not of equal size.");
        }

        var sX = this.sum(xSet);
        var sY = this.sum(ySet);
        var sXY = 0;
        for (var i = 0; i < cX; i++) {
            sXY += xSet[i] * ySet[i];
        }

        return (sXY - ((sX * sY) / cX)) / (cX - 1);
    };

    nums.stdev = nums.standardDeviation = function (nSet) {
        return Math.sqrt(this.variance(nSet));
    };

    nums.sem = nums.standardErrorOfMean = function (nSet) {
        return Math.sqrt(this.variance(nSet) / nSet.length);
    };

    nums.z = nums.zValue = function (x, mean, stdev) {
        return (x - mean) / stdev;
    };

    nums.nFac = nums.factorial = function (n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        var p = n * this.factorial(n - 1);

        return Math.round(p, 0);
    };

    nums.nPr = nums.permutations = function (n, r) {
        if (r > n) {
            return 0;
        }

        if (r == n || r == 0) {
            return 1;
        }

        if (r == 1) {
            return n;
        }

        if (r < Math.floor(n / 2)) {
            var p = 1;
            var t = n;
            var ndr = n - r;

            while (t > ndr) {
                p *= t--;
            }

            return Math.round(p, 0);
        }

        var nf = this.factorial(n);
        var ndrf = this.factorial(n - r);

        return Math.round(nf / ndrf, 0);
    };

    nums.nCr = nums.combinations = function (n, r) {
        if (r > n) {
            return 0;
        }

        if (r == n || r == 0) {
            return 1;
        }

        if (r == 1) {
            return n;
        }

        var p = this.permutations(n, r);
        var rf = this.factorial(r);

        return Math.round(p / rf, 0);
    };

    nums.gcd = nums.greatestCommonDivisor = function (nSet) {
        var c = nSet.length;

        if(c === 0) return 'undefined';
        if(c === 1) return nSet[0];

        nSet.sort(function (a, b) {
            return a - b;
        });

        if(c === 2) {
            var least = Math.abs(nSet[0]);
            if(nSet[1]%least === 0) return least;

            var halfLeast = Math.floor(least / 2);

            for (var j = halfLeast; j > 1; j--) {
                if(nSet[0]%j === 0 && nSet[1]%j === 0) {
                    return j;
                }
            }

            return 1;
        }

        var n = nSet.pop();

        return this.gcd([this.gcd(nSet), n]);
    };

    nums.lcm = nums.leastCommonMultiple = function (nSet) {
        var c = nSet.length;

        if(c === 0) return 'undefined';
        if(c === 1) return nSet[0];

        if (c === 2) {
            return Math.round(this.product(nSet)/this.gcd(nSet), 0);
        }

        var n = nSet.pop();
        return this.lcm([n, this.lcm(nSet)]);
    };

    nums.isPrime = function(num) {
        var p = parseInt(num, 10);
        if(p === 'NaN') return 'undefined';
        if(p === 1) return false;
        if(knownPrimesLessThan100.indexOf(p) >= 0) return true;

        for(var i = 0; i < knownPrimesLessThan100.length; i++) {
            if(p%knownPrimesLessThan100[i] === 0) return false;
        }

        var srp = Math.floor(Math.sqrt(p));
        for (var j = 101; j <= srp; j+= 2) {
            var pm = false;
            for(var k = 0; k < knownPrimesLessThan100.length; k++) {
                if(j%knownPrimesLessThan100[k] === 0) {
                    pm = true;
                    break;
                }
            }
            if(pm) continue;

            if(p%j === 0) return false;
        }

        return true;
    };

    nums.dotProduct = function(u, v) {
        var ml = u.length;
        var nl = v.length;

        if(ml !== nl) {
            throw new Error("Vectors do not have equal sizes.");
        }

        var dp = 0;
        for (var i = 0; i<ml; i++) {
            dp += u[i]*v[i];
        }

        return dp;
    };

    nums.isOrthogonal = function(u, v) {
        return Math.round(this.dotProduct(u,v),0) === 0;
    };

    nums.magnitude = function(A) {
        return Math.sqrt(this.dotProduct(A,A));
    };

    nums.normalize = function(A) {
        var normA = [];
        var Al = A.length;
        var mA = this.magnitude(A);

        for(var i = 0; i < Al; i++) {
            normA[i] = A[i]/mA;
        }

        return normA;
    };

    nums.tr = nums.trace = function(A) {
        var Al = A.length;
        var tr = 0;
        for(var i = 0; i < Al; i++) {
            if(typeof A[i] !== 'array') {
                throw new Error("Missing vector at column " + i);
            }
            if(A[i][i] === null || typeof A[i][i] === 'undefined') {
                throw new Error("Missing value at column " + i + ", row " + i);
            }

            tr += A[i][i];
        }

        return tr;
    };

    nums.rebase = function (n, nb, cb) {
        if (cb === null || typeof(cb) === 'undefined') cb = 10;

        if (nb == cb) return n;

        return parseInt(parseInt(n, cb).toString(nb), 10);
    };

    nums.deg2rad = function (t) {
        return (Math.PI*t)/180;
    };

    nums.rad2deg = function (t) {
        return (180*t)/Math.PI;
    };

    nums.rect2pol = function(x, y) {
        return {
            r: Math.sqrt(Math.pow(x,2) + Math.pow(y,2)),
            t: Math.atan2(y, x)
        };
    };

    nums.pol2rect = function(r, t) {
        return {
            x: r*Math.cos(t),
            y: r*Math.sin(t)
        };
    };

    return window.F = nums;
}(window.numbers);