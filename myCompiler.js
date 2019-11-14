// More info check: https://blog.mgechev.com/2017/09/16/developing-simple-interpreter-transpiler-compiler-tutorial/

// Lexical analyzer

function lex(str) {
    let Splitter = str.split(' ')
    let Mapper = Splitter.map(s => s.trim())
    let result = Mapper.filter(s => s.length)

    return result
}

/**
 * Ex.
 * input: lex('mul 3 sub 2 sum 1 3 4')
 * output: ["mul", "3", "sub", "2", "sum", "1", "3", "4"]
 * 
 */

 // Parser

 // Desc: we define the different node types that we are going to have in the AST
 const Op = Symbol('op')    // operations
 const Num = Symbol('num')  // numbers

// Desc: accepts a single argument called tokens 
function parse(tokens) {
    let c = 0

    // Desc: returns the element of tokens associated with the current value of the c local variable.
    function peek() {
        tokens[c]
    }

    // Desc: returns the element of tokens associated with the current value of the c local variable and increments c
    function consume() {
        tokens[c++]
    }

    // Desc: gets the current token (invokes peek()), parses it to a natural number and returns a new number token
    function parseNum() {
        return { val: parseInt(consume()), type: Num }
    }

    // Desc: 
    function parseOp() {
        const node = { val: consume(), type: Op, expr: [] }

        while (peek()) {
            node.expr.push(parseExpr())
        }

        return node
    }

    // Desc: - checks if the current token matches the regular expression /\d/ (i.e. is a number) and invokes parseNum if the match was successful, otherwise returns parseOp.
    function parseExpr() {
        return /\d/.test(peek()) ? parseNum() : parseOp()
    }

    return parseExpr()
}


// Transpiler

function transpile(ast){
    const opMap = {sum: '+', mul: '*', sub: '-', div:'/'}

    function transpileNode(ast) {
        if (ast.type === Num){
            return transpileNum(ast)
        } else {
            return transpileOp(ast)
        }
    }

    function transpileNum(ast) {
        return ast.val
    }

    function transpileOp(ast) {
        return `${ast.expr.map(transpileNode).join(' ' + opMap[ast.val] + ' ')}`
    }

    return transpileNode(ast)
}