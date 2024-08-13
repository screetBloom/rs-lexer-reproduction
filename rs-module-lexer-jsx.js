// @ts-check
const { join, dirname } = require('path')
const { parse } = require('rs-module-lexer')
const { readFileSync } = require('fs')

function starter(point, token) {

  const filename = 'fixtures/jsx/test.js'
  const code = readFileSync(join(__dirname, filename), 'utf-8')

  join(__dirname, 'fixtures/jsx/test.js')
  const { output } = parse({ input: [{ filename, code }] })
  const ast = output[0] || {}

  console.log('source :', ast)
}

starter()
