---
layout: doc
title: contrib / pluralize
---
# pluralize

### NAME

    pluralize() - convert singular English noun phrase to plural form

### SYNOPSIS

    string pluralize(string noun_phrase);

### DESCRIPTION

    Converts an English singular noun phrase to its plural form. The function 
    applies English pluralization rules to the main noun in the phrase, handling
    common patterns including regular plurals, irregular endings, and compound
    phrases with prepositions.
    
    The function recognizes and processes:
    - Regular plurals (adding 's')
    - Words ending in 's', 'sh', 'ch', 'x', 'z' (adding 'es') 
    - Words ending in 'y' preceded by consonant (changing to 'ies')
    - Various other English pluralization patterns
    - Compound phrases like "a sack of rice" -> "sacks of rice"
    
    Note: This function is designed specifically for English and may not work
    correctly with other languages. It handles most common cases but may not
    cover all irregular English plurals.

### ARGUMENTS

    noun_phrase - A string containing a singular English noun phrase to be
                  pluralized. Can be a simple noun or a phrase like "a red house".

### RETURN VALUE

    Returns a string containing the pluralized form of the input phrase.
    If the input cannot be processed, returns 0.

### EXAMPLES

    Basic noun pluralization:
    ```lpc
    string result = pluralize("house");
    // result contains "houses"
    
    result = pluralize("box");
    // result contains "boxes"
    
    result = pluralize("baby");
    // result contains "babies"
    ```
    
    Phrase pluralization:
    ```lpc
    string result = pluralize("a red house");
    // result contains "red houses"
    
    result = pluralize("a sack of rice");
    // result contains "sacks of rice"
    
    result = pluralize("the old man");
    // result contains "the old men" (if 'men' rule is implemented)
    ```
    
    Error handling:
    ```lpc
    mixed result = pluralize("");
    // result may be 0 for empty input
    ```

### SEE ALSO

    query_num(3), upper_case(3)
