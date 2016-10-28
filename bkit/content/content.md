#What is SQL? //3

SQL (pronounced "ess-que-el") stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.

!>-1-png

Some common relational database management systems that use SQL are: *Oracle, Sybase, Microsoft SQL Server, Access, Ingres, etc.* Although most database systems use SQL, most of them also have their own additional proprietary extensions that are usually only used on their system.

However, the standard SQL commands such as **"Select", "Insert", "Update", "Delete", "Create", and "Drop"** can be used to accomplish almost everything that one needs to do with a database. This tutorial will provide you with the instruction on the basics of each of these commands as well as allow you to put them to practice using the SQL Interpreter.

#Table Basics //3

A relational database system contains one or more objects called tables. The data or information for the database are stored in these tables. Tables are uniquely identified by their names and are comprised of columns and rows.

Columns contain the column name, data type, and any other attributes for the column. Rows contain the records or data for the columns. Here is a sample table called "weather".

city, state, high, and low are the columns. The rows contain the data for this table:

!>-1-png

Next courses, we will be looking into the main commands used in SQL.

#Selecting Data - Select Command/Statement //10

The select statement is used to query the database and retrieve selected data that match the criteria that you specify. Here is the format of a simple select statement:

`select "column1"`
`  [,"column2",etc]`
`  from "tablename"`
`  [where "condition"];`
`  [] = optional`

The column names that follow the select keyword determine which columns will be returned in the results. You can select as many column names that you'd like, or you can use a "Asterix" to select all columns.

The table name that follows the keyword from specifies the table that will be queried to retrieve the desired results.

The where clause (optional) specifies which data values or rows will be returned or displayed, based on the criteria described after the keyword where.

Conditional selections used in the where clause:

`=	Equal`
`>	Greater than`
`<	Less than`
`>=	Greater than or equal`
`<=	Less than or equal`
`<>	Not equal to`
`LIKE`

The LIKE pattern matching operator can also be used in the conditional selection of the where clause. Like is a very powerful operator that allows you to select only rows that are "like" what you specify. The percent sign "%" can be used as a wild card to match any possible character that might appear before or after the characters specified. For example:

`select first, last, city`
`   from empinfo`
`   where first LIKE 'Er%';`

This SQL statement will match any first names that start with 'Er'. Strings must be in single quotes.

Or you can specify,

`select first, last`
`   from empinfo`
`   where last LIKE '%s';`
This statement will match any last names that end in a 's'.

`select * from empinfo`
`   where first = 'Eric';`
This will only select rows where the first name equals 'Eric' exactly.

!>-1-png

Enter the following sample select statements in the SQL Interpreter Form at the bottom of this page. Before you press "submit", write down your expected results.

`select first, last, city from empinfo; `

`select last, city, age from empinfo`
`       where age > 30;`

`select first, last, city, state from empinfo`
`       where first LIKE 'J%'; `

`select * from empinfo; `

`select first, last, from empinfo`
`       where last LIKE '%s';`

`select first, last, age from empinfo`
`       where last LIKE '%illia%'; `

`select * from empinfo where first = 'Eric';`

Your Results?

(Get premium app to check your results)

#Creating Tables - Create Command/Statement //12
The create table statement is used to create a new table. Here is the format of a simple create table statement:

`create table "tablename"`
`("column1" "data type",`
` "column2" "data type",`
` "column3" "data type");`

Format of create table if you were to use optional constraints:

`create table "tablename"`
`("column1" "data type" `
`         [constraint],`
` "column2" "data type" `
`         [constraint],`
` "column3" "data type" `
`        [constraint]);`

Using [ ] is optional
Note: You may have as many columns as you'd like, and the constraints are optional.

**Example:**
`create table employee`
`(first varchar(15),`
` last varchar(20),`
` age number(3),`
` address varchar(30),`
` city varchar(20),`
` state varchar(20));`

To create a new table, enter the keywords create table followed by the table name, followed by an open parenthesis, followed by the first column name, followed by the data type for that column, followed by any optional constraints, and followed by a closing parenthesis. It is important to make sure you use an open parenthesis before the beginning table, and a closing parenthesis after the end of the last column definition. Make sure you seperate each column definition with a comma. *All SQL statements* should end with a ";".

The table and column names must start with a letter and can be followed by letters, numbers, or underscores - not to exceed a total of 30 characters in length. Do not use any SQL reserved keywords as names for tables or column names (such as "select", "create", "insert", etc).

Data types specify what the type of data can be for that particular column. If a column called "Last_Name", is to be used to hold names, then that particular column should have a **varchar** (variable-length character) data type.

Here are the most common Data types:

!>-1-png

What are constraints? When tables are created, it is common for one or more columns to have constraints associated with them. A constraint is basically a rule associated with a column that the data entered into that column must follow. For example, a "unique" constraint specifies that no two records can have the same value in a particular column. They must all be unique. The other two most popular constraints are "not null" which specifies that a column can't be left blank, and "primary key". A "primary key" constraint defines a unique identification of each record (or row) in a table.

All of these and more will be covered in the future Advanced release of this Tutorial. Constraints can be entered in this SQL interpreter, however, they are not supported in this Intro to SQL tutorial & interpreter. They will be covered and supported in the future release of the Advanced SQL tutorial - that is, if "response" is good.

It's now time for you to design and create your own table. You will use this table throughout the rest of the tutorial. If you decide to change or redesign the table, you can either drop it and recreate it or you can create a completely different one. The SQL statement drop will be covered later.

&&Create Table Exercise&&
You have just started a new company. It is time to hire some employees. You will need to create a table that will contain the following information about your new employees: firstname, lastname, title, age, and salary. After you create the table, you should receive a small form on the screen with the appropriate column names. If you are missing any columns, you need to double check your SQL statement and recreate the table. Once it's created successfully, go to the "Insert" lesson.

**IMPORTANT:** When selecting a table name, it is important to select a unique name that no one else will use or guess. Your table names should have an underscore followed by your initials and the digits of your birth day and month. For example, Tom Smith, who was born on November 2nd, would name his table myemployees_ts0211 Use this convention for all of the tables you create.

Your tables will remain on a shared database until you drop them, or they will be cleaned up if they aren't accessed in 4-5 days. If "support" is good, I hope to eventually extend this to at least one week. When you are finished with your table, it is important to drop your table (covered in last lesson).

#Inserting into a Table - Insert Command/Statement //8

The insert statement is used to insert or add a row of data into the table.

To insert records into a table, enter the key words insert into followed by the table name, followed by an open parenthesis, followed by a list of column names separated by commas, followed by a closing parenthesis, followed by the keyword values, followed by the list of values enclosed in parenthesis. The values that you enter will be held in the rows and they will match up with the column names that you specify. **Strings should be enclosed** in single quotes, and numbers should not.

`insert into "tablename"`
` (first_column,...last_column)`
`  values (first_value,...last_value);`
In the example below, the column name first will match up with the value 'Luke', and the column name state will match up with the value 'Georgia'.

**Example:**
`insert into employee`
`  (first, last, age, address, city, state)`
`  values ('Luke', 'Duke', 45, '2130 Boars Nest', `
`          'Hazard Co', 'Georgia');`
**Note:** All strings should be enclosed between single quotes: 'string'

&&Insert statement exercises&&
It is time to insert data into your new employee table.

Your first three employees are the following:

Jonie Weber, *Secretary*, 28, 19500.00
Potsy Weber, *Programmer*, 32, 45300.00
Dirk Smith, *Programmer II*, 45, 75020.00

Enter these employees into your table first, and then insert at least 5 more of your own list of employees in the table.

#Updating Records - Update Command/Statement //5

The update statement is used to update or change records that match a specified criteria. This is accomplished by carefully constructing a where clause.

`update "tablename"`
`set "columnname" = `
`    "newvalue"`
` [,"nextcolumn" = `
`   "newvalue2"...]`
`where "columnname" `
`  OPERATOR "value" `
` [and|or "column" `
`  OPERATOR "value"];`
[The above example was line wrapped for better viewing on course.]

**Examples:**
`update phone_book`
`  set area_code = 623`
`  where prefix = 979;`

`update phone_book`
`  set last_name = 'Smith', prefix=555, suffix=9292`
`  where last_name = 'Jones';`

`update employee`
`  set age = age+1`
`  where first_name='Mary' and last_name='Williams';`

&&Update statement exercises&&
After each update, issue a select statement to verify your changes.

#Deleting Records - Delete Command/Statement //5

The delete statement is used to delete records or rows from the table.

`delete from "tablename"`
`where "columnname" `
`  OPERATOR "value" `
`[and|or "column" `
`  OPERATOR "value"];`
[The above example was line wrapped for better viewing on this course.]

**Examples:**
`delete from employee;`
**Note:** if you leave off the where clause, all records will be deleted!

`delete from employee`
`  where lastname = 'May';`

`delete from employee`
`  where firstname = 'Mike' or firstname = 'Eric';`

To delete an entire **record/row from a table**, enter "delete from" followed by the table name, followed by the where clause which contains the conditions to delete. If you leave off the where clause, all records will be deleted.

#Droping a Table - Drop Command/Statement //3

The drop table command is used to delete a table and all rows in the table.

To delete an entire table including all of its rows, issue the drop table command followed by the tablename. drop table is different from deleting all of the records in the table.

Deleting all of the records in the table leaves the table including column and constraint information. Dropping the table removes the table definition as well as all of its rows.

`drop table "tablename"`

**Example:**
`drop table myemployees_ts0211;`
Removes the table with name myemployees_ts0211.

#Mathematical Functions in SQL //
Get the premium app for more content.

#Joining Tables - JOIN Command/Statement //
Get the premium app for more content.

#SQL Interpreters //
Get the premium app for more content.
