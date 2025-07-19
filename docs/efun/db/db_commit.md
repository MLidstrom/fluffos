---
layout: doc
title: db / db_commit
---
# db_commit

### NAME

    db_commit() - commits the last transaction

### SYNOPSIS

    int db_commit(int handle );

### DESCRIPTION

    For transactional databases this will commit the last set of actions.

    Returns 1 on success, 0 on failure.

### NOTES

    Some database types (like MSQL) do not support transactions, so this function may have no effect depending on your database type.

### SEE ALSO

    db_exec(3), db_rollback(3), valid_database(4)

