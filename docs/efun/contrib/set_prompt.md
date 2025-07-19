---
layout: doc
title: contrib / set_prompt
---
# set_prompt

### NAME

    set_prompt() - Set the prompt for an interactive player

### SYNOPSIS

    void set_prompt(string prompt, void | object player);

### DESCRIPTION

**Note: This function is currently disabled in the FluffOS source code and not available for use.**

This function would set the command prompt for an interactive player. If no player object is specified, it defaults to this_player().

The function exists in the source code as a stub implementation but is disabled via conditional compilation (`#if 0`).
