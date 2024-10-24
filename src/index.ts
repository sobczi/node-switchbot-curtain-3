// import { WoCurtain } from "./device/wocurtain.js";
// import { SwitchBotBLE, SwitchbotDevice } from "./switchbot-ble.js";

/* Copyright(C) 2024, donavanbecker (https://github.com/donavanbecker). All rights reserved.
 *
 * index.ts: Switchbot BLE API registration.
 */
export * from "./advertising.js";
export * from "./device.js";
export * from "./device/woblindtilt.js";
export * from "./device/wobulb.js";
export * from "./device/woceilinglight.js";
export * from "./device/wocontact.js";
export * from "./device/wocurtain.js";
export * from "./device/wohand.js";
export * from "./device/wohub2.js";
export * from "./device/wohumi.js";
export * from "./device/woiosensorth.js";
export * from "./device/woplugmini.js";
export * from "./device/wopresence.js";
export * from "./device/wosensorth.js";
export * from "./device/wosmartlock.js";
export * from "./device/wosmartlockpro.js";
export * from "./device/wostrip.js";
export * from "./switchbot-ble.js";
export * from "./switchbot-openapi.js";
export * from "./types/bledevicestatus.js";
export * from "./types/devicelist.js";
export * from "./types/devicepush.js";
export * from "./types/deviceresponse.js";
export * from "./types/devicestatus.js";
export * from "./types/devicewebhookstatus.js";
export * from "./types/irdevicelist.js";
export * from "./types/types.js";

// const ble = new SwitchBotBLE();
// async function main() {
// 	const curtainId = "df:cb:01:94:5c:d9";
// 	const discovered: SwitchbotDevice[] = await ble.discover();

// 	const foundCurtain = discovered.find((d) => d.deviceAddress === curtainId);
// 	if (!foundCurtain) {
// 		return;
// 	}

// 	// const curtainDevice = new WoCurtain(
// 	// foundCurtain.peripheral,
// 	// foundCurtain.noble
// 	// );

// 	// console.log(curtainDevice);
// }

// main();
