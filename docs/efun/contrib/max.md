---
layout: doc
title: contrib / max
---
# max

### NAME

    max() - find the maximum value in an array

### SYNOPSIS

    mixed max(mixed *arr, int flag = 0);

### DESCRIPTION

    Finds the maximum value in an array with elements of type int, float,
    or string. The `max()` function can return either the maximum value
    itself or the index of its first occurrence in the array.

    - If `flag` is 0 or omitted, the function returns the maximum value.
    - If `flag` is non-zero, the function returns the index of the first
      occurrence of the maximum value.

    The array must be homogeneous (consist entirely of one data type).

    Note: Throws an error if the array is empty or contains mixed types.

### ARGUMENTS

    arr  - An array of integers, floats, or strings to be searched for the
           maximum value.

    flag - A flag indicating the return value type. Defaults to 0.
           - 0: return the maximum value.
           - non-zero: return the index of the first occurrence of the
             maximum value.

### RETURN VALUE

    Returns the maximum value in the array or the index of its first 
    occurrence, depending on the `flag` value. If the array is empty, 
    an error occurs.

### EXAMPLES

    Finding maximum value:
    ```lpc
    mixed result = max(({ 4, 2, 8, 6 }));
    // result is 8

    result = max(({ 1.5, 3.3, 2.8 }));
    // result is 3.3
    
    result = max(({ "apple", "orange", "banana" }));
    // result is "orange"
    ```

    Finding index of maximum value:
    ```lpc
    int index = max(({ 4, 2, 8, 6 }), 1);
    // index is 2 (first occurrence of 8)
    
    index = max(({ "apple", "orange", "banana" }), 1);
    // index is 1 (first occurrence of "orange")
    ```

### SEE ALSO

    min(3)

