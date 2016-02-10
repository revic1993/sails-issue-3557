'use strict';

var request = require("supertest"),
    assert = require("chai").assert,
    token = "qTRK14yuhLE5s8eRjbSt";

describe("should test smscontroller",function(){
  var newSmsRequest = {};

  beforeEach(function(){
              newSmsRequest = request(sails.hooks.http.app)
             .post('/sms')
             .set('Accept','application/json')
             .set("Content-Type","application/json");
      });
  it("should forbid to access the url.",function(done){
    newSmsRequest.
      send({params:"nothing"}).
      expect(403).
      end(function(err,res){
        assert.equal(res.body.error,true);
        assert.isString(res.body.message,"message is string");
        // console.log(res.body);
        assert.isNull(err,"There was no error");
        done();
      });
  });
});
