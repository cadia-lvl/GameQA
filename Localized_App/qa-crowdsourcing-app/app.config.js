export default {
	slug: "Spurningar",
	extra: {
		eas: {
			projectId: "9714a9ea-d1e4-4c09-bebf-a8399b26110c",
		},
	},
	ios: {
		supportsTablet: true,
		googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
		bundleIdentifier: "com.spurningaris.Spurningar",
		buildNumber: "1.4.3",
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#FFA800",
		},
		googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
		package: "com.spurningaris.Spurningar",
		permissions: [],
		versionCode: 24,
		config: {
			branch: {
				apiKey: "key_live_kkWb728Kh7lmtcY9KFBT9hdfwrlTN6eD",
			},
		},
	},
	version: "1.4.3",
	orientation: "portrait",
	icon: "./assets/icon.png",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#8950fc",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["*/"],
};
