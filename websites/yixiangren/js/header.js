!function(){$subMenu=$(".subli"),$menu=$(".main_nav li");var a=0;$subMenu.eq($menu.length-1).css("right",a);for(var b=$menu.length-2;b>=0;b--)a+=($menu.eq(b).innerWidth()+$menu.eq(b+1).innerWidth())/2,$subMenu.eq(b).css("right",a);for(var b=0;b<$menu.length;b++)$menu.eq(b).attr("index",b);$subMenu.bind("mouseover",function(){$(this).css("display","block")}),$menu.bind("mouseover",function(){var a=$(this).attr("index");console.log(a),$subMenu.eq(a).css("display","block")}),$subMenu.bind("mouseout",function(){$(this).css("display","none")}),$menu.bind("mouseout",function(){var a=$(this).attr("index");$subMenu.eq(a).css("display","none")})}();