

const scriptsInEvents = {

	async Main_Event2_Act3(runtime, localVars)
	{
		const param = Telegram.WebApp.initDataUnsafe.start_param; 
		runtime.globalVars.parent_candidate = param;
	},

	async Main_Event3_Act1(runtime, localVars)
	{
const playerId = runtime.globalVars.player_id;
const fullUrl = `https://t.me/FlapsterMiner_bot?startapp=${playerId}`;
runtime.globalVars.ref_link = fullUrl;
	},

	async Referral_Event2_Act1(runtime, localVars)
	{
const playerId = runtime.globalVars.player_id;
const fullUrl = `https://t.me/FlapsterMiner_bot?startapp=${playerId}`;
const messageText = `Привет! Вступай в мою команду! Давай играть и зарабатывать вместе!`;
const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(messageText)}`;
window.open(shareUrl, "_blank");
	},

	async Loading_Event1_Act1(runtime, localVars)
	{
		(async () => {
		  if (window.Telegram && Telegram.WebApp?.requestFullscreen?.isAvailable?.()) {
		    await Telegram.WebApp.requestFullscreen();
		    console.log("Fullscreen requested");
		  } else {
		    console.log("Fullscreen not available");
		  }
		})();
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
