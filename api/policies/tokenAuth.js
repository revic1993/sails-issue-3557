module.exports = function(req, res, next) {
  var token = "qTRK14yuhLE5s8eRjbSt";

  if(req.param('token')!==token){    
    return res.forbidden({error:true,message:"You are not allowed to access this url."});
  }
  return next();
};
