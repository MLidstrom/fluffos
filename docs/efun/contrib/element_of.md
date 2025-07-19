---
layout: doc
title: contrib / element_of
---
# element_of

### NAME

    element_of() - returns a random element from an array

### SYNOPSIS

    mixed element_of(mixed *arr);

### DESCRIPTION

    Returns a randomly selected element from the given array. Each element 
    in the array has an equal probability of being selected. The function 
    uses the built-in random number generator to determine which element 
    to return.

    The original array is not modified by this function.

    Note: Throws an error if the array is empty.

### ARGUMENTS

    arr - An array containing one or more elements of any type. The array
          must not be empty.

### RETURN VALUE

    Returns one randomly selected element from the input array. The type
    of the returned value depends on the types of elements in the array.

### EXAMPLES

    Basic usage:
    ```lpc
    mixed *numbers = ({ 10, 20, 30, 40, 50 });
    mixed result = element_of(numbers);
    // result could be any of: 10, 20, 30, 40, or 50
    ```

    Mixed type arrays:
    ```lpc
    mixed *items = ({ "apple", 42, 3.14, ({ 1, 2, 3 }) });
    mixed result = element_of(items);
    // result could be "apple", 42, 3.14, or ({ 1, 2, 3 })
    ```

    Single element array:
    ```lpc
    mixed *single = ({ "only_choice" });
    mixed result = element_of(single);
    // result is always "only_choice"
    ```

    Error handling:
    ```lpc
    mixed *empty = ({ });
    // This will cause an error:
    mixed result = element_of(empty);
    // Error: Can't take element from empty array.
    ```

    Practical example - random selection:
    ```lpc
    mixed *colors = ({ "red", "green", "blue", "yellow" });
    string random_color = element_of(colors);
    write("Selected color: " + random_color);
    ```

### SEE ALSO

    random(3), shuffle(3), member_array(3)
