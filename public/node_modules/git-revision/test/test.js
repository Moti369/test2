var revision = require('../index'),
    expect = require('chai').expect;

describe('Works', function () {

  // Synchronous calls

  it('should get the short version', function () {
    expect(revision('short')).to.exist
  })

  it('should get the long version', function () {
    expect(revision('long')).to.exist
  })

  it('should get the hash', function () {
    expect(revision('hash')).to.exist
  })

  it('should get the tag', function () {
    expect(revision('tag')).to.exist
  })

  it('should get the branch', function () {
    expect(revision('branch')).to.exist
  })

  // Asynchronous calls

  it('should get the short version asynchronously', function (done) {
    revision('short', function(value) {
      expect(value).to.exist
      done()
    })
  })

  it('should get the long version asynchronously', function (done) {
    revision('long', function(value) {
      expect(value).to.exist
      done()
    })
  })

  it('should get the hash asynchronously', function (done) {
    revision('hash', function(value) {
      expect(value).to.exist
      done()
    })
  })

  it('should get the tag asynchronously', function (done) {
    revision('tag', function(value) {
      expect(value).to.exist
      done()
    })
  })

  it('should get the branch asynchronously', function (done) {
    revision('branch', function(value) {
      expect(value).to.exist
      done()
    })
  })

})