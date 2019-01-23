/**
 * Simple module for git revision information
 * @author Matthew Davies <matthew@daviesgeek.com>
 * @version 0.0.2
 */

// Get the necessary process stuff
var process = require('child_process'),
    exec = process.exec,
    execSync = process.execSync


/**
 * Private function to parse the output before sending it out
 * @param  {string} output the string from stdout
 * @return {string}
 */
function parseOutput(output) {
  return output.split('\n').join('')
}

/**
 * The actual exported module
 * @param  {string}     type the type of revision information wanted
 * @param  {[Function]} cb either a callback (for async return) or nothing (for sync return)
 * @return {[string]}   if sync, return a string
 */
module.exports = function(type, cb) {

  // The actual shell command that will be run
  var command

  // Switch off the type and set the shell command
  switch(type) {

    // Short git SHA1 hash
    case 'short':
      command = 'git rev-parse --short HEAD'
      break;

    // Full git SHA1 hash
    case 'hash':
    case 'long':
      command = 'git rev-parse HEAD'
      break;

    // The current tag if there is a tag,
    //  otherwise, just returns the current hash
    case 'tag':
      command = 'git describe --always --tag --abbrev=0'
      break;

    // Current branch
    case 'branch':
      command = 'git rev-parse --abbrev-ref HEAD'
      break;

    // If the type doesn't match anything,
    //  throw a ReferenceError
    default:
      throw ReferenceError('Revision type "' + type + '" is invalid')
      break;
  }

  // If the callback is a function, run asynchronously
  if(typeof cb == 'function')
    exec(command, {cwd: __dirname}, function (err, stdout, stderr) {
      if(err)
        cb(parseOutput(stderr), err)
      else
        cb(parseOutput(stdout))
    })

  // Otherwise return the synchronous results
  else
    return parseOutput(execSync(command, {cwd: __dirname}).toString())

}