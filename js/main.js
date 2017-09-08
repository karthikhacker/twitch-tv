//["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
//tkj98y07mlox0v2aymn9ru8rkil827
$(document).ready(function(){
  var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"];
  //get twitch status api call
  for(var i = 0; i < streams.length; i++ ){
     $.ajax({
       url:'https://api.twitch.tv/kraken/channels/'+streams[i]+'?client_id=tkj98y07mlox0v2aymn9ru8rkil827',
       type:'GET',
       success:function(data){
         $.getJSON('https://api.twitch.tv/kraken/streams/'+data.name+'?client_id=tkj98y07mlox0v2aymn9ru8rkil827',function(data2){
            console.log(data2);
            var name = data2._links.self.slice(37);
            if(data2.stream === null){
              $("#logo").append("<p class='placeholder'><i class='fa fa-user'></i></p>")
              $("#name").append('<p><a href="https://www.twitch.tv/'+name+'">'+name+'</a><p>');
              $("#status").append("<p class='offline'>OFFLINE</p>");
              $("#game").append("<p class='error'>&#9888</p>");
            }else{
              $("#logo").append('<p><img class="user-img" src="'+data2.stream.channel.logo+'" /></p>');
              $("#name").append('<p><a href="https://www.twitch.tv/'+name+'">'+name+'</a><p>');
              $("#status").append('<p class="online">ONLINE</p>');
              $("#game").append('<p>'+data2.stream.game+'</p>');
            }
         });
       }
     })
  }
});
