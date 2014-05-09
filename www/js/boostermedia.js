/*var getUrlArgs=function()
{
	var a={};var b=window.location.search.substr(1).split("&");
	for(var c=0;c<b.length;++c)
	{
	var d=b[c].split("=");
	a[unescape(d[0])]=d.length>1?unescape(d[1]):null
	}
	return a
};*/
var goToMoreGames=function(a)
{
	//var b=getUrlArgs();
	//if(b["bm.source"]){window.location="http://"+b["bm.source"]}
	BM_API.getGeneric().showMoreGames();
};
//$("body").append("<div id='global_ad_id1' style='position:fixed; left:0; bottom: 0; margin-left:0px; display:none; border:none; z-index:999'>"+"<iframe id='ad_iframe' scrolling='no'; style='display:block; overflow:hidden; width:320px;  height:50px; border:none;' src='http://banner.bmmob.com/logicking/ap_boostermedia.html'></iframe></div>");
//$("body").append("<div id='global_ad_id2' style='position:fixed; right:0; top: 0; margin-left:0px; display:none; border:none; z-index:999'>"+"<iframe id='ad_iframe' scrolling='no'; style='display:block; overflow:hidden; width:320px;  height:50px; border:none;' src='http://banner.bmmob.com/logicking/ap_boostermedia.html'></iframe></div>");
//var ad1Timeout=null;var ad2Timeout=null;
var oldGameMenuInit=MenuState.prototype.init;
MenuState.prototype.init=function(a)
{
	oldGameMenuInit.call(this,a);
	//clearTimeout(ad1Timeout);
	//ad1Timeout=setTimeout(function(){$("#global_ad_id1").css("display","block");
	//ad1Timeout=setTimeout(function(){$("#global_ad_id1").css("display","none")},1e4)},500);
	//clearTimeout(ad2Timeout);$("#global_ad_id2").css("display","none");
	guiFactory.createGuiFromJson({moreGames:{"class":"GuiButton",params:{parent:"menuContainer",normal:{image:"FinalArt/Menu/Main/Button1.png",label:{style:"gameButton victoriana-normal",text:"More Games",fontSize:27,color:"#753424",x:"50%",y:"45%",offsetX:-56}},hover:{image:"FinalArt/Menu/Main/Button1.png",scale:115,label:{x:"50%",y:"45%",offsetX:-65}},style:"gameButton",width:219,height:82,x:525,y:340}}},this);
	var b=this.getGui("moreGames");
	//function moreGamesButtonClick()
	//{
	//_gaq.push(['bm._trackEvent',gameName,'moregames button click', gameCategory]);
	//}
	b.bind(function(a){
	//moreGamesButtonClick();
	goToMoreGames();
	})
	
	BM_API.getAd().addAdvertising(19802, 88220);
};
var oldLevelMenuState=LevelMenuState.prototype.init;
LevelMenuState.prototype.init=function(a)
{
	oldLevelMenuState.call(this,a);
	if(!REPLY){
	//clearTimeout(ad1Timeout);$("#global_ad_id1").css("display","none");
	//clearTimeout(ad2Timeout);$("#global_ad_id2").css("display","none")
	BM_API.getAd().hideAdvertising();
	BM_API.getInterface().minimizeBar();
	}
};

//var adShowCounter=2;
var oldGameState=GameState.prototype.init;
GameState.prototype.init=function(a)
{
	oldGameState.call(this,a);
	//adShowCounter++;
	//clearTimeout(ad1Timeout);$("#global_ad_id1").css("display","none");
	//$("#global_ad_id2").css("display","block");clearTimeout(ad2Timeout);
	//ad2Timeout=setTimeout(
	//function(){$("#global_ad_id2").css("display","none")},7777)
	//BM_API.getAd().addAdvertising(19802, 88220);
}

function BOOSTERMEDIA_TOGGLEPAUSE(){
	if(BM_Pause) {
		console.log("Menu Opening");
		
		}
	else {
		//window.setTimeout(function(){g.pausemode = 0}, 1000);
		console.log("Menu closing");
	}
	BM_Pause = !BM_Pause;
}