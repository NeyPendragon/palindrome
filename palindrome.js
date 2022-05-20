function palindrome(str) {
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("A man, a plan, a canal. Panama"));

    /*  EXPLANATION:
        [^A-Z] matches anything that is not enclosed between A and Z;
        [^a-z] matches anything that is not enclosed between a and z; 
        [^0-9] matches anything that is not enclosed between 0 and 9;
        [\W] replaces all the above 
        [^_] matches anything that does not enclose _;
        /g flag for global search;
        toLowerCase = converts the string to lower case;

        var len = str.length
            defines len as the length of the string to be used on the next line
        (var i = 0; i < len/2; i++)
            As long as the characters from each part match, the FOR loop will go on
        (str[i] !== str[len - 1 - i])
            When the characters don't match anymore, false is returned and we exit the FOR loop

Solution and explanation from: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

         */
   
   