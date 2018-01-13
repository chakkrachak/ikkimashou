// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>

declare module "navitia-sdk-ux" {
    export class NavitiaSDKUXApi {
        init(token: NavitiaSDKUXConfiguration): void;
        invokeJourneyResults(journeyParams: any, success: () => void, error: (error: string) => void): void;
    }

    export class NavitiaSDKUXConfiguration {
        token: string;
    }
}

