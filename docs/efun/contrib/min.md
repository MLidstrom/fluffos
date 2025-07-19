---
layout: doc
title: contrib / min
---
# min

### NAME

    min() - find the minimum value in an array

### SYNOPSIS

    mixed min(mixed *arr, int flag = 0);

### DESCRIPTION

    Finds the minimum value in an array with elements of type int, float,
    or string. The `min()` function can return either the minimum value
    itself or the index of its first occurrence in the array.

    - If `flag` is 0 or omitted, the function returns the minimum value.
    - If `flag` is non-zero, the function returns the index of the first
      occurrence of the minimum value.

    The array must be homogeneous (consist entirely of one data type).

    Note: Throws an error if the array is empty or contains mixed types.

### ARGUMENTS

    arr  - An array of integers, floats, or strings to be searched for the
           minimum value.

    flag - A flag indicating the return value type. Defaults to 0.
           - 0: return the minimum value.
           - non-zero: return the index of the first occurrence of the
             minimum value.

### RETURN VALUE

    Returns the minimum value in the array or the index of its first 
    occurrence, depending on the `flag` value. If the array is empty, 
    an error occurs.

### EXAMPLES

    Finding minimum value:
    ```lpc
    mixed result = min(({ 4, 2, 8, 6 }));
    // result is 2

    result = min(({ 1.5, 3.3, 2.8 }));
    // result is 1.5
    
    result = min(({ "apple", "orange", "banana" }));
    // result is "apple"
    ```

    Finding index of minimum value:
    ```lpc
    int index = min(({ 4, 2, 8, 6 }), 1);
    // index is 1 (first occurrence of 2)
    
    index = min(({ "apple", "orange", "banana" }), 1);
    // index is 0 (first occurrence of "apple")
    ```

    Error handling:
    ```lpc
    // This will cause an error:
    mixed result = min(({ }));
    // Error: Can't find min of an empty array.
    
    // This will also cause an error:
    mixed result = min(({ 1, "string" }));
    // Error: Inhomogeneous array.
    ```

### SEE ALSO

    max(3)

