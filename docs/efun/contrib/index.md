---
layout: doc
title: contrib
---

# Contrib EFuns Index

This page contains an alphabetical list of all contrib EFuns with descriptions and quick navigation.

## Quick Navigation
[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [M](#m) | [N](#n) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [Z](#z)

---

## A

* [**abs**](abs.html) - return the absolute value of a number
* [**assemble_class**](assemble_class.html) - provided an array, return a class composed of the members of that array

## B

* [**base_name**](base_name.html) - return the base name without object id (OID)

## C

* [**classes**](classes.html) - return names of classes used by object
* [**compressedp**](compressedp.html) - returns if interactive connection uses telopt compress
* [**copy**](copy.html) - return a deep copy of an array, buffer, class, or mapping

## D

* [**debug_message**](debug_message.html) - logs a debug message
* [**disassemble_class**](disassemble_class.html) - given an instantiated class, returns a mixed* array with elements comprised of the values of each member of the class

## E

* [**element_of**](element_of.html) - returns a random element from an array
* [**event**](event.html) - call event_* in other objects with specified parameters. similar to call_other, but with no return type

## F

* [**fetch_class_member**](fetch_class_member.html) - return the value of a specified, indexed member of an instantiated class
* [**fetch_variable**](fetch_variable.html) - fetch a value stored in an object's global variable
* [**file_length**](file_length.html) - return the line count of a file
* [**function_owner**](function_owner.html) - returns the object defining the given function
* [**functions**](functions.html) - returns a string array of function names or mixed* array of information for all functions in a passed object

## G

* [**get_garbage**](get_garbage.html) - get all clones without environments or inventories which are not shadowing

## H

* [**heart_beats**](heart_beats.html) - returns an array of all objects with enabled heartbeat

## I

* [**is_daylight_savings_time**](is_daylight_savings_time.html) - returns 1 if given time in given timezone is within daylight saving region

## M

* [**max**](max.html) - find the maximum value in an array
* [**memory_summary**](memory_summary.html) - returns mapping of memory usage statistics
* [**min**](min.html) - find the minimum value in an array

## N

* [**named_livings**](named_livings.html) - return named livings
* [**network_stats**](network_stats.html) - returns mapping of network statistics
* [**num_classes**](num_classes.html) - returns the number of classes used by object

## P

* [**pluralize**](pluralize.html) - convert singular English noun phrase to plural form
* [**program_info**](program_info.html) - returns mapping of program information and memory usage

## Q

* [**query_charmode**](query_charmode.html) - returns current character mode status of interactive object
* [**query_ip_port**](query_ip_port.html) - returns local_port of connection
* [**query_notify_fail**](query_notify_fail.html) - returns current notify_fail setting (funcp or string)
* [**query_num**](query_num.html) - converts number into string representation
* [**query_replaced_program**](query_replaced_program.html) - returns path to replacement program if object called replace_program

## R

* [**real_time**](real_time.html) - returns local server time
* [**remove_charmode**](remove_charmode.html) - switches interactive object into linemode
* [**remove_get_char**](remove_get_char.html) - cancels active input_to
* [**remove_interactive**](remove_interactive.html) - removes the interactive object
* [**remove_shadow**](remove_shadow.html) - remove all shadows from the specified object, or remove a specified shadow from another object. does not destruct the shadow
* [**repeat_string**](repeat_string.html) - repeat a string a specified number of times
* [**replaceable**](replaceable.html) - check if object is replaceable
* [**restore_from_string**](restore_from_string.html) - like restore_object(), but restores variables from a string where the string is in the same format as from restore_object()
* [**roll_MdN**](roll_MdN.html) - simulate rolling multiple dice with optional bonus

## S

* [**send_nullbyte**](send_nullbyte.html) - sends '\0' to interactive
* [**set_prompt**](set_prompt.html) - Set the prompt for an interactive player
* [**shuffle**](shuffle.html) - randomly reorder the elements of an array
* [**store_class_member**](store_class_member.html) - store value in specified indexed member of instantiated class
* [**store_variable**](store_variable.html) - store a value in an object's global variable
* [**string_difference**](string_difference.html) - calculate the edit distance between two strings

## T

* [**terminal_colour**](terminal_colour.html) - return a wrapped and indented string where the driver substitutes %^KEY%^ in the string with the matching VALUE of KEY in the supplied mapping
* [**test_load**](test_load.html) - test if a file is loadable

## U

* [**upper_case**](upper_case.html) - returns a string with every letter supplied in the source capitalised

## V

* [**variables**](variables.html) - returns array of global variable names

## Z

* [**zonetime**](zonetime.html) - returns ctime(int) for timezone string

---

*Total: 49 contrib EFuns*
