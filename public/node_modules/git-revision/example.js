/**
 * Examples for using git-revision
 */

var gitRevision = require('./')


// Get the current short git hash

  // Synchronously
  var shortHash = gitRevision("short")

  // Asynchronously
  gitRevision("short", function (hash) {
    var hash = hash
  })

// Get the current tag
// Note that if there is no tag,
// this will return the full hash (just as if you called gitRevision("long"))

  // Synchronously
  var tag = gitRevision("tag")

  // Asynchronously
  gitRevision("tag", function (tag) {
    var tag = tag
  })