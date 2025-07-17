

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

	async Main_Event4_Act4(runtime, localVars)
	{
		gp.channels.sendFeedMessage({
		   playerId: parent_candidate,
		   text: JSON.stringify({id:1}),
		   tags: ["gift"]
		});
	},

	async Referral_Event2_Act1(runtime, localVars)
	{
const playerId = runtime.globalVars.player_id;
const fullUrl = `https://t.me/FlapsterMiner_bot?startapp=${playerId}`;
const messageText = `Привет! Вступай в мою команду! Давай играть и зарабатывать вместе!`;
const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(messageText)}`;
window.open(shareUrl, "_blank");
	},

	async Referral_Event3_Act1(runtime, localVars)
	{
		const giftsQuery = {
		   playerId: gp.player.id,
		   tags: ['gift'],
		   limit: 100,
		};
		// Ищем сообщения giftsQuery с подарком и запускаем отрисовку renderGifts
		gp.channels.fetchFeedMessages(giftsQuery).then(renderGifts);
	},

	async Referral_Event4(runtime, localVars)
	{
		function renderGifts(result) {
		   // для каждого подарка
		   result.items.forEach((message) => {
		   processGift(message);
		   });
		}
	},

	async Referral_Event5(runtime, localVars)
	{
		// начисляем выбранный подарок
		async function processGift(message){
		   // парсим JSON
		   const gift = JSON.parse(message.text);
		
		   if (gift.id === 1) {
		      // начисляем игроку подарок
		      gp.player.add('referral_level1', 1);
		   } else if (gift.id === 2) {
		      // начисляем игроку подарок
		      gp.player.add('gold', 1000);
		   }
		}
		   // сохраняем данные игрока
		   await gp.player.sync();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
