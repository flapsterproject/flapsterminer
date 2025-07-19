

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

	async Main_Event4_Act1(runtime, localVars)
	{
		// 1. Через start_param
		const param = Telegram.WebApp.initDataUnsafe.start_param;
		if (param) {
		  runtime.globalVars.parent_candidate = param;
		} else {
		  // 2. Через ?ref=
		  const urlParams = new URLSearchParams(window.location.search);
		  const ref = urlParams.get("ref");
		  if (ref) {
		    runtime.globalVars.parent_candidate = ref;
		  }
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
