# SQL for Data Analysis - Udacity

Material do curso de SQL From Data Analysis da [Udacity]((https://classroom.udacity.com/courses/ud198)).

[Formating Your Queries](#formatting-your-queries)  
SQL Basics
  - SELECT, FROM
  - LIMIT
  - ORDER BY

  [SQLite vs MySQL vs PostgreSQL: A Comparison Of Relational Database Management Systems](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)  

## Formatting Your Queries

### Capitalization

You may have noticed that we have been capitalizing SELECT and FROM, while we leave table and column names lowercase. This is a common formatting convention. It is common practice to capitalize commands (SELECT, FROM), and keep everything else in your query lowercase. This makes queries easier to read, which will matter more as you write more complex queries. For now, it is just a good habit to start getting into.

### Avoid Spaces in Table and Variable Names
It is common to use underscores and avoid spaces in column names. It is a bit annoying to work with spaces in SQL. In Postgres if you have spaces in column or table names, you need to refer to these columns/tables with double quotes around them (Ex: FROM "Table Name" as opposed to FROM table_name). In other environments, you might see this as square brackets instead (Ex: FROM [Table Name]).

### Use White Space in Queries
SQL queries ignore spaces, so you can add as many spaces and blank lines between code as you want, and the queries are the same. This query

```sql
 SELECT account_id FROM orders
```

is equivalent to this query:

```sql
SELECT account_id
FROM orders
```

and this query (but please don't ever write queries like this):

```sql
SELECT              account_id

FROM               orders
```

### SQL isn't Case Sensitive
If you have programmed in other languages, you might be familiar with programming languages that get very upset if you do not type the correct characters in terms of lower and uppercase. SQL is not case sensitive. The following query:

```sql
SELECT account_id
FROM orders
```

is the same as:

```sql
select account_id
from orders
```

which is also the same as:

```sql
SeLeCt AcCoUnt_id
FrOm oRdErS
```

However, I would again urge you to follow the conventions outlined earlier in terms of fully capitalizing the commands, while leaving other pieces of your code in lowercase.

### Semicolons
Depending on your SQL environment, your query may need a semicolon at the end to execute. Other environments are more flexible in terms of this being a "requirement." It is considered best practices to put a semicolon at the end of each statement, which also allows you to run multiple commands at once if your environment is able to show multiple results at once.

## SQL Basics

### SQL statements

- CREATE TABLE is a statement that creates a new table in a database.
- DROP TABLE is a statement that removes a table in a database.
- SELECT allows you to read data and display it. This is called a **query**.

### SELECT & FROM

- SELECT indicates which column(s) you want to be given the data for.
- FROM specifies from which table(s) you want to select the columns. Notice the columns need to exist in this table.
- Asterisk "*" means all columns.

```sql
SELECT id, account_id, occurred_at
FROM orders;
```

**Every SQL Query** will have at least a SELECT and FROM statement. The SELECT statement is where you put the columns for which you would like to show the data. The FROM statement is where you put the tables from which you would like to pull data.

### LIMIT

The LIMIT statement is useful when you want to see just the first few rows of a table. This can be much faster for loading than if we load the entire dataset.  

The LIMIT command is always the very last part of a query.

```sql
SELECT occurred_at, account_id, channel
FROM web_events
LIMIT 15;
```

### ORDER BY

The ORDER BY statement allows us to order our table by any row.  

The ORDER BY statement is always after the SELECT and FROM statements, but it is before the LIMIT statement. As you learn additional commands, the order of these statements will matter more. If we are using the LIMIT statement, it will always appear last.  

Remember DESC can be added after the column in your ORDER BY statement to sort in descending order, as the default is to sort in ascending order.  

We can ORDER BY more than one column at a time. The statement sorts according to columns listed from left first and those listed on the right after that. 
