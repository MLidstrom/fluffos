---
layout: doc
title: contrib / string_difference
---
# string_difference

### NAME

    string_difference() - calculate the edit distance between two strings

### SYNOPSIS

    int string_difference(string str1, string str2);

### DESCRIPTION

    Calculates the Levenshtein distance (edit distance) between two strings.
    The Levenshtein distance is the minimum number of single-character edits
    (insertions, deletions, or substitutions) required to transform one
    string into another.

    This function is useful for:
    - Spell checking and correction
    - Fuzzy string matching
    - Finding similar strings
    - Measuring string similarity

    The implementation uses dynamic programming and includes optimizations
    such as stripping common prefixes and suffixes before calculating the
    distance. The algorithm automatically processes the shorter string first
    for improved performance.

    A distance of 0 means the strings are identical. Higher values indicate
    greater differences between the strings.

### ARGUMENTS

    str1 - The first string to compare.
    str2 - The second string to compare.

### RETURN VALUE

    Returns an integer representing the minimum number of edits required
    to transform str1 into str2 (or vice versa). The distance is symmetric,
    meaning string_difference(a, b) == string_difference(b, a).

### EXAMPLES

    Identical strings:
    ```lpc
    int diff = string_difference("hello", "hello");
    // diff is 0
    ```

    Single character differences:
    ```lpc
    int diff = string_difference("cat", "bat");
    // diff is 1 (substitute 'c' with 'b')
    
    diff = string_difference("cat", "cats");
    // diff is 1 (insert 's' at end)
    
    diff = string_difference("cats", "cat");
    // diff is 1 (delete 's' from end)
    ```

    Multiple character differences:
    ```lpc
    int diff = string_difference("kitten", "sitting");
    // diff is 3 (substitute k->s, e->i, insert g)
    
    diff = string_difference("saturday", "sunday");
    // diff is 3
    ```

    Completely different strings:
    ```lpc
    int diff = string_difference("abc", "xyz");
    // diff is 3 (substitute all characters)
    ```

    Empty string handling:
    ```lpc
    int diff = string_difference("", "hello");
    // diff is 5 (insert all 5 characters)
    
    diff = string_difference("world", "");
    // diff is 5 (delete all 5 characters)
    
    diff = string_difference("", "");
    // diff is 0 (both empty)
    ```

    Practical applications:
    ```lpc
    // Spell checking - find closest match
    string *dictionary = ({ "hello", "world", "help", "held" });
    string input = "helo";
    string closest;
    int min_diff = 999;
    
    foreach (string word in dictionary) {
        int diff = string_difference(input, word);
        if (diff < min_diff) {
            min_diff = diff;
            closest = word;
        }
    }
    // closest would be "hello" with diff = 1
    ```

### SEE ALSO

    strcmp(3), strsrch(3), regexp(3)
