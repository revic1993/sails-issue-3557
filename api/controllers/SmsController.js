
module.exports = {
  send:  function(req,res,next){
    return res.ok({error:false,message:"Sms sent"});
  }

}
