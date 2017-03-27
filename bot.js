var Irin = require("irin-lang");
var bot = new Irin("hello.irin",function(err){
  if(err){
    throw err;
  }
  console.log(bot.reply("Hôm nay thời tiết thế nào hahaa \?"));
});