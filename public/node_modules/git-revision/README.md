# git-revision
Simple node module for git revision information

[![Circle CI](https://circleci.com/gh/daviesgeek/git-revision.svg?style=shield)](https://circleci.com/gh/daviesgeek/git-revision)
[![npm version](https://badge.fury.io/js/git-revision.svg)](https://badge.fury.io/js/git-revision)

[![NPM](https://nodei.co/npm/git-revision.png)](https://nodei.co/npm/git-revision/)

# General Info

This module provides an simple API for both synchronous and asynchronous fetching of git revision information. Note: this module requires Node 0.12 for [the `execSync` method](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)

## Methods

### `short`
  Returns the short form of a the current git hash  
  _Example_: `f1079c1`
### `long`
  Returns the short form of a the current git hash  
  _Example_: `f1079c100a1889a3c75f8de650582bd5b936594c`
### `hash`
  Alias of `long`
### `tag`
  Returns the current tag. If there is no tag, this will return the full hash (just as if you called `long`)  
  _Example_: `f1079c100a1889a3c75f8de650582bd5b936594c` or `0.0.1`

### `branch`
  Returns the current branch  
  _Example_: `master`

# Examples

```js

var gitRevision = require('git-revision')


// Get the current short git hash

  // Synchronously
  var shortHash = gitRevision("short")

  // Asynchronously
  gitRevision("short", function (hash) {
    var hash = hash
  })

// Get the current tag

  // Synchronously
  var tag = gitRevision("tag")

  // Asynchronously
  gitRevision("tag", function (tag) {
    var tag = tag
  })

```