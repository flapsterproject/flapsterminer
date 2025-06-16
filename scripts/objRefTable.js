const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Behaviors.Anchor,
		C3.Plugins.Browser,
		C3.Plugins.PlatformInfo,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Browser.Cnds.OnResize,
		C3.Plugins.PlatformInfo.Cnds.IsOnWindows,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.PlatformInfo.Cnds.IsOnMacOS,
		C3.Plugins.PlatformInfo.Cnds.IsOnChromeOS,
		C3.Plugins.PlatformInfo.Cnds.IsOnLinux,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowRewarded,
		C3.Plugins.Eponesh_GameScore.Cnds.OnAdsRewardedReward,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{mining: 0},
	{Rotate: 0},
	{pick: 0},
	{mine: 0},
	{mine2: 0},
	{mine3: 0},
	{ground: 0},
	{Anchor: 0},
	{usdt_: 0},
	{Browser: 0},
	{b1: 0},
	{usdtbg: 0},
	{PlatformInfo: 0},
	{mineinfo: 0},
	{Touch: 0},
	{GamePush: 0},
	{mine_section: 0}
];

self.InstanceType = {
	mining: class extends self.ISpriteInstance {},
	pick: class extends self.ISpriteInstance {},
	mine: class extends self.ISpriteInstance {},
	mine2: class extends self.ISpriteInstance {},
	mine3: class extends self.ISpriteInstance {},
	ground: class extends self.ISpriteInstance {},
	usdt_: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	b1: class extends self.ISpriteInstance {},
	usdtbg: class extends self.ISpriteInstance {},
	PlatformInfo: class extends self.IInstance {},
	mineinfo: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	GamePush: class extends C3.Plugins.Eponesh_GameScore.Instance {}
}