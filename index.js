'use strict'

const PassThrough = require('readable-stream/passthrough')
const duplexer = require('duplexer3')
const hirestime = require('hirestime')
const parser = require('tap-parser')
const ms = require('pretty-ms')
const chalk = require('chalk')
const util = require('util')

module.exports = () => {
  const onResults = (data) => {
    const time = timer()
    const msg = `${data.count} ${data.count > 1 ? 'tests' : 'test'} complete (${ms(time)})`

    result.count = data.count
    result.errors = data.failures

    if (data.count === 0 || data.fail > 0) {
      output.end('\n' + chalk.red(msg) + '\n')
    } else {
      output.end('\n' + chalk.green(msg) + '\n')
    }
  }

  const input = parser(onResults)
  const output = new PassThrough()
  const result = duplexer(input, output)

  input.on('assert', (assert) => {
    if (assert.ok) return

    output.write('\n' + chalk.white(assert.name) + '\n')
    if (assert.diag) {
      const d = assert.diag
      output.write(chalk.gray(
        `\toperator: ${d.operator}\n` +
        `\texpected: ${util.inspect(d.expected)}\n` +
        `\tactual:   ${util.inspect(d.actual)}\n`
      ))
    }
  })

  const timer = hirestime() // todo: init when first test running

  return result
}
