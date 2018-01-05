// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>


/*~ Write a declaration for the original type and add new members.
 *~ For example, this adds a 'toBinaryString' method with to overloads to
 *~ the built-in number type.
 */


/*~ If you need to declare several types, place them inside a namespace
 *~ to avoid adding too many things to the global namespace.
 */
declare namespace NavitiaSDKUX {
    function init(token: NavitiaSDKUXConfiguration): void;
    function invokeJourneyResults(journeyParams: any, success: () => void, error: (error: string) => void): void;
}

declare class NavitiaSDKUXConfiguration {
    token: string;
}