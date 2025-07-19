---
layout: doc
title: db / db_rollback
---
# db_rollback

### NAME

    db_rollback() - rollback the last transaction

### SYNOPSIS

    int db_rollback( int );

### DESCRIPTION

    For transactional databases this will rollback the last set of actions.

    Returns 1 on success, 0 on failure.

### NOTES

    Some database types (like MSQL) do not support transactions/rollbacks, so this function may have no effect depending on your database type.

### SEE ALSO

    db_commit(3), db_exec(3), valid_database(4)

