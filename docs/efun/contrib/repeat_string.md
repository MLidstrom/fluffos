---
layout: doc
title: contrib / repeat_string
---
# repeat_string

### NAME

    repeat_string() - repeat a string a specified number of times

### SYNOPSIS

    string repeat_string(string str, int repeats);

### DESCRIPTION

    Creates a new string by repeating the input string a specified number
    of times. The function respects the maximum string length configuration,
    truncating the result if necessary to stay within limits.

    The behavior depends on the value of `repeats`:
    - If `repeats` <= 0, returns an empty string ("").
    - If `repeats` > 0, returns the original string repeated `repeats` times,
      or as many times as possible without exceeding the maximum string length.

    If the total length would exceed the maximum string length, the function
    automatically reduces the number of repetitions to fit within the limit.

### ARGUMENTS

    str     - The string to be repeated.
    repeats - The number of times to repeat the string. If <= 0, an empty
              string is returned.

### RETURN VALUE

    Returns a new string containing the input string repeated the specified
    number of times, or an empty string if `repeats` <= 0.

### EXAMPLES

    Basic repetition:
    ```lpc
    string result = repeat_string("abc", 3);
    // result is "abcabcabc"
    
    result = repeat_string("-", 5);
    // result is "-----"
    ```

    Edge cases:
    ```lpc
    string result = repeat_string("hello", 0);
    // result is ""
    
    result = repeat_string("world", -2);
    // result is ""
    
    result = repeat_string("", 10);
    // result is ""
    ```

    Maximum length handling:
    ```lpc
    // If maximum string length is 10:
    string result = repeat_string("abc", 5);
    // result would be "abcabcabc" (9 chars, fits within limit)
    
    result = repeat_string("abcd", 5);
    // result would be "abcdabcd" (8 chars, truncated to fit limit)
    ```

### SEE ALSO

    sprintf(3), implode(3)
