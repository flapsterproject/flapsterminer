const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Anchor,
		C3.Plugins.Browser,
		C3.Plugins.Browser.Cnds.OnResize,
		C3.Plugins.Browser.Acts.RequestFullScreen
	];
};
self.C3_JsPropNameTable = [
	{mining: 0},
	{pick: 0},
	{mine: 0},
	{mine2: 0},
	{mine3: 0},
	{ground: 0},
	{Anchor: 0},
	{usdt_: 0},
	{Browser: 0},
	{b1: 0},
	{usdtbg: 0}
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
	usdtbg: class extends self.ISpriteInstance {}
}