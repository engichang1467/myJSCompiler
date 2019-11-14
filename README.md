# My Javascript Compiler

Writing my first compiler in javascript


## Lexical Analyzer

Definition: To divide the input string (or stream of characters) of the program into smaller pieces called tokens.

Tokens: carry information about their type (if they are numbers, operators, keywords, identifiers, etc), the substring of the program they represent and their position in the program.

## Parser (or syntax analyzer)

Definition: 
* the module of a compiler which out of a list (or stream) of tokens produces an Abstract Syntax Tree (AST)
* Produce syntax errors in case of invalid programs

