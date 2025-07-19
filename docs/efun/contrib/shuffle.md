---
layout: doc
title: contrib / shuffle
---
# shuffle

### NAME

    shuffle() - randomly reorder the elements of an array

### SYNOPSIS

    mixed *shuffle(mixed *arr);

### DESCRIPTION

    Randomly reorders (shuffles) the elements of the given array using the 
    Fisher-Yates shuffle algorithm. This function modifies the original array 
    in place and returns the same array reference.

    The shuffle is performed by iterating through the array from the second 
    element to the end, and for each element, swapping it with a randomly 
    chosen element from the portion of the array up to and including the 
    current element.

    Arrays with fewer than 2 elements are returned unchanged since there's 
    nothing meaningful to shuffle.

    Note: This function modifies the original array. If you need to preserve 
    the original order, make a copy first using copy().

### ARGUMENTS

    arr - The array to be shuffled. Can contain elements of any type.

### RETURN VALUE

    Returns the same array reference that was passed in, with its elements
    randomly reordered. If a non-array is passed, returns an empty array.

### EXAMPLES

    Basic shuffling:
    ```lpc
    mixed *numbers = ({ 1, 2, 3, 4, 5 });
    mixed *result = shuffle(numbers);
    // result might be ({ 3, 1, 5, 2, 4 })
    // numbers is also modified and equals result
    ```

    Shuffling mixed types:
    ```lpc
    mixed *items = ({ "apple", 42, 3.14, ({ 1, 2 }) });
    shuffle(items);
    // items might now be ({ 42, ({ 1, 2 }), "apple", 3.14 })
    ```

    Edge cases:
    ```lpc
    mixed *empty = ({ });
    shuffle(empty);
    // empty remains ({ })
    
    mixed *single = ({ "only" });
    shuffle(single);
    // single remains ({ "only" })
    ```

    Preserving original array:
    ```lpc
    mixed *original = ({ 1, 2, 3, 4 });
    mixed *shuffled = shuffle(copy(original));
    // original still contains ({ 1, 2, 3, 4 })
    // shuffled contains a randomly reordered copy
    ```

### SEE ALSO

    copy(3), random(3), sort_array(3)
