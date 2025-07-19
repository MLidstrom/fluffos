---
layout: doc
title: contrib / roll_MdN
---
# roll_MdN

### NAME

    roll_MdN() - simulate rolling multiple dice with optional bonus

### SYNOPSIS

    int roll_MdN(int rolls, int sides, int bonus = 0);

### DESCRIPTION

    Simulates rolling multiple dice and returns the sum of all rolls plus
    an optional bonus. This function is commonly used in gaming applications
    to generate random numbers that follow dice-rolling conventions.

    The function rolls a `sides`-sided die `rolls` number of times, sums
    all the individual results, and adds the optional `bonus` value.
    Each die roll generates a random number from 1 to `sides` inclusive.

    If either `rolls` or `sides` is <= 0, the function returns 0 (plus
    any bonus if provided).

### ARGUMENTS

    rolls - The number of dice to roll. Must be > 0 for any dice to be rolled.
    sides - The number of sides on each die. Must be > 0 for any dice to be rolled.
    bonus - An optional modifier to add to the final sum. Defaults to 0.

### RETURN VALUE

    Returns an integer representing the sum of all dice rolls plus the bonus.
    The minimum possible return value is:
    - `rolls + bonus` (when each die shows 1)
    The maximum possible return value is:
    - `rolls * sides + bonus` (when each die shows maximum)

### EXAMPLES

    Basic dice rolling:
    ```lpc
    int result = roll_MdN(1, 4);
    // result is between 1 and 4 (simulates 1d4)
    
    result = roll_MdN(2, 6);
    // result is between 2 and 12 (simulates 2d6)
    
    result = roll_MdN(3, 8);
    // result is between 3 and 24 (simulates 3d8)
    ```

    With bonus modifiers:
    ```lpc
    int result = roll_MdN(1, 10, 15);
    // result is between 16 and 25 (simulates 1d10+15)
    
    result = roll_MdN(2, 6, -2);
    // result is between 0 and 10 (simulates 2d6-2)
    ```

    Edge cases:
    ```lpc
    int result = roll_MdN(0, 6);
    // result is 0 (no dice rolled)
    
    result = roll_MdN(3, 0);
    // result is 0 (invalid dice)
    
    result = roll_MdN(0, 0, 10);
    // result is 10 (only bonus applies)
    ```

    Gaming applications:
    ```lpc
    // Standard RPG dice rolls
    int damage = roll_MdN(1, 8, 3);     // 1d8+3 damage
    int healing = roll_MdN(2, 4, 2);    // 2d4+2 healing
    int attribute = roll_MdN(3, 6);     // 3d6 ability score
    
    // Critical hit damage
    int crit_damage = roll_MdN(2, 8, 6); // 2d8+6 critical
    ```

### SEE ALSO

    random(3), element_of(3)
