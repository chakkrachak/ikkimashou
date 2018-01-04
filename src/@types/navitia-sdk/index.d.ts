// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>

declare namespace NavitiaSDK {
    function init(token: string): void;
    let calendars: CalendarsApi;
    let commercialModes: CommercialModesApi;
    let companies: CompaniesApi;
    let contributors: ContributorsApi;
    let coverage: CoverageApi;
    let datasets: DatasetsApi;
    let disruptions: DisruptionsApi;
    let geoStatus: GeoStatusApi;
    let graphicalIsochrone: GraphicalIsochroneApi;
    let heatMap: HeatMapApi;
    let journeyPatternPoints: JourneyPatternPointsApi;
    let journeyPatterns: JourneyPatternsApi;
    let journeys: JourneysApi;
    let lineGroups: LineGroupsApi;
    let lineReports: LineReportsApi;
    let lines: LinesApi;
    let networks: NetworksApi;
    let nextArrivals: NextArrivalsApi;
    let nextDepartures: NextDeparturesApi;
    let physicalModes: PhysicalModesApi;
    let places: PlacesApi;
    let placesNearby: PlacesNearbyApi;
    let poiTypes: PoiTypesApi;
    let pois: PoisApi;
    let ptobjects: PtobjectsApi;
    let routeSchedules: RouteSchedulesApi;
    let routes: RoutesApi;
    let status: StatusApi;
    let stopAreas: StopAreasApi;
    let stopPoints: StopPointsApi;
    let stopSchedules: StopSchedulesApi;
    let trafficReport: TrafficReportApi;
    let trips: TripsApi;
    let vehicleJourneys: VehicleJourneysApi;
}

declare class CalendarsApi {
    coverageRegionCalendarsRequestBuilder(): CoverageRegionCalendarsRequestBuilder;
    coverageRegionCalendarsIdRequestBuilder(): CoverageRegionCalendarsIdRequestBuilder;
    coverageRegionUriCalendarsRequestBuilder(): CoverageRegionUriCalendarsRequestBuilder;
}

declare class CommercialModesApi {
    coverageLonLatCommercialModesRequestBuilder(): CoverageLonLatCommercialModesRequestBuilder;
    coverageLonLatCommercialModesIdRequestBuilder(): CoverageLonLatCommercialModesIdRequestBuilder;
    coverageLonLatUriCommercialModesRequestBuilder(): CoverageLonLatUriCommercialModesRequestBuilder;
    coverageLonLatUriCommercialModesIdRequestBuilder(): CoverageLonLatUriCommercialModesIdRequestBuilder;
    coverageRegionCommercialModesRequestBuilder(): CoverageRegionCommercialModesRequestBuilder;
    coverageRegionCommercialModesIdRequestBuilder(): CoverageRegionCommercialModesIdRequestBuilder;
    coverageRegionUriCommercialModesRequestBuilder(): CoverageRegionUriCommercialModesRequestBuilder;
    coverageRegionUriCommercialModesIdRequestBuilder(): CoverageRegionUriCommercialModesIdRequestBuilder;
}

declare class CompaniesApi {
    coverageLonLatCompaniesRequestBuilder(): CoverageLonLatCompaniesRequestBuilder;
    coverageLonLatCompaniesIdRequestBuilder(): CoverageLonLatCompaniesIdRequestBuilder;
    coverageLonLatUriCompaniesRequestBuilder(): CoverageLonLatUriCompaniesRequestBuilder;
    coverageLonLatUriCompaniesIdRequestBuilder(): CoverageLonLatUriCompaniesIdRequestBuilder;
    coverageRegionCompaniesRequestBuilder(): CoverageRegionCompaniesRequestBuilder;
    coverageRegionCompaniesIdRequestBuilder(): CoverageRegionCompaniesIdRequestBuilder;
    coverageRegionUriCompaniesRequestBuilder(): CoverageRegionUriCompaniesRequestBuilder;
    coverageRegionUriCompaniesIdRequestBuilder(): CoverageRegionUriCompaniesIdRequestBuilder;
}

declare class ContributorsApi {
    coverageLonLatContributorsRequestBuilder(): CoverageLonLatContributorsRequestBuilder;
    coverageLonLatContributorsIdRequestBuilder(): CoverageLonLatContributorsIdRequestBuilder;
    coverageLonLatUriContributorsRequestBuilder(): CoverageLonLatUriContributorsRequestBuilder;
    coverageLonLatUriContributorsIdRequestBuilder(): CoverageLonLatUriContributorsIdRequestBuilder;
    coverageRegionContributorsRequestBuilder(): CoverageRegionContributorsRequestBuilder;
    coverageRegionContributorsIdRequestBuilder(): CoverageRegionContributorsIdRequestBuilder;
    coverageRegionUriContributorsRequestBuilder(): CoverageRegionUriContributorsRequestBuilder;
    coverageRegionUriContributorsIdRequestBuilder(): CoverageRegionUriContributorsIdRequestBuilder;
}

declare class CoverageApi {
    coverageRequestBuilder(): CoverageRequestBuilder;
    coverageLonLatRequestBuilder(): CoverageLonLatRequestBuilder;
    coverageRegionRequestBuilder(): CoverageRegionRequestBuilder;
}

declare class DatasetsApi {
    coverageLonLatDatasetsRequestBuilder(): CoverageLonLatDatasetsRequestBuilder;
    coverageLonLatDatasetsIdRequestBuilder(): CoverageLonLatDatasetsIdRequestBuilder;
    coverageLonLatUriDatasetsRequestBuilder(): CoverageLonLatUriDatasetsRequestBuilder;
    coverageLonLatUriDatasetsIdRequestBuilder(): CoverageLonLatUriDatasetsIdRequestBuilder;
    coverageRegionDatasetsRequestBuilder(): CoverageRegionDatasetsRequestBuilder;
    coverageRegionDatasetsIdRequestBuilder(): CoverageRegionDatasetsIdRequestBuilder;
    coverageRegionUriDatasetsRequestBuilder(): CoverageRegionUriDatasetsRequestBuilder;
    coverageRegionUriDatasetsIdRequestBuilder(): CoverageRegionUriDatasetsIdRequestBuilder;
}

declare class DisruptionsApi {
    coverageLonLatDisruptionsRequestBuilder(): CoverageLonLatDisruptionsRequestBuilder;
    coverageLonLatDisruptionsIdRequestBuilder(): CoverageLonLatDisruptionsIdRequestBuilder;
    coverageLonLatUriDisruptionsRequestBuilder(): CoverageLonLatUriDisruptionsRequestBuilder;
    coverageLonLatUriDisruptionsIdRequestBuilder(): CoverageLonLatUriDisruptionsIdRequestBuilder;
    coverageRegionDisruptionsRequestBuilder(): CoverageRegionDisruptionsRequestBuilder;
    coverageRegionDisruptionsIdRequestBuilder(): CoverageRegionDisruptionsIdRequestBuilder;
    coverageRegionUriDisruptionsRequestBuilder(): CoverageRegionUriDisruptionsRequestBuilder;
    coverageRegionUriDisruptionsIdRequestBuilder(): CoverageRegionUriDisruptionsIdRequestBuilder;
}

declare class GeoStatusApi {
    coverageRegionGeoStatusRequestBuilder(): CoverageRegionGeoStatusRequestBuilder;
}

declare class GraphicalIsochroneApi {
    coverageRegionIsochronesRequestBuilder(): CoverageRegionIsochronesRequestBuilder;
}

declare class HeatMapApi {
    coverageRegionHeatMapsRequestBuilder(): CoverageRegionHeatMapsRequestBuilder;
}

declare class JourneyPatternPointsApi {
    coverageLonLatJourneyPatternPointsRequestBuilder(): CoverageLonLatJourneyPatternPointsRequestBuilder;
    coverageLonLatJourneyPatternPointsIdRequestBuilder(): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    coverageLonLatUriJourneyPatternPointsRequestBuilder(): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    coverageLonLatUriJourneyPatternPointsIdRequestBuilder(): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    coverageRegionJourneyPatternPointsRequestBuilder(): CoverageRegionJourneyPatternPointsRequestBuilder;
    coverageRegionJourneyPatternPointsIdRequestBuilder(): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    coverageRegionUriJourneyPatternPointsRequestBuilder(): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    coverageRegionUriJourneyPatternPointsIdRequestBuilder(): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
}

declare class JourneyPatternsApi {
    coverageLonLatJourneyPatternsRequestBuilder(): CoverageLonLatJourneyPatternsRequestBuilder;
    coverageLonLatJourneyPatternsIdRequestBuilder(): CoverageLonLatJourneyPatternsIdRequestBuilder;
    coverageLonLatUriJourneyPatternsRequestBuilder(): CoverageLonLatUriJourneyPatternsRequestBuilder;
    coverageLonLatUriJourneyPatternsIdRequestBuilder(): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    coverageRegionJourneyPatternsRequestBuilder(): CoverageRegionJourneyPatternsRequestBuilder;
    coverageRegionJourneyPatternsIdRequestBuilder(): CoverageRegionJourneyPatternsIdRequestBuilder;
    coverageRegionUriJourneyPatternsRequestBuilder(): CoverageRegionUriJourneyPatternsRequestBuilder;
    coverageRegionUriJourneyPatternsIdRequestBuilder(): CoverageRegionUriJourneyPatternsIdRequestBuilder;
}

declare class JourneysApi {
    coverageLonLatJourneysRequestBuilder(): CoverageLonLatJourneysRequestBuilder;
    coverageRegionJourneysRequestBuilder(): CoverageRegionJourneysRequestBuilder;
    journeysRequestBuilder(): JourneysRequestBuilder;
}

declare class LineGroupsApi {
    coverageLonLatLineGroupsRequestBuilder(): CoverageLonLatLineGroupsRequestBuilder;
    coverageLonLatLineGroupsIdRequestBuilder(): CoverageLonLatLineGroupsIdRequestBuilder;
    coverageLonLatUriLineGroupsRequestBuilder(): CoverageLonLatUriLineGroupsRequestBuilder;
    coverageLonLatUriLineGroupsIdRequestBuilder(): CoverageLonLatUriLineGroupsIdRequestBuilder;
    coverageRegionLineGroupsRequestBuilder(): CoverageRegionLineGroupsRequestBuilder;
    coverageRegionLineGroupsIdRequestBuilder(): CoverageRegionLineGroupsIdRequestBuilder;
    coverageRegionUriLineGroupsRequestBuilder(): CoverageRegionUriLineGroupsRequestBuilder;
    coverageRegionUriLineGroupsIdRequestBuilder(): CoverageRegionUriLineGroupsIdRequestBuilder;
    lineGroupsRequestBuilder(): LineGroupsRequestBuilder;
}

declare class LineReportsApi {
    coverageRegionLineReportsRequestBuilder(): CoverageRegionLineReportsRequestBuilder;
    coverageRegionUriLineReportsRequestBuilder(): CoverageRegionUriLineReportsRequestBuilder;
}

declare class LinesApi {
    coverageLonLatLinesRequestBuilder(): CoverageLonLatLinesRequestBuilder;
    coverageLonLatLinesIdRequestBuilder(): CoverageLonLatLinesIdRequestBuilder;
    coverageLonLatUriLinesRequestBuilder(): CoverageLonLatUriLinesRequestBuilder;
    coverageLonLatUriLinesIdRequestBuilder(): CoverageLonLatUriLinesIdRequestBuilder;
    coverageRegionLinesRequestBuilder(): CoverageRegionLinesRequestBuilder;
    coverageRegionLinesIdRequestBuilder(): CoverageRegionLinesIdRequestBuilder;
    coverageRegionUriLinesRequestBuilder(): CoverageRegionUriLinesRequestBuilder;
    coverageRegionUriLinesIdRequestBuilder(): CoverageRegionUriLinesIdRequestBuilder;
    linesRequestBuilder(): LinesRequestBuilder;
}

declare class NetworksApi {
    coverageLonLatNetworksRequestBuilder(): CoverageLonLatNetworksRequestBuilder;
    coverageLonLatNetworksIdRequestBuilder(): CoverageLonLatNetworksIdRequestBuilder;
    coverageLonLatUriNetworksRequestBuilder(): CoverageLonLatUriNetworksRequestBuilder;
    coverageLonLatUriNetworksIdRequestBuilder(): CoverageLonLatUriNetworksIdRequestBuilder;
    coverageRegionNetworksRequestBuilder(): CoverageRegionNetworksRequestBuilder;
    coverageRegionNetworksIdRequestBuilder(): CoverageRegionNetworksIdRequestBuilder;
    coverageRegionUriNetworksRequestBuilder(): CoverageRegionUriNetworksRequestBuilder;
    coverageRegionUriNetworksIdRequestBuilder(): CoverageRegionUriNetworksIdRequestBuilder;
    networksRequestBuilder(): NetworksRequestBuilder;
}

declare class NextArrivalsApi {
    coverageLonLatArrivalsRequestBuilder(): CoverageLonLatArrivalsRequestBuilder;
    coverageLonLatUriArrivalsRequestBuilder(): CoverageLonLatUriArrivalsRequestBuilder;
    coverageRegionArrivalsRequestBuilder(): CoverageRegionArrivalsRequestBuilder;
    coverageRegionUriArrivalsRequestBuilder(): CoverageRegionUriArrivalsRequestBuilder;
}

declare class NextDeparturesApi {
    coverageLonLatDeparturesRequestBuilder(): CoverageLonLatDeparturesRequestBuilder;
    coverageLonLatUriDeparturesRequestBuilder(): CoverageLonLatUriDeparturesRequestBuilder;
    coverageRegionDeparturesRequestBuilder(): CoverageRegionDeparturesRequestBuilder;
    coverageRegionUriDeparturesRequestBuilder(): CoverageRegionUriDeparturesRequestBuilder;
}

declare class PhysicalModesApi {
    coverageLonLatPhysicalModesRequestBuilder(): CoverageLonLatPhysicalModesRequestBuilder;
    coverageLonLatPhysicalModesIdRequestBuilder(): CoverageLonLatPhysicalModesIdRequestBuilder;
    coverageLonLatUriPhysicalModesRequestBuilder(): CoverageLonLatUriPhysicalModesRequestBuilder;
    coverageLonLatUriPhysicalModesIdRequestBuilder(): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    coverageRegionPhysicalModesRequestBuilder(): CoverageRegionPhysicalModesRequestBuilder;
    coverageRegionPhysicalModesIdRequestBuilder(): CoverageRegionPhysicalModesIdRequestBuilder;
    coverageRegionUriPhysicalModesRequestBuilder(): CoverageRegionUriPhysicalModesRequestBuilder;
    coverageRegionUriPhysicalModesIdRequestBuilder(): CoverageRegionUriPhysicalModesIdRequestBuilder;
}

declare class PlacesApi {
    coverageLonLatPlacesRequestBuilder(): CoverageLonLatPlacesRequestBuilder;
    coverageRegionPlacesRequestBuilder(): CoverageRegionPlacesRequestBuilder;
    placesRequestBuilder(): PlacesRequestBuilder;
}

declare class PlacesNearbyApi {
    coordLonLatPlacesNearbyRequestBuilder(): CoordLonLatPlacesNearbyRequestBuilder;
    coordsLonLatPlacesNearbyRequestBuilder(): CoordsLonLatPlacesNearbyRequestBuilder;
    coverageLonLatPlacesNearbyRequestBuilder(): CoverageLonLatPlacesNearbyRequestBuilder;
    coverageLonLatUriPlacesNearbyRequestBuilder(): CoverageLonLatUriPlacesNearbyRequestBuilder;
    coverageRegionPlacesNearbyRequestBuilder(): CoverageRegionPlacesNearbyRequestBuilder;
    coverageRegionUriPlacesNearbyRequestBuilder(): CoverageRegionUriPlacesNearbyRequestBuilder;
}

declare class PoiTypesApi {
    coverageLonLatPoiTypesRequestBuilder(): CoverageLonLatPoiTypesRequestBuilder;
    coverageLonLatPoiTypesIdRequestBuilder(): CoverageLonLatPoiTypesIdRequestBuilder;
    coverageLonLatUriPoiTypesRequestBuilder(): CoverageLonLatUriPoiTypesRequestBuilder;
    coverageLonLatUriPoiTypesIdRequestBuilder(): CoverageLonLatUriPoiTypesIdRequestBuilder;
    coverageRegionPoiTypesRequestBuilder(): CoverageRegionPoiTypesRequestBuilder;
    coverageRegionPoiTypesIdRequestBuilder(): CoverageRegionPoiTypesIdRequestBuilder;
    coverageRegionUriPoiTypesRequestBuilder(): CoverageRegionUriPoiTypesRequestBuilder;
    coverageRegionUriPoiTypesIdRequestBuilder(): CoverageRegionUriPoiTypesIdRequestBuilder;
}

declare class PoisApi {
    coverageLonLatPoisRequestBuilder(): CoverageLonLatPoisRequestBuilder;
    coverageLonLatPoisIdRequestBuilder(): CoverageLonLatPoisIdRequestBuilder;
    coverageLonLatUriPoisRequestBuilder(): CoverageLonLatUriPoisRequestBuilder;
    coverageLonLatUriPoisIdRequestBuilder(): CoverageLonLatUriPoisIdRequestBuilder;
    coverageRegionPoisRequestBuilder(): CoverageRegionPoisRequestBuilder;
    coverageRegionPoisIdRequestBuilder(): CoverageRegionPoisIdRequestBuilder;
    coverageRegionUriPoisRequestBuilder(): CoverageRegionUriPoisRequestBuilder;
    coverageRegionUriPoisIdRequestBuilder(): CoverageRegionUriPoisIdRequestBuilder;
}

declare class PtobjectsApi {
    coverageLonLatPtObjectsRequestBuilder(): CoverageLonLatPtObjectsRequestBuilder;
    coverageRegionPtObjectsRequestBuilder(): CoverageRegionPtObjectsRequestBuilder;
}

declare class RouteSchedulesApi {
    coverageLonLatUriRouteSchedulesRequestBuilder(): CoverageLonLatUriRouteSchedulesRequestBuilder;
    coverageRegionUriRouteSchedulesRequestBuilder(): CoverageRegionUriRouteSchedulesRequestBuilder;
    routeSchedulesRequestBuilder(): RouteSchedulesRequestBuilder;
}

declare class RoutesApi {
    coverageLonLatRoutesRequestBuilder(): CoverageLonLatRoutesRequestBuilder;
    coverageLonLatRoutesIdRequestBuilder(): CoverageLonLatRoutesIdRequestBuilder;
    coverageLonLatUriRoutesRequestBuilder(): CoverageLonLatUriRoutesRequestBuilder;
    coverageLonLatUriRoutesIdRequestBuilder(): CoverageLonLatUriRoutesIdRequestBuilder;
    coverageRegionRoutesRequestBuilder(): CoverageRegionRoutesRequestBuilder;
    coverageRegionRoutesIdRequestBuilder(): CoverageRegionRoutesIdRequestBuilder;
    coverageRegionUriRoutesRequestBuilder(): CoverageRegionUriRoutesRequestBuilder;
    coverageRegionUriRoutesIdRequestBuilder(): CoverageRegionUriRoutesIdRequestBuilder;
    routesRequestBuilder(): RoutesRequestBuilder;
}

declare class StatusApi {
    coverageRegionStatusRequestBuilder(): CoverageRegionStatusRequestBuilder;
}

declare class StopAreasApi {
    coverageLonLatStopAreasRequestBuilder(): CoverageLonLatStopAreasRequestBuilder;
    coverageLonLatStopAreasIdRequestBuilder(): CoverageLonLatStopAreasIdRequestBuilder;
    coverageLonLatUriStopAreasRequestBuilder(): CoverageLonLatUriStopAreasRequestBuilder;
    coverageLonLatUriStopAreasIdRequestBuilder(): CoverageLonLatUriStopAreasIdRequestBuilder;
    coverageRegionStopAreasRequestBuilder(): CoverageRegionStopAreasRequestBuilder;
    coverageRegionStopAreasIdRequestBuilder(): CoverageRegionStopAreasIdRequestBuilder;
    coverageRegionUriStopAreasRequestBuilder(): CoverageRegionUriStopAreasRequestBuilder;
    coverageRegionUriStopAreasIdRequestBuilder(): CoverageRegionUriStopAreasIdRequestBuilder;
    stopAreasRequestBuilder(): StopAreasRequestBuilder;
}

declare class StopPointsApi {
    coverageLonLatStopPointsRequestBuilder(): CoverageLonLatStopPointsRequestBuilder;
    coverageLonLatStopPointsIdRequestBuilder(): CoverageLonLatStopPointsIdRequestBuilder;
    coverageLonLatUriStopPointsRequestBuilder(): CoverageLonLatUriStopPointsRequestBuilder;
    coverageLonLatUriStopPointsIdRequestBuilder(): CoverageLonLatUriStopPointsIdRequestBuilder;
    coverageRegionStopPointsRequestBuilder(): CoverageRegionStopPointsRequestBuilder;
    coverageRegionStopPointsIdRequestBuilder(): CoverageRegionStopPointsIdRequestBuilder;
    coverageRegionUriStopPointsRequestBuilder(): CoverageRegionUriStopPointsRequestBuilder;
    coverageRegionUriStopPointsIdRequestBuilder(): CoverageRegionUriStopPointsIdRequestBuilder;
    stopPointsRequestBuilder(): StopPointsRequestBuilder;
}

declare class StopSchedulesApi {
    coverageLonLatUriStopSchedulesRequestBuilder(): CoverageLonLatUriStopSchedulesRequestBuilder;
    coverageRegionUriStopSchedulesRequestBuilder(): CoverageRegionUriStopSchedulesRequestBuilder;
    stopSchedulesRequestBuilder(): StopSchedulesRequestBuilder;
}

declare class TrafficReportApi {
    coverageRegionTrafficReportsRequestBuilder(): CoverageRegionTrafficReportsRequestBuilder;
    coverageRegionUriTrafficReportsRequestBuilder(): CoverageRegionUriTrafficReportsRequestBuilder;
}

declare class TripsApi {
    coverageLonLatTripsRequestBuilder(): CoverageLonLatTripsRequestBuilder;
    coverageLonLatTripsIdRequestBuilder(): CoverageLonLatTripsIdRequestBuilder;
    coverageLonLatUriTripsRequestBuilder(): CoverageLonLatUriTripsRequestBuilder;
    coverageLonLatUriTripsIdRequestBuilder(): CoverageLonLatUriTripsIdRequestBuilder;
    coverageRegionTripsRequestBuilder(): CoverageRegionTripsRequestBuilder;
    coverageRegionTripsIdRequestBuilder(): CoverageRegionTripsIdRequestBuilder;
    coverageRegionUriTripsRequestBuilder(): CoverageRegionUriTripsRequestBuilder;
    coverageRegionUriTripsIdRequestBuilder(): CoverageRegionUriTripsIdRequestBuilder;
}

declare class VehicleJourneysApi {
    coverageLonLatUriVehicleJourneysRequestBuilder(): CoverageLonLatUriVehicleJourneysRequestBuilder;
    coverageLonLatUriVehicleJourneysIdRequestBuilder(): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    coverageLonLatVehicleJourneysRequestBuilder(): CoverageLonLatVehicleJourneysRequestBuilder;
    coverageLonLatVehicleJourneysIdRequestBuilder(): CoverageLonLatVehicleJourneysIdRequestBuilder;
    coverageRegionUriVehicleJourneysRequestBuilder(): CoverageRegionUriVehicleJourneysRequestBuilder;
    coverageRegionUriVehicleJourneysIdRequestBuilder(): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    coverageRegionVehicleJourneysRequestBuilder(): CoverageRegionVehicleJourneysRequestBuilder;
    coverageRegionVehicleJourneysIdRequestBuilder(): CoverageRegionVehicleJourneysIdRequestBuilder;
    vehicleJourneysRequestBuilder(): VehicleJourneysRequestBuilder;
}

declare class CoverageRegionCalendarsRequestBuilder {
    withRegion(region: string): CoverageRegionCalendarsRequestBuilder;
    withDepth(depth: number): CoverageRegionCalendarsRequestBuilder;
    withCount(count: number): CoverageRegionCalendarsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCalendarsRequestBuilder;
    withStartDate(startDate: string): CoverageRegionCalendarsRequestBuilder;
    withEndDate(endDate: string): CoverageRegionCalendarsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCalendarsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCalendarsRequestBuilder;
    withDistance(distance: number): CoverageRegionCalendarsRequestBuilder;
    get(success: (response: Calendars) => void, error: (error: string) => void): void;
}

declare class CoverageRegionCalendarsIdRequestBuilder {
    withRegion(region: string): CoverageRegionCalendarsIdRequestBuilder;
    withId(id: string): CoverageRegionCalendarsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionCalendarsIdRequestBuilder;
    withCount(count: number): CoverageRegionCalendarsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCalendarsIdRequestBuilder;
    withStartDate(startDate: string): CoverageRegionCalendarsIdRequestBuilder;
    withEndDate(endDate: string): CoverageRegionCalendarsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCalendarsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCalendarsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionCalendarsIdRequestBuilder;
    get(success: (response: Calendars) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriCalendarsRequestBuilder {
    withRegion(region: string): CoverageRegionUriCalendarsRequestBuilder;
    withUri(uri: string): CoverageRegionUriCalendarsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriCalendarsRequestBuilder;
    withCount(count: number): CoverageRegionUriCalendarsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriCalendarsRequestBuilder;
    withStartDate(startDate: string): CoverageRegionUriCalendarsRequestBuilder;
    withEndDate(endDate: string): CoverageRegionUriCalendarsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCalendarsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCalendarsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriCalendarsRequestBuilder;
    get(success: (response: Calendars) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatCommercialModesRequestBuilder {
    withLat(lat: number): CoverageLonLatCommercialModesRequestBuilder;
    withLon(lon: number): CoverageLonLatCommercialModesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatCommercialModesRequestBuilder;
    withCount(count: number): CoverageLonLatCommercialModesRequestBuilder;
    withDepth(depth: number): CoverageLonLatCommercialModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCommercialModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCommercialModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatCommercialModesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatCommercialModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatCommercialModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatCommercialModesRequestBuilder;
    withDistance(distance: number): CoverageLonLatCommercialModesRequestBuilder;
    withSince(since: string): CoverageLonLatCommercialModesRequestBuilder;
    withUntil(until: string): CoverageLonLatCommercialModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatCommercialModesRequestBuilder;
    withFilter(filter: string): CoverageLonLatCommercialModesRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatCommercialModesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withId(id: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withCount(count: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCommercialModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCommercialModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatCommercialModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatCommercialModesIdRequestBuilder;
    withSince(since: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatCommercialModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatCommercialModesIdRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriCommercialModesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withCount(count: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCommercialModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCommercialModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriCommercialModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriCommercialModesRequestBuilder;
    withSince(since: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriCommercialModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCommercialModesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriCommercialModesRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriCommercialModesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriCommercialModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCommercialModesIdRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionCommercialModesRequestBuilder {
    withRegion(region: string): CoverageRegionCommercialModesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCommercialModesRequestBuilder;
    withCount(count: number): CoverageRegionCommercialModesRequestBuilder;
    withDepth(depth: number): CoverageRegionCommercialModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCommercialModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCommercialModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionCommercialModesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionCommercialModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionCommercialModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionCommercialModesRequestBuilder;
    withDistance(distance: number): CoverageRegionCommercialModesRequestBuilder;
    withSince(since: string): CoverageRegionCommercialModesRequestBuilder;
    withUntil(until: string): CoverageRegionCommercialModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionCommercialModesRequestBuilder;
    withFilter(filter: string): CoverageRegionCommercialModesRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionCommercialModesIdRequestBuilder {
    withRegion(region: string): CoverageRegionCommercialModesIdRequestBuilder;
    withId(id: string): CoverageRegionCommercialModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCommercialModesIdRequestBuilder;
    withCount(count: number): CoverageRegionCommercialModesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionCommercialModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCommercialModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCommercialModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionCommercialModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionCommercialModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionCommercialModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionCommercialModesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionCommercialModesIdRequestBuilder;
    withSince(since: string): CoverageRegionCommercialModesIdRequestBuilder;
    withUntil(until: string): CoverageRegionCommercialModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionCommercialModesIdRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriCommercialModesRequestBuilder {
    withRegion(region: string): CoverageRegionUriCommercialModesRequestBuilder;
    withUri(uri: string): CoverageRegionUriCommercialModesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriCommercialModesRequestBuilder;
    withCount(count: number): CoverageRegionUriCommercialModesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriCommercialModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCommercialModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCommercialModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriCommercialModesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriCommercialModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriCommercialModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriCommercialModesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriCommercialModesRequestBuilder;
    withSince(since: string): CoverageRegionUriCommercialModesRequestBuilder;
    withUntil(until: string): CoverageRegionUriCommercialModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCommercialModesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriCommercialModesRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriCommercialModesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withId(id: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriCommercialModesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriCommercialModesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriCommercialModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCommercialModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCommercialModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriCommercialModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriCommercialModesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriCommercialModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCommercialModesIdRequestBuilder;
    get(success: (response: CommercialModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatCompaniesRequestBuilder {
    withLat(lat: number): CoverageLonLatCompaniesRequestBuilder;
    withLon(lon: number): CoverageLonLatCompaniesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatCompaniesRequestBuilder;
    withCount(count: number): CoverageLonLatCompaniesRequestBuilder;
    withDepth(depth: number): CoverageLonLatCompaniesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCompaniesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCompaniesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatCompaniesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatCompaniesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatCompaniesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatCompaniesRequestBuilder;
    withDistance(distance: number): CoverageLonLatCompaniesRequestBuilder;
    withSince(since: string): CoverageLonLatCompaniesRequestBuilder;
    withUntil(until: string): CoverageLonLatCompaniesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatCompaniesRequestBuilder;
    withFilter(filter: string): CoverageLonLatCompaniesRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatCompaniesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatCompaniesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatCompaniesIdRequestBuilder;
    withId(id: string): CoverageLonLatCompaniesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatCompaniesIdRequestBuilder;
    withCount(count: number): CoverageLonLatCompaniesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatCompaniesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCompaniesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCompaniesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatCompaniesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatCompaniesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatCompaniesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatCompaniesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatCompaniesIdRequestBuilder;
    withSince(since: string): CoverageLonLatCompaniesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatCompaniesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatCompaniesIdRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriCompaniesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriCompaniesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriCompaniesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriCompaniesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriCompaniesRequestBuilder;
    withCount(count: number): CoverageLonLatUriCompaniesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriCompaniesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCompaniesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCompaniesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriCompaniesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriCompaniesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriCompaniesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriCompaniesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriCompaniesRequestBuilder;
    withSince(since: string): CoverageLonLatUriCompaniesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriCompaniesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCompaniesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriCompaniesRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriCompaniesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCompaniesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCompaniesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriCompaniesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriCompaniesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriCompaniesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCompaniesIdRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageRegionCompaniesRequestBuilder {
    withRegion(region: string): CoverageRegionCompaniesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCompaniesRequestBuilder;
    withCount(count: number): CoverageRegionCompaniesRequestBuilder;
    withDepth(depth: number): CoverageRegionCompaniesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCompaniesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCompaniesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionCompaniesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionCompaniesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionCompaniesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionCompaniesRequestBuilder;
    withDistance(distance: number): CoverageRegionCompaniesRequestBuilder;
    withSince(since: string): CoverageRegionCompaniesRequestBuilder;
    withUntil(until: string): CoverageRegionCompaniesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionCompaniesRequestBuilder;
    withFilter(filter: string): CoverageRegionCompaniesRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageRegionCompaniesIdRequestBuilder {
    withRegion(region: string): CoverageRegionCompaniesIdRequestBuilder;
    withId(id: string): CoverageRegionCompaniesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionCompaniesIdRequestBuilder;
    withCount(count: number): CoverageRegionCompaniesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionCompaniesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionCompaniesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCompaniesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionCompaniesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionCompaniesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionCompaniesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionCompaniesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionCompaniesIdRequestBuilder;
    withSince(since: string): CoverageRegionCompaniesIdRequestBuilder;
    withUntil(until: string): CoverageRegionCompaniesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionCompaniesIdRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriCompaniesRequestBuilder {
    withRegion(region: string): CoverageRegionUriCompaniesRequestBuilder;
    withUri(uri: string): CoverageRegionUriCompaniesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriCompaniesRequestBuilder;
    withCount(count: number): CoverageRegionUriCompaniesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriCompaniesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCompaniesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCompaniesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriCompaniesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriCompaniesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriCompaniesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriCompaniesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriCompaniesRequestBuilder;
    withSince(since: string): CoverageRegionUriCompaniesRequestBuilder;
    withUntil(until: string): CoverageRegionUriCompaniesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCompaniesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriCompaniesRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriCompaniesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withId(id: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriCompaniesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriCompaniesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriCompaniesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCompaniesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCompaniesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriCompaniesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriCompaniesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriCompaniesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCompaniesIdRequestBuilder;
    get(success: (response: Companies) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatContributorsRequestBuilder {
    withLat(lat: number): CoverageLonLatContributorsRequestBuilder;
    withLon(lon: number): CoverageLonLatContributorsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatContributorsRequestBuilder;
    withCount(count: number): CoverageLonLatContributorsRequestBuilder;
    withDepth(depth: number): CoverageLonLatContributorsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatContributorsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatContributorsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatContributorsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatContributorsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatContributorsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatContributorsRequestBuilder;
    withDistance(distance: number): CoverageLonLatContributorsRequestBuilder;
    withSince(since: string): CoverageLonLatContributorsRequestBuilder;
    withUntil(until: string): CoverageLonLatContributorsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatContributorsRequestBuilder;
    withFilter(filter: string): CoverageLonLatContributorsRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatContributorsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatContributorsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatContributorsIdRequestBuilder;
    withId(id: string): CoverageLonLatContributorsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatContributorsIdRequestBuilder;
    withCount(count: number): CoverageLonLatContributorsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatContributorsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatContributorsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatContributorsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatContributorsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatContributorsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatContributorsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatContributorsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatContributorsIdRequestBuilder;
    withSince(since: string): CoverageLonLatContributorsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatContributorsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatContributorsIdRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriContributorsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriContributorsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriContributorsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriContributorsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriContributorsRequestBuilder;
    withCount(count: number): CoverageLonLatUriContributorsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriContributorsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriContributorsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriContributorsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriContributorsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriContributorsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriContributorsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriContributorsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriContributorsRequestBuilder;
    withSince(since: string): CoverageLonLatUriContributorsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriContributorsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriContributorsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriContributorsRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriContributorsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriContributorsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriContributorsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriContributorsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriContributorsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriContributorsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriContributorsIdRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageRegionContributorsRequestBuilder {
    withRegion(region: string): CoverageRegionContributorsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionContributorsRequestBuilder;
    withCount(count: number): CoverageRegionContributorsRequestBuilder;
    withDepth(depth: number): CoverageRegionContributorsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionContributorsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionContributorsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionContributorsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionContributorsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionContributorsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionContributorsRequestBuilder;
    withDistance(distance: number): CoverageRegionContributorsRequestBuilder;
    withSince(since: string): CoverageRegionContributorsRequestBuilder;
    withUntil(until: string): CoverageRegionContributorsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionContributorsRequestBuilder;
    withFilter(filter: string): CoverageRegionContributorsRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageRegionContributorsIdRequestBuilder {
    withRegion(region: string): CoverageRegionContributorsIdRequestBuilder;
    withId(id: string): CoverageRegionContributorsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionContributorsIdRequestBuilder;
    withCount(count: number): CoverageRegionContributorsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionContributorsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionContributorsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionContributorsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionContributorsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionContributorsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionContributorsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionContributorsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionContributorsIdRequestBuilder;
    withSince(since: string): CoverageRegionContributorsIdRequestBuilder;
    withUntil(until: string): CoverageRegionContributorsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionContributorsIdRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriContributorsRequestBuilder {
    withRegion(region: string): CoverageRegionUriContributorsRequestBuilder;
    withUri(uri: string): CoverageRegionUriContributorsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriContributorsRequestBuilder;
    withCount(count: number): CoverageRegionUriContributorsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriContributorsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriContributorsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriContributorsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriContributorsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriContributorsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriContributorsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriContributorsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriContributorsRequestBuilder;
    withSince(since: string): CoverageRegionUriContributorsRequestBuilder;
    withUntil(until: string): CoverageRegionUriContributorsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriContributorsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriContributorsRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriContributorsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriContributorsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriContributorsIdRequestBuilder;
    withId(id: string): CoverageRegionUriContributorsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriContributorsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriContributorsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriContributorsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriContributorsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriContributorsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriContributorsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriContributorsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriContributorsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriContributorsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriContributorsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriContributorsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriContributorsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriContributorsIdRequestBuilder;
    get(success: (response: Contributors) => void, error: (error: string) => void): void;
}

declare class CoverageRequestBuilder {
    withDisableGeojson(disableGeojson: boolean): CoverageRequestBuilder;
    get(success: (response: Coverages) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatRequestBuilder {
    withLat(lat: number): CoverageLonLatRequestBuilder;
    withLon(lon: number): CoverageLonLatRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatRequestBuilder;
    get(success: (response: Coverages) => void, error: (error: string) => void): void;
}

declare class CoverageRegionRequestBuilder {
    withRegion(region: string): CoverageRegionRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionRequestBuilder;
    get(success: (response: Coverages) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatDatasetsRequestBuilder {
    withLat(lat: number): CoverageLonLatDatasetsRequestBuilder;
    withLon(lon: number): CoverageLonLatDatasetsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatDatasetsRequestBuilder;
    withCount(count: number): CoverageLonLatDatasetsRequestBuilder;
    withDepth(depth: number): CoverageLonLatDatasetsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDatasetsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDatasetsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatDatasetsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatDatasetsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatDatasetsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatDatasetsRequestBuilder;
    withDistance(distance: number): CoverageLonLatDatasetsRequestBuilder;
    withSince(since: string): CoverageLonLatDatasetsRequestBuilder;
    withUntil(until: string): CoverageLonLatDatasetsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatDatasetsRequestBuilder;
    withFilter(filter: string): CoverageLonLatDatasetsRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatDatasetsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatDatasetsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatDatasetsIdRequestBuilder;
    withId(id: string): CoverageLonLatDatasetsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatDatasetsIdRequestBuilder;
    withCount(count: number): CoverageLonLatDatasetsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatDatasetsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDatasetsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDatasetsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatDatasetsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatDatasetsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatDatasetsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatDatasetsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatDatasetsIdRequestBuilder;
    withSince(since: string): CoverageLonLatDatasetsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatDatasetsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatDatasetsIdRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriDatasetsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriDatasetsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriDatasetsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriDatasetsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriDatasetsRequestBuilder;
    withCount(count: number): CoverageLonLatUriDatasetsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriDatasetsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDatasetsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDatasetsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriDatasetsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriDatasetsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriDatasetsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriDatasetsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriDatasetsRequestBuilder;
    withSince(since: string): CoverageLonLatUriDatasetsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriDatasetsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDatasetsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriDatasetsRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriDatasetsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDatasetsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDatasetsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriDatasetsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriDatasetsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriDatasetsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDatasetsIdRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageRegionDatasetsRequestBuilder {
    withRegion(region: string): CoverageRegionDatasetsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionDatasetsRequestBuilder;
    withCount(count: number): CoverageRegionDatasetsRequestBuilder;
    withDepth(depth: number): CoverageRegionDatasetsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionDatasetsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDatasetsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionDatasetsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionDatasetsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionDatasetsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionDatasetsRequestBuilder;
    withDistance(distance: number): CoverageRegionDatasetsRequestBuilder;
    withSince(since: string): CoverageRegionDatasetsRequestBuilder;
    withUntil(until: string): CoverageRegionDatasetsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionDatasetsRequestBuilder;
    withFilter(filter: string): CoverageRegionDatasetsRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageRegionDatasetsIdRequestBuilder {
    withRegion(region: string): CoverageRegionDatasetsIdRequestBuilder;
    withId(id: string): CoverageRegionDatasetsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionDatasetsIdRequestBuilder;
    withCount(count: number): CoverageRegionDatasetsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionDatasetsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionDatasetsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDatasetsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionDatasetsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionDatasetsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionDatasetsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionDatasetsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionDatasetsIdRequestBuilder;
    withSince(since: string): CoverageRegionDatasetsIdRequestBuilder;
    withUntil(until: string): CoverageRegionDatasetsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionDatasetsIdRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriDatasetsRequestBuilder {
    withRegion(region: string): CoverageRegionUriDatasetsRequestBuilder;
    withUri(uri: string): CoverageRegionUriDatasetsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriDatasetsRequestBuilder;
    withCount(count: number): CoverageRegionUriDatasetsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriDatasetsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDatasetsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDatasetsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriDatasetsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriDatasetsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriDatasetsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriDatasetsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriDatasetsRequestBuilder;
    withSince(since: string): CoverageRegionUriDatasetsRequestBuilder;
    withUntil(until: string): CoverageRegionUriDatasetsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDatasetsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriDatasetsRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriDatasetsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withId(id: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriDatasetsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriDatasetsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriDatasetsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDatasetsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDatasetsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriDatasetsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriDatasetsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriDatasetsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDatasetsIdRequestBuilder;
    get(success: (response: Datasets) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatDisruptionsRequestBuilder {
    withLat(lat: number): CoverageLonLatDisruptionsRequestBuilder;
    withLon(lon: number): CoverageLonLatDisruptionsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatDisruptionsRequestBuilder;
    withCount(count: number): CoverageLonLatDisruptionsRequestBuilder;
    withDepth(depth: number): CoverageLonLatDisruptionsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDisruptionsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDisruptionsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatDisruptionsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatDisruptionsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatDisruptionsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatDisruptionsRequestBuilder;
    withDistance(distance: number): CoverageLonLatDisruptionsRequestBuilder;
    withSince(since: string): CoverageLonLatDisruptionsRequestBuilder;
    withUntil(until: string): CoverageLonLatDisruptionsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatDisruptionsRequestBuilder;
    withFilter(filter: string): CoverageLonLatDisruptionsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatDisruptionsRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatDisruptionsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withId(id: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withCount(count: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDisruptionsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDisruptionsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatDisruptionsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatDisruptionsIdRequestBuilder;
    withSince(since: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatDisruptionsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatDisruptionsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatDisruptionsIdRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriDisruptionsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withCount(count: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDisruptionsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDisruptionsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriDisruptionsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriDisruptionsRequestBuilder;
    withSince(since: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDisruptionsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriDisruptionsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriDisruptionsRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriDisruptionsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDisruptionsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriDisruptionsIdRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageRegionDisruptionsRequestBuilder {
    withRegion(region: string): CoverageRegionDisruptionsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionDisruptionsRequestBuilder;
    withCount(count: number): CoverageRegionDisruptionsRequestBuilder;
    withDepth(depth: number): CoverageRegionDisruptionsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionDisruptionsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDisruptionsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionDisruptionsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionDisruptionsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionDisruptionsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionDisruptionsRequestBuilder;
    withDistance(distance: number): CoverageRegionDisruptionsRequestBuilder;
    withSince(since: string): CoverageRegionDisruptionsRequestBuilder;
    withUntil(until: string): CoverageRegionDisruptionsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionDisruptionsRequestBuilder;
    withFilter(filter: string): CoverageRegionDisruptionsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionDisruptionsRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageRegionDisruptionsIdRequestBuilder {
    withRegion(region: string): CoverageRegionDisruptionsIdRequestBuilder;
    withId(id: string): CoverageRegionDisruptionsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionDisruptionsIdRequestBuilder;
    withCount(count: number): CoverageRegionDisruptionsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionDisruptionsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionDisruptionsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDisruptionsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionDisruptionsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionDisruptionsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionDisruptionsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionDisruptionsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionDisruptionsIdRequestBuilder;
    withSince(since: string): CoverageRegionDisruptionsIdRequestBuilder;
    withUntil(until: string): CoverageRegionDisruptionsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionDisruptionsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionDisruptionsIdRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriDisruptionsRequestBuilder {
    withRegion(region: string): CoverageRegionUriDisruptionsRequestBuilder;
    withUri(uri: string): CoverageRegionUriDisruptionsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriDisruptionsRequestBuilder;
    withCount(count: number): CoverageRegionUriDisruptionsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriDisruptionsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDisruptionsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDisruptionsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriDisruptionsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriDisruptionsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriDisruptionsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriDisruptionsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriDisruptionsRequestBuilder;
    withSince(since: string): CoverageRegionUriDisruptionsRequestBuilder;
    withUntil(until: string): CoverageRegionUriDisruptionsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDisruptionsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriDisruptionsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriDisruptionsRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriDisruptionsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withId(id: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriDisruptionsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriDisruptionsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriDisruptionsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDisruptionsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDisruptionsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriDisruptionsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriDisruptionsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDisruptionsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriDisruptionsIdRequestBuilder;
    get(success: (response: Disruptions) => void, error: (error: string) => void): void;
}

declare class CoverageRegionGeoStatusRequestBuilder {
    withRegion(region: string): CoverageRegionGeoStatusRequestBuilder;
    get(success: (response: GeoStatus_1) => void, error: (error: string) => void): void;
}

declare class CoverageRegionIsochronesRequestBuilder {
    withRegion(region: string): CoverageRegionIsochronesRequestBuilder;
    withFrom(from: string): CoverageRegionIsochronesRequestBuilder;
    withTo(to: string): CoverageRegionIsochronesRequestBuilder;
    withDatetime(datetime: string): CoverageRegionIsochronesRequestBuilder;
    withDatetimeRepresents(datetimeRepresents: string): CoverageRegionIsochronesRequestBuilder;
    withMaxNbTransfers(maxNbTransfers: number): CoverageRegionIsochronesRequestBuilder;
    withMinNbTransfers(minNbTransfers: number): CoverageRegionIsochronesRequestBuilder;
    withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionIsochronesRequestBuilder;
    withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionIsochronesRequestBuilder;
    withMaxDurationToPt(maxDurationToPt: number): CoverageRegionIsochronesRequestBuilder;
    withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionIsochronesRequestBuilder;
    withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionIsochronesRequestBuilder;
    withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionIsochronesRequestBuilder;
    withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionIsochronesRequestBuilder;
    withWalkingSpeed(walkingSpeed: number): CoverageRegionIsochronesRequestBuilder;
    withBikeSpeed(bikeSpeed: number): CoverageRegionIsochronesRequestBuilder;
    withBssSpeed(bssSpeed: number): CoverageRegionIsochronesRequestBuilder;
    withCarSpeed(carSpeed: number): CoverageRegionIsochronesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionIsochronesRequestBuilder;
    withAllowedId(allowedId: Array<string>): CoverageRegionIsochronesRequestBuilder;
    withDisruptionActive(disruptionActive: boolean): CoverageRegionIsochronesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionIsochronesRequestBuilder;
    withMaxDuration(maxDuration: number): CoverageRegionIsochronesRequestBuilder;
    withWheelchair(wheelchair: boolean): CoverageRegionIsochronesRequestBuilder;
    withTravelerType(travelerType: string): CoverageRegionIsochronesRequestBuilder;
    withDirectPath(directPath: string): CoverageRegionIsochronesRequestBuilder;
    withMinDuration(minDuration: number): CoverageRegionIsochronesRequestBuilder;
    withBoundaryDuration(boundaryDuration: Array<number>): CoverageRegionIsochronesRequestBuilder;
    get(success: (response: GraphicalIsrochone_1) => void, error: (error: string) => void): void;
}

declare class CoverageRegionHeatMapsRequestBuilder {
    withRegion(region: string): CoverageRegionHeatMapsRequestBuilder;
    withFrom(from: string): CoverageRegionHeatMapsRequestBuilder;
    withTo(to: string): CoverageRegionHeatMapsRequestBuilder;
    withDatetime(datetime: string): CoverageRegionHeatMapsRequestBuilder;
    withDatetimeRepresents(datetimeRepresents: string): CoverageRegionHeatMapsRequestBuilder;
    withMaxNbTransfers(maxNbTransfers: number): CoverageRegionHeatMapsRequestBuilder;
    withMinNbTransfers(minNbTransfers: number): CoverageRegionHeatMapsRequestBuilder;
    withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionHeatMapsRequestBuilder;
    withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionHeatMapsRequestBuilder;
    withMaxDurationToPt(maxDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;
    withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;
    withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;
    withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;
    withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;
    withWalkingSpeed(walkingSpeed: number): CoverageRegionHeatMapsRequestBuilder;
    withBikeSpeed(bikeSpeed: number): CoverageRegionHeatMapsRequestBuilder;
    withBssSpeed(bssSpeed: number): CoverageRegionHeatMapsRequestBuilder;
    withCarSpeed(carSpeed: number): CoverageRegionHeatMapsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionHeatMapsRequestBuilder;
    withAllowedId(allowedId: Array<string>): CoverageRegionHeatMapsRequestBuilder;
    withDisruptionActive(disruptionActive: boolean): CoverageRegionHeatMapsRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionHeatMapsRequestBuilder;
    withMaxDuration(maxDuration: number): CoverageRegionHeatMapsRequestBuilder;
    withWheelchair(wheelchair: boolean): CoverageRegionHeatMapsRequestBuilder;
    withTravelerType(travelerType: string): CoverageRegionHeatMapsRequestBuilder;
    withDirectPath(directPath: string): CoverageRegionHeatMapsRequestBuilder;
    withResolution(resolution: number): CoverageRegionHeatMapsRequestBuilder;
    get(success: (response: HeatMap_1) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatJourneyPatternPointsRequestBuilder {
    withLat(lat: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withLon(lon: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withCount(count: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withDepth(depth: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withDistance(distance: number): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withSince(since: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withUntil(until: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternPointsRequestBuilder;
    withFilter(filter: string): CoverageLonLatJourneyPatternPointsRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatJourneyPatternPointsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withId(id: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withCount(count: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withSince(since: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriJourneyPatternPointsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withCount(count: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withSince(since: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriJourneyPatternPointsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionJourneyPatternPointsRequestBuilder {
    withRegion(region: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionJourneyPatternPointsRequestBuilder;
    withCount(count: number): CoverageRegionJourneyPatternPointsRequestBuilder;
    withDepth(depth: number): CoverageRegionJourneyPatternPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withDistance(distance: number): CoverageRegionJourneyPatternPointsRequestBuilder;
    withSince(since: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withUntil(until: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternPointsRequestBuilder;
    withFilter(filter: string): CoverageRegionJourneyPatternPointsRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionJourneyPatternPointsIdRequestBuilder {
    withRegion(region: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withId(id: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withCount(count: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withSince(since: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withUntil(until: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternPointsIdRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriJourneyPatternPointsRequestBuilder {
    withRegion(region: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withUri(uri: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withCount(count: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withSince(since: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withUntil(until: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriJourneyPatternPointsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withId(id: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    get(success: (response: JourneyPatternPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatJourneyPatternsRequestBuilder {
    withLat(lat: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withLon(lon: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withCount(count: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withDepth(depth: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatJourneyPatternsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatJourneyPatternsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternsRequestBuilder;
    withDistance(distance: number): CoverageLonLatJourneyPatternsRequestBuilder;
    withSince(since: string): CoverageLonLatJourneyPatternsRequestBuilder;
    withUntil(until: string): CoverageLonLatJourneyPatternsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternsRequestBuilder;
    withFilter(filter: string): CoverageLonLatJourneyPatternsRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatJourneyPatternsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withId(id: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withCount(count: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withSince(since: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatJourneyPatternsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternsIdRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriJourneyPatternsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withCount(count: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withSince(since: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriJourneyPatternsRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriJourneyPatternsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageRegionJourneyPatternsRequestBuilder {
    withRegion(region: string): CoverageRegionJourneyPatternsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionJourneyPatternsRequestBuilder;
    withCount(count: number): CoverageRegionJourneyPatternsRequestBuilder;
    withDepth(depth: number): CoverageRegionJourneyPatternsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionJourneyPatternsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionJourneyPatternsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternsRequestBuilder;
    withDistance(distance: number): CoverageRegionJourneyPatternsRequestBuilder;
    withSince(since: string): CoverageRegionJourneyPatternsRequestBuilder;
    withUntil(until: string): CoverageRegionJourneyPatternsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternsRequestBuilder;
    withFilter(filter: string): CoverageRegionJourneyPatternsRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageRegionJourneyPatternsIdRequestBuilder {
    withRegion(region: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withId(id: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionJourneyPatternsIdRequestBuilder;
    withCount(count: number): CoverageRegionJourneyPatternsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionJourneyPatternsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionJourneyPatternsIdRequestBuilder;
    withSince(since: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withUntil(until: string): CoverageRegionJourneyPatternsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternsIdRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriJourneyPatternsRequestBuilder {
    withRegion(region: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withUri(uri: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriJourneyPatternsRequestBuilder;
    withCount(count: number): CoverageRegionUriJourneyPatternsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriJourneyPatternsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriJourneyPatternsRequestBuilder;
    withSince(since: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withUntil(until: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriJourneyPatternsRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriJourneyPatternsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withId(id: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    get(success: (response: JourneyPatterns) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatJourneysRequestBuilder {
    withLat(lat: number): CoverageLonLatJourneysRequestBuilder;
    withLon(lon: number): CoverageLonLatJourneysRequestBuilder;
    withFrom(from: string): CoverageLonLatJourneysRequestBuilder;
    withTo(to: string): CoverageLonLatJourneysRequestBuilder;
    withDatetime(datetime: string): CoverageLonLatJourneysRequestBuilder;
    withDatetimeRepresents(datetimeRepresents: string): CoverageLonLatJourneysRequestBuilder;
    withMaxNbTransfers(maxNbTransfers: number): CoverageLonLatJourneysRequestBuilder;
    withMinNbTransfers(minNbTransfers: number): CoverageLonLatJourneysRequestBuilder;
    withFirstSectionMode(firstSectionMode: Array<string>): CoverageLonLatJourneysRequestBuilder;
    withLastSectionMode(lastSectionMode: Array<string>): CoverageLonLatJourneysRequestBuilder;
    withMaxDurationToPt(maxDurationToPt: number): CoverageLonLatJourneysRequestBuilder;
    withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageLonLatJourneysRequestBuilder;
    withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageLonLatJourneysRequestBuilder;
    withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageLonLatJourneysRequestBuilder;
    withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageLonLatJourneysRequestBuilder;
    withWalkingSpeed(walkingSpeed: number): CoverageLonLatJourneysRequestBuilder;
    withBikeSpeed(bikeSpeed: number): CoverageLonLatJourneysRequestBuilder;
    withBssSpeed(bssSpeed: number): CoverageLonLatJourneysRequestBuilder;
    withCarSpeed(carSpeed: number): CoverageLonLatJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneysRequestBuilder;
    withAllowedId(allowedId: Array<string>): CoverageLonLatJourneysRequestBuilder;
    withDisruptionActive(disruptionActive: boolean): CoverageLonLatJourneysRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatJourneysRequestBuilder;
    withMaxDuration(maxDuration: number): CoverageLonLatJourneysRequestBuilder;
    withWheelchair(wheelchair: boolean): CoverageLonLatJourneysRequestBuilder;
    withTravelerType(travelerType: string): CoverageLonLatJourneysRequestBuilder;
    withDirectPath(directPath: string): CoverageLonLatJourneysRequestBuilder;
    withCount(count: number): CoverageLonLatJourneysRequestBuilder;
    withIsJourneySchedules(isJourneySchedules: boolean): CoverageLonLatJourneysRequestBuilder;
    withMinNbJourneys(minNbJourneys: number): CoverageLonLatJourneysRequestBuilder;
    withMaxNbJourneys(maxNbJourneys: number): CoverageLonLatJourneysRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatJourneysRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatJourneysRequestBuilder;
    get(success: (response: Journeys) => void, error: (error: string) => void): void;
}

declare class CoverageRegionJourneysRequestBuilder {
    withRegion(region: string): CoverageRegionJourneysRequestBuilder;
    withFrom(from: string): CoverageRegionJourneysRequestBuilder;
    withTo(to: string): CoverageRegionJourneysRequestBuilder;
    withDatetime(datetime: string): CoverageRegionJourneysRequestBuilder;
    withDatetimeRepresents(datetimeRepresents: string): CoverageRegionJourneysRequestBuilder;
    withMaxNbTransfers(maxNbTransfers: number): CoverageRegionJourneysRequestBuilder;
    withMinNbTransfers(minNbTransfers: number): CoverageRegionJourneysRequestBuilder;
    withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionJourneysRequestBuilder;
    withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionJourneysRequestBuilder;
    withMaxDurationToPt(maxDurationToPt: number): CoverageRegionJourneysRequestBuilder;
    withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionJourneysRequestBuilder;
    withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionJourneysRequestBuilder;
    withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionJourneysRequestBuilder;
    withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionJourneysRequestBuilder;
    withWalkingSpeed(walkingSpeed: number): CoverageRegionJourneysRequestBuilder;
    withBikeSpeed(bikeSpeed: number): CoverageRegionJourneysRequestBuilder;
    withBssSpeed(bssSpeed: number): CoverageRegionJourneysRequestBuilder;
    withCarSpeed(carSpeed: number): CoverageRegionJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneysRequestBuilder;
    withAllowedId(allowedId: Array<string>): CoverageRegionJourneysRequestBuilder;
    withDisruptionActive(disruptionActive: boolean): CoverageRegionJourneysRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionJourneysRequestBuilder;
    withMaxDuration(maxDuration: number): CoverageRegionJourneysRequestBuilder;
    withWheelchair(wheelchair: boolean): CoverageRegionJourneysRequestBuilder;
    withTravelerType(travelerType: string): CoverageRegionJourneysRequestBuilder;
    withDirectPath(directPath: string): CoverageRegionJourneysRequestBuilder;
    withCount(count: number): CoverageRegionJourneysRequestBuilder;
    withIsJourneySchedules(isJourneySchedules: boolean): CoverageRegionJourneysRequestBuilder;
    withMinNbJourneys(minNbJourneys: number): CoverageRegionJourneysRequestBuilder;
    withMaxNbJourneys(maxNbJourneys: number): CoverageRegionJourneysRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionJourneysRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionJourneysRequestBuilder;
    get(success: (response: Journeys) => void, error: (error: string) => void): void;
}

declare class JourneysRequestBuilder {
    withFrom(from: string): JourneysRequestBuilder;
    withTo(to: string): JourneysRequestBuilder;
    withDatetime(datetime: string): JourneysRequestBuilder;
    withDatetimeRepresents(datetimeRepresents: string): JourneysRequestBuilder;
    withMaxNbTransfers(maxNbTransfers: number): JourneysRequestBuilder;
    withMinNbTransfers(minNbTransfers: number): JourneysRequestBuilder;
    withFirstSectionMode(firstSectionMode: Array<string>): JourneysRequestBuilder;
    withLastSectionMode(lastSectionMode: Array<string>): JourneysRequestBuilder;
    withMaxDurationToPt(maxDurationToPt: number): JourneysRequestBuilder;
    withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): JourneysRequestBuilder;
    withMaxBikeDurationToPt(maxBikeDurationToPt: number): JourneysRequestBuilder;
    withMaxBssDurationToPt(maxBssDurationToPt: number): JourneysRequestBuilder;
    withMaxCarDurationToPt(maxCarDurationToPt: number): JourneysRequestBuilder;
    withWalkingSpeed(walkingSpeed: number): JourneysRequestBuilder;
    withBikeSpeed(bikeSpeed: number): JourneysRequestBuilder;
    withBssSpeed(bssSpeed: number): JourneysRequestBuilder;
    withCarSpeed(carSpeed: number): JourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): JourneysRequestBuilder;
    withAllowedId(allowedId: Array<string>): JourneysRequestBuilder;
    withDisruptionActive(disruptionActive: boolean): JourneysRequestBuilder;
    withDataFreshness(dataFreshness: string): JourneysRequestBuilder;
    withMaxDuration(maxDuration: number): JourneysRequestBuilder;
    withWheelchair(wheelchair: boolean): JourneysRequestBuilder;
    withTravelerType(travelerType: string): JourneysRequestBuilder;
    withDirectPath(directPath: string): JourneysRequestBuilder;
    withCount(count: number): JourneysRequestBuilder;
    withIsJourneySchedules(isJourneySchedules: boolean): JourneysRequestBuilder;
    withMinNbJourneys(minNbJourneys: number): JourneysRequestBuilder;
    withMaxNbJourneys(maxNbJourneys: number): JourneysRequestBuilder;
    withBssStands(bssStands: boolean): JourneysRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): JourneysRequestBuilder;
    get(success: (response: Journeys) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatLineGroupsRequestBuilder {
    withLat(lat: number): CoverageLonLatLineGroupsRequestBuilder;
    withLon(lon: number): CoverageLonLatLineGroupsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatLineGroupsRequestBuilder;
    withCount(count: number): CoverageLonLatLineGroupsRequestBuilder;
    withDepth(depth: number): CoverageLonLatLineGroupsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLineGroupsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLineGroupsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatLineGroupsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatLineGroupsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatLineGroupsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatLineGroupsRequestBuilder;
    withDistance(distance: number): CoverageLonLatLineGroupsRequestBuilder;
    withSince(since: string): CoverageLonLatLineGroupsRequestBuilder;
    withUntil(until: string): CoverageLonLatLineGroupsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatLineGroupsRequestBuilder;
    withFilter(filter: string): CoverageLonLatLineGroupsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatLineGroupsRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatLineGroupsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withId(id: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withCount(count: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLineGroupsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLineGroupsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatLineGroupsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatLineGroupsIdRequestBuilder;
    withSince(since: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatLineGroupsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatLineGroupsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatLineGroupsIdRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriLineGroupsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withCount(count: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLineGroupsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLineGroupsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriLineGroupsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriLineGroupsRequestBuilder;
    withSince(since: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLineGroupsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriLineGroupsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriLineGroupsRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriLineGroupsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLineGroupsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriLineGroupsIdRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageRegionLineGroupsRequestBuilder {
    withRegion(region: string): CoverageRegionLineGroupsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionLineGroupsRequestBuilder;
    withCount(count: number): CoverageRegionLineGroupsRequestBuilder;
    withDepth(depth: number): CoverageRegionLineGroupsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionLineGroupsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineGroupsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionLineGroupsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionLineGroupsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionLineGroupsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionLineGroupsRequestBuilder;
    withDistance(distance: number): CoverageRegionLineGroupsRequestBuilder;
    withSince(since: string): CoverageRegionLineGroupsRequestBuilder;
    withUntil(until: string): CoverageRegionLineGroupsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionLineGroupsRequestBuilder;
    withFilter(filter: string): CoverageRegionLineGroupsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionLineGroupsRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageRegionLineGroupsIdRequestBuilder {
    withRegion(region: string): CoverageRegionLineGroupsIdRequestBuilder;
    withId(id: string): CoverageRegionLineGroupsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionLineGroupsIdRequestBuilder;
    withCount(count: number): CoverageRegionLineGroupsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionLineGroupsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionLineGroupsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineGroupsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionLineGroupsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionLineGroupsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionLineGroupsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionLineGroupsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionLineGroupsIdRequestBuilder;
    withSince(since: string): CoverageRegionLineGroupsIdRequestBuilder;
    withUntil(until: string): CoverageRegionLineGroupsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionLineGroupsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionLineGroupsIdRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriLineGroupsRequestBuilder {
    withRegion(region: string): CoverageRegionUriLineGroupsRequestBuilder;
    withUri(uri: string): CoverageRegionUriLineGroupsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriLineGroupsRequestBuilder;
    withCount(count: number): CoverageRegionUriLineGroupsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriLineGroupsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLineGroupsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineGroupsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriLineGroupsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriLineGroupsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriLineGroupsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriLineGroupsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriLineGroupsRequestBuilder;
    withSince(since: string): CoverageRegionUriLineGroupsRequestBuilder;
    withUntil(until: string): CoverageRegionUriLineGroupsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineGroupsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriLineGroupsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriLineGroupsRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriLineGroupsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withId(id: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriLineGroupsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriLineGroupsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriLineGroupsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLineGroupsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineGroupsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriLineGroupsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriLineGroupsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineGroupsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriLineGroupsIdRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class LineGroupsRequestBuilder {
    withExternalCode(externalCode: string): LineGroupsRequestBuilder;
    withStartPage(startPage: number): LineGroupsRequestBuilder;
    withCount(count: number): LineGroupsRequestBuilder;
    withDepth(depth: number): LineGroupsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): LineGroupsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): LineGroupsRequestBuilder;
    withHeadsign(headsign: string): LineGroupsRequestBuilder;
    withShowCodes(showCodes: boolean): LineGroupsRequestBuilder;
    withOdtLevel(odtLevel: string): LineGroupsRequestBuilder;
    withDistance(distance: number): LineGroupsRequestBuilder;
    withSince(since: string): LineGroupsRequestBuilder;
    withUntil(until: string): LineGroupsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): LineGroupsRequestBuilder;
    withFilter(filter: string): LineGroupsRequestBuilder;
    withOriginalId(originalId: string): LineGroupsRequestBuilder;
    get(success: (response: LineGroups) => void, error: (error: string) => void): void;
}

declare class CoverageRegionLineReportsRequestBuilder {
    withRegion(region: string): CoverageRegionLineReportsRequestBuilder;
    withDepth(depth: number): CoverageRegionLineReportsRequestBuilder;
    withCount(count: number): CoverageRegionLineReportsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionLineReportsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineReportsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionLineReportsRequestBuilder;
    get(success: (response: LineReports) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriLineReportsRequestBuilder {
    withRegion(region: string): CoverageRegionUriLineReportsRequestBuilder;
    withUri(uri: string): CoverageRegionUriLineReportsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriLineReportsRequestBuilder;
    withCount(count: number): CoverageRegionUriLineReportsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriLineReportsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineReportsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineReportsRequestBuilder;
    get(success: (response: LineReports) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatLinesRequestBuilder {
    withLat(lat: number): CoverageLonLatLinesRequestBuilder;
    withLon(lon: number): CoverageLonLatLinesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatLinesRequestBuilder;
    withCount(count: number): CoverageLonLatLinesRequestBuilder;
    withDepth(depth: number): CoverageLonLatLinesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLinesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLinesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatLinesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatLinesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatLinesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatLinesRequestBuilder;
    withDistance(distance: number): CoverageLonLatLinesRequestBuilder;
    withSince(since: string): CoverageLonLatLinesRequestBuilder;
    withUntil(until: string): CoverageLonLatLinesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatLinesRequestBuilder;
    withFilter(filter: string): CoverageLonLatLinesRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatLinesRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatLinesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatLinesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatLinesIdRequestBuilder;
    withId(id: string): CoverageLonLatLinesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatLinesIdRequestBuilder;
    withCount(count: number): CoverageLonLatLinesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatLinesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLinesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLinesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatLinesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatLinesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatLinesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatLinesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatLinesIdRequestBuilder;
    withSince(since: string): CoverageLonLatLinesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatLinesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatLinesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatLinesIdRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriLinesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriLinesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriLinesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriLinesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriLinesRequestBuilder;
    withCount(count: number): CoverageLonLatUriLinesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriLinesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLinesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLinesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriLinesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriLinesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriLinesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriLinesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriLinesRequestBuilder;
    withSince(since: string): CoverageLonLatUriLinesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriLinesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLinesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriLinesRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriLinesRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriLinesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriLinesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriLinesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriLinesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriLinesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriLinesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriLinesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriLinesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLinesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLinesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriLinesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriLinesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriLinesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriLinesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriLinesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriLinesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriLinesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLinesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriLinesIdRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageRegionLinesRequestBuilder {
    withRegion(region: string): CoverageRegionLinesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionLinesRequestBuilder;
    withCount(count: number): CoverageRegionLinesRequestBuilder;
    withDepth(depth: number): CoverageRegionLinesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionLinesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLinesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionLinesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionLinesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionLinesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionLinesRequestBuilder;
    withDistance(distance: number): CoverageRegionLinesRequestBuilder;
    withSince(since: string): CoverageRegionLinesRequestBuilder;
    withUntil(until: string): CoverageRegionLinesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionLinesRequestBuilder;
    withFilter(filter: string): CoverageRegionLinesRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionLinesRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageRegionLinesIdRequestBuilder {
    withRegion(region: string): CoverageRegionLinesIdRequestBuilder;
    withId(id: string): CoverageRegionLinesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionLinesIdRequestBuilder;
    withCount(count: number): CoverageRegionLinesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionLinesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionLinesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLinesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionLinesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionLinesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionLinesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionLinesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionLinesIdRequestBuilder;
    withSince(since: string): CoverageRegionLinesIdRequestBuilder;
    withUntil(until: string): CoverageRegionLinesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionLinesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionLinesIdRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriLinesRequestBuilder {
    withRegion(region: string): CoverageRegionUriLinesRequestBuilder;
    withUri(uri: string): CoverageRegionUriLinesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriLinesRequestBuilder;
    withCount(count: number): CoverageRegionUriLinesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriLinesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLinesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLinesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriLinesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriLinesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriLinesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriLinesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriLinesRequestBuilder;
    withSince(since: string): CoverageRegionUriLinesRequestBuilder;
    withUntil(until: string): CoverageRegionUriLinesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLinesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriLinesRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriLinesRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriLinesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriLinesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriLinesIdRequestBuilder;
    withId(id: string): CoverageRegionUriLinesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriLinesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriLinesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriLinesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLinesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLinesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriLinesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriLinesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriLinesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriLinesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriLinesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriLinesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriLinesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLinesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriLinesIdRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class LinesRequestBuilder {
    withExternalCode(externalCode: string): LinesRequestBuilder;
    withStartPage(startPage: number): LinesRequestBuilder;
    withCount(count: number): LinesRequestBuilder;
    withDepth(depth: number): LinesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): LinesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): LinesRequestBuilder;
    withHeadsign(headsign: string): LinesRequestBuilder;
    withShowCodes(showCodes: boolean): LinesRequestBuilder;
    withOdtLevel(odtLevel: string): LinesRequestBuilder;
    withDistance(distance: number): LinesRequestBuilder;
    withSince(since: string): LinesRequestBuilder;
    withUntil(until: string): LinesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): LinesRequestBuilder;
    withFilter(filter: string): LinesRequestBuilder;
    withOriginalId(originalId: string): LinesRequestBuilder;
    get(success: (response: Lines) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatNetworksRequestBuilder {
    withLat(lat: number): CoverageLonLatNetworksRequestBuilder;
    withLon(lon: number): CoverageLonLatNetworksRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatNetworksRequestBuilder;
    withCount(count: number): CoverageLonLatNetworksRequestBuilder;
    withDepth(depth: number): CoverageLonLatNetworksRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatNetworksRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatNetworksRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatNetworksRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatNetworksRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatNetworksRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatNetworksRequestBuilder;
    withDistance(distance: number): CoverageLonLatNetworksRequestBuilder;
    withSince(since: string): CoverageLonLatNetworksRequestBuilder;
    withUntil(until: string): CoverageLonLatNetworksRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatNetworksRequestBuilder;
    withFilter(filter: string): CoverageLonLatNetworksRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatNetworksRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatNetworksIdRequestBuilder {
    withLat(lat: number): CoverageLonLatNetworksIdRequestBuilder;
    withLon(lon: number): CoverageLonLatNetworksIdRequestBuilder;
    withId(id: string): CoverageLonLatNetworksIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatNetworksIdRequestBuilder;
    withCount(count: number): CoverageLonLatNetworksIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatNetworksIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatNetworksIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatNetworksIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatNetworksIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatNetworksIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatNetworksIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatNetworksIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatNetworksIdRequestBuilder;
    withSince(since: string): CoverageLonLatNetworksIdRequestBuilder;
    withUntil(until: string): CoverageLonLatNetworksIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatNetworksIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatNetworksIdRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriNetworksRequestBuilder {
    withLat(lat: number): CoverageLonLatUriNetworksRequestBuilder;
    withLon(lon: number): CoverageLonLatUriNetworksRequestBuilder;
    withUri(uri: string): CoverageLonLatUriNetworksRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriNetworksRequestBuilder;
    withCount(count: number): CoverageLonLatUriNetworksRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriNetworksRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriNetworksRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriNetworksRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriNetworksRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriNetworksRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriNetworksRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriNetworksRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriNetworksRequestBuilder;
    withSince(since: string): CoverageLonLatUriNetworksRequestBuilder;
    withUntil(until: string): CoverageLonLatUriNetworksRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriNetworksRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriNetworksRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriNetworksRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriNetworksIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withId(id: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriNetworksIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriNetworksIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriNetworksIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriNetworksIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriNetworksIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriNetworksIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriNetworksIdRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageRegionNetworksRequestBuilder {
    withRegion(region: string): CoverageRegionNetworksRequestBuilder;
    withStartPage(startPage: number): CoverageRegionNetworksRequestBuilder;
    withCount(count: number): CoverageRegionNetworksRequestBuilder;
    withDepth(depth: number): CoverageRegionNetworksRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionNetworksRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionNetworksRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionNetworksRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionNetworksRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionNetworksRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionNetworksRequestBuilder;
    withDistance(distance: number): CoverageRegionNetworksRequestBuilder;
    withSince(since: string): CoverageRegionNetworksRequestBuilder;
    withUntil(until: string): CoverageRegionNetworksRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionNetworksRequestBuilder;
    withFilter(filter: string): CoverageRegionNetworksRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionNetworksRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageRegionNetworksIdRequestBuilder {
    withRegion(region: string): CoverageRegionNetworksIdRequestBuilder;
    withId(id: string): CoverageRegionNetworksIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionNetworksIdRequestBuilder;
    withCount(count: number): CoverageRegionNetworksIdRequestBuilder;
    withDepth(depth: number): CoverageRegionNetworksIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionNetworksIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionNetworksIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionNetworksIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionNetworksIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionNetworksIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionNetworksIdRequestBuilder;
    withDistance(distance: number): CoverageRegionNetworksIdRequestBuilder;
    withSince(since: string): CoverageRegionNetworksIdRequestBuilder;
    withUntil(until: string): CoverageRegionNetworksIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionNetworksIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionNetworksIdRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriNetworksRequestBuilder {
    withRegion(region: string): CoverageRegionUriNetworksRequestBuilder;
    withUri(uri: string): CoverageRegionUriNetworksRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriNetworksRequestBuilder;
    withCount(count: number): CoverageRegionUriNetworksRequestBuilder;
    withDepth(depth: number): CoverageRegionUriNetworksRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriNetworksRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriNetworksRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriNetworksRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriNetworksRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriNetworksRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriNetworksRequestBuilder;
    withDistance(distance: number): CoverageRegionUriNetworksRequestBuilder;
    withSince(since: string): CoverageRegionUriNetworksRequestBuilder;
    withUntil(until: string): CoverageRegionUriNetworksRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriNetworksRequestBuilder;
    withFilter(filter: string): CoverageRegionUriNetworksRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriNetworksRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriNetworksIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriNetworksIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriNetworksIdRequestBuilder;
    withId(id: string): CoverageRegionUriNetworksIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriNetworksIdRequestBuilder;
    withCount(count: number): CoverageRegionUriNetworksIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriNetworksIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriNetworksIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriNetworksIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriNetworksIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriNetworksIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriNetworksIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriNetworksIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriNetworksIdRequestBuilder;
    withSince(since: string): CoverageRegionUriNetworksIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriNetworksIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriNetworksIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriNetworksIdRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class NetworksRequestBuilder {
    withExternalCode(externalCode: string): NetworksRequestBuilder;
    withStartPage(startPage: number): NetworksRequestBuilder;
    withCount(count: number): NetworksRequestBuilder;
    withDepth(depth: number): NetworksRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): NetworksRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): NetworksRequestBuilder;
    withHeadsign(headsign: string): NetworksRequestBuilder;
    withShowCodes(showCodes: boolean): NetworksRequestBuilder;
    withOdtLevel(odtLevel: string): NetworksRequestBuilder;
    withDistance(distance: number): NetworksRequestBuilder;
    withSince(since: string): NetworksRequestBuilder;
    withUntil(until: string): NetworksRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): NetworksRequestBuilder;
    withFilter(filter: string): NetworksRequestBuilder;
    withOriginalId(originalId: string): NetworksRequestBuilder;
    get(success: (response: Networks) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatArrivalsRequestBuilder {
    withLat(lat: number): CoverageLonLatArrivalsRequestBuilder;
    withLon(lon: number): CoverageLonLatArrivalsRequestBuilder;
    withFilter(filter: string): CoverageLonLatArrivalsRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatArrivalsRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatArrivalsRequestBuilder;
    withDuration(duration: number): CoverageLonLatArrivalsRequestBuilder;
    withDepth(depth: number): CoverageLonLatArrivalsRequestBuilder;
    withCount(count: number): CoverageLonLatArrivalsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatArrivalsRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatArrivalsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatArrivalsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatArrivalsRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatArrivalsRequestBuilder;
    withDistance(distance: number): CoverageLonLatArrivalsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatArrivalsRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatArrivalsRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatArrivalsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatArrivalsRequestBuilder;
    get(success: (response: Arrivals) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriArrivalsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriArrivalsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriArrivalsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriArrivalsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriArrivalsRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatUriArrivalsRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatUriArrivalsRequestBuilder;
    withDuration(duration: number): CoverageLonLatUriArrivalsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriArrivalsRequestBuilder;
    withCount(count: number): CoverageLonLatUriArrivalsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriArrivalsRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriArrivalsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriArrivalsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriArrivalsRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatUriArrivalsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriArrivalsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriArrivalsRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatUriArrivalsRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriArrivalsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriArrivalsRequestBuilder;
    get(success: (response: Arrivals) => void, error: (error: string) => void): void;
}

declare class CoverageRegionArrivalsRequestBuilder {
    withRegion(region: string): CoverageRegionArrivalsRequestBuilder;
    withFilter(filter: string): CoverageRegionArrivalsRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionArrivalsRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionArrivalsRequestBuilder;
    withDuration(duration: number): CoverageRegionArrivalsRequestBuilder;
    withDepth(depth: number): CoverageRegionArrivalsRequestBuilder;
    withCount(count: number): CoverageRegionArrivalsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionArrivalsRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionArrivalsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionArrivalsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionArrivalsRequestBuilder;
    withCalendar(calendar: string): CoverageRegionArrivalsRequestBuilder;
    withDistance(distance: number): CoverageRegionArrivalsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionArrivalsRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionArrivalsRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionArrivalsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionArrivalsRequestBuilder;
    get(success: (response: Arrivals) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriArrivalsRequestBuilder {
    withRegion(region: string): CoverageRegionUriArrivalsRequestBuilder;
    withUri(uri: string): CoverageRegionUriArrivalsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriArrivalsRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionUriArrivalsRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionUriArrivalsRequestBuilder;
    withDuration(duration: number): CoverageRegionUriArrivalsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriArrivalsRequestBuilder;
    withCount(count: number): CoverageRegionUriArrivalsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriArrivalsRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionUriArrivalsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriArrivalsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriArrivalsRequestBuilder;
    withCalendar(calendar: string): CoverageRegionUriArrivalsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriArrivalsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriArrivalsRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionUriArrivalsRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriArrivalsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriArrivalsRequestBuilder;
    get(success: (response: Arrivals) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatDeparturesRequestBuilder {
    withLat(lat: number): CoverageLonLatDeparturesRequestBuilder;
    withLon(lon: number): CoverageLonLatDeparturesRequestBuilder;
    withFilter(filter: string): CoverageLonLatDeparturesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatDeparturesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatDeparturesRequestBuilder;
    withDuration(duration: number): CoverageLonLatDeparturesRequestBuilder;
    withDepth(depth: number): CoverageLonLatDeparturesRequestBuilder;
    withCount(count: number): CoverageLonLatDeparturesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatDeparturesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatDeparturesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDeparturesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDeparturesRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatDeparturesRequestBuilder;
    withDistance(distance: number): CoverageLonLatDeparturesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatDeparturesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatDeparturesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatDeparturesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatDeparturesRequestBuilder;
    get(success: (response: Departures) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriDeparturesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriDeparturesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriDeparturesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriDeparturesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriDeparturesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatUriDeparturesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatUriDeparturesRequestBuilder;
    withDuration(duration: number): CoverageLonLatUriDeparturesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriDeparturesRequestBuilder;
    withCount(count: number): CoverageLonLatUriDeparturesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriDeparturesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriDeparturesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDeparturesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDeparturesRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatUriDeparturesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriDeparturesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriDeparturesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatUriDeparturesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriDeparturesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDeparturesRequestBuilder;
    get(success: (response: Departures) => void, error: (error: string) => void): void;
}

declare class CoverageRegionDeparturesRequestBuilder {
    withRegion(region: string): CoverageRegionDeparturesRequestBuilder;
    withFilter(filter: string): CoverageRegionDeparturesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionDeparturesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionDeparturesRequestBuilder;
    withDuration(duration: number): CoverageRegionDeparturesRequestBuilder;
    withDepth(depth: number): CoverageRegionDeparturesRequestBuilder;
    withCount(count: number): CoverageRegionDeparturesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionDeparturesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionDeparturesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionDeparturesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDeparturesRequestBuilder;
    withCalendar(calendar: string): CoverageRegionDeparturesRequestBuilder;
    withDistance(distance: number): CoverageRegionDeparturesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionDeparturesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionDeparturesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionDeparturesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionDeparturesRequestBuilder;
    get(success: (response: Departures) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriDeparturesRequestBuilder {
    withRegion(region: string): CoverageRegionUriDeparturesRequestBuilder;
    withUri(uri: string): CoverageRegionUriDeparturesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriDeparturesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionUriDeparturesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionUriDeparturesRequestBuilder;
    withDuration(duration: number): CoverageRegionUriDeparturesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriDeparturesRequestBuilder;
    withCount(count: number): CoverageRegionUriDeparturesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriDeparturesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionUriDeparturesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDeparturesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDeparturesRequestBuilder;
    withCalendar(calendar: string): CoverageRegionUriDeparturesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriDeparturesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriDeparturesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionUriDeparturesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriDeparturesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDeparturesRequestBuilder;
    get(success: (response: Departures) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPhysicalModesRequestBuilder {
    withLat(lat: number): CoverageLonLatPhysicalModesRequestBuilder;
    withLon(lon: number): CoverageLonLatPhysicalModesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPhysicalModesRequestBuilder;
    withCount(count: number): CoverageLonLatPhysicalModesRequestBuilder;
    withDepth(depth: number): CoverageLonLatPhysicalModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPhysicalModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPhysicalModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPhysicalModesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPhysicalModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPhysicalModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPhysicalModesRequestBuilder;
    withDistance(distance: number): CoverageLonLatPhysicalModesRequestBuilder;
    withSince(since: string): CoverageLonLatPhysicalModesRequestBuilder;
    withUntil(until: string): CoverageLonLatPhysicalModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPhysicalModesRequestBuilder;
    withFilter(filter: string): CoverageLonLatPhysicalModesRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPhysicalModesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withId(id: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withCount(count: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPhysicalModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPhysicalModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPhysicalModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatPhysicalModesIdRequestBuilder;
    withSince(since: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatPhysicalModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPhysicalModesIdRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPhysicalModesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withCount(count: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPhysicalModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPhysicalModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPhysicalModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPhysicalModesRequestBuilder;
    withSince(since: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPhysicalModesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriPhysicalModesRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPhysicalModesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPhysicalModesIdRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPhysicalModesRequestBuilder {
    withRegion(region: string): CoverageRegionPhysicalModesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPhysicalModesRequestBuilder;
    withCount(count: number): CoverageRegionPhysicalModesRequestBuilder;
    withDepth(depth: number): CoverageRegionPhysicalModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPhysicalModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPhysicalModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPhysicalModesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPhysicalModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPhysicalModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPhysicalModesRequestBuilder;
    withDistance(distance: number): CoverageRegionPhysicalModesRequestBuilder;
    withSince(since: string): CoverageRegionPhysicalModesRequestBuilder;
    withUntil(until: string): CoverageRegionPhysicalModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPhysicalModesRequestBuilder;
    withFilter(filter: string): CoverageRegionPhysicalModesRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPhysicalModesIdRequestBuilder {
    withRegion(region: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withId(id: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPhysicalModesIdRequestBuilder;
    withCount(count: number): CoverageRegionPhysicalModesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionPhysicalModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPhysicalModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPhysicalModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPhysicalModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionPhysicalModesIdRequestBuilder;
    withSince(since: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withUntil(until: string): CoverageRegionPhysicalModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPhysicalModesIdRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPhysicalModesRequestBuilder {
    withRegion(region: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withUri(uri: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPhysicalModesRequestBuilder;
    withCount(count: number): CoverageRegionUriPhysicalModesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPhysicalModesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPhysicalModesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPhysicalModesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPhysicalModesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPhysicalModesRequestBuilder;
    withSince(since: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withUntil(until: string): CoverageRegionUriPhysicalModesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPhysicalModesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriPhysicalModesRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPhysicalModesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withId(id: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriPhysicalModesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPhysicalModesIdRequestBuilder;
    get(success: (response: PhysicalModes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPlacesRequestBuilder {
    withQ(q: string): CoverageLonLatPlacesRequestBuilder;
    withLat(lat: number): CoverageLonLatPlacesRequestBuilder;
    withLon(lon: number): CoverageLonLatPlacesRequestBuilder;
    withType(type: Array<string>): CoverageLonLatPlacesRequestBuilder;
    withCount(count: number): CoverageLonLatPlacesRequestBuilder;
    withAdminUri(adminUri: Array<string>): CoverageLonLatPlacesRequestBuilder;
    withDepth(depth: number): CoverageLonLatPlacesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPlacesRequestBuilder;
    withFrom(from: string): CoverageLonLatPlacesRequestBuilder;
    withShape(shape: string): CoverageLonLatPlacesRequestBuilder;
    get(success: (response: Places) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPlacesRequestBuilder {
    withQ(q: string): CoverageRegionPlacesRequestBuilder;
    withRegion(region: string): CoverageRegionPlacesRequestBuilder;
    withType(type: Array<string>): CoverageRegionPlacesRequestBuilder;
    withCount(count: number): CoverageRegionPlacesRequestBuilder;
    withAdminUri(adminUri: Array<string>): CoverageRegionPlacesRequestBuilder;
    withDepth(depth: number): CoverageRegionPlacesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPlacesRequestBuilder;
    withFrom(from: string): CoverageRegionPlacesRequestBuilder;
    withShape(shape: string): CoverageRegionPlacesRequestBuilder;
    get(success: (response: Places) => void, error: (error: string) => void): void;
}

declare class PlacesRequestBuilder {
    withQ(q: string): PlacesRequestBuilder;
    withType(type: Array<string>): PlacesRequestBuilder;
    withCount(count: number): PlacesRequestBuilder;
    withAdminUri(adminUri: Array<string>): PlacesRequestBuilder;
    withDepth(depth: number): PlacesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): PlacesRequestBuilder;
    withFrom(from: string): PlacesRequestBuilder;
    withShape(shape: string): PlacesRequestBuilder;
    get(success: (response: Places) => void, error: (error: string) => void): void;
}

declare class CoordLonLatPlacesNearbyRequestBuilder {
    withLat(lat: number): CoordLonLatPlacesNearbyRequestBuilder;
    withLon(lon: number): CoordLonLatPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoordLonLatPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoordLonLatPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoordLonLatPlacesNearbyRequestBuilder;
    withCount(count: number): CoordLonLatPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoordLonLatPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoordLonLatPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoordLonLatPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoordLonLatPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoordLonLatPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoordsLonLatPlacesNearbyRequestBuilder {
    withLat(lat: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withLon(lon: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoordsLonLatPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoordsLonLatPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withCount(count: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoordsLonLatPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoordsLonLatPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoordsLonLatPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoordsLonLatPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPlacesNearbyRequestBuilder {
    withLat(lat: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withLon(lon: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoverageLonLatPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoverageLonLatPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withCount(count: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPlacesNearbyRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withCount(count: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPlacesNearbyRequestBuilder {
    withRegion(region: string): CoverageRegionPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoverageRegionPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoverageRegionPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoverageRegionPlacesNearbyRequestBuilder;
    withCount(count: number): CoverageRegionPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoverageRegionPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPlacesNearbyRequestBuilder {
    withRegion(region: string): CoverageRegionUriPlacesNearbyRequestBuilder;
    withUri(uri: string): CoverageRegionUriPlacesNearbyRequestBuilder;
    withType(type: Array<string>): CoverageRegionUriPlacesNearbyRequestBuilder;
    withFilter(filter: string): CoverageRegionUriPlacesNearbyRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPlacesNearbyRequestBuilder;
    withCount(count: number): CoverageRegionUriPlacesNearbyRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPlacesNearbyRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPlacesNearbyRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionUriPlacesNearbyRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPlacesNearbyRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPlacesNearbyRequestBuilder;
    get(success: (response: PlacesNearby) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPoiTypesRequestBuilder {
    withLat(lat: number): CoverageLonLatPoiTypesRequestBuilder;
    withLon(lon: number): CoverageLonLatPoiTypesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPoiTypesRequestBuilder;
    withCount(count: number): CoverageLonLatPoiTypesRequestBuilder;
    withDepth(depth: number): CoverageLonLatPoiTypesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoiTypesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoiTypesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPoiTypesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPoiTypesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPoiTypesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPoiTypesRequestBuilder;
    withDistance(distance: number): CoverageLonLatPoiTypesRequestBuilder;
    withSince(since: string): CoverageLonLatPoiTypesRequestBuilder;
    withUntil(until: string): CoverageLonLatPoiTypesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoiTypesRequestBuilder;
    withFilter(filter: string): CoverageLonLatPoiTypesRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPoiTypesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withId(id: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withCount(count: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoiTypesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoiTypesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPoiTypesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatPoiTypesIdRequestBuilder;
    withSince(since: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatPoiTypesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoiTypesIdRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPoiTypesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withCount(count: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoiTypesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoiTypesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPoiTypesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPoiTypesRequestBuilder;
    withSince(since: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPoiTypesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoiTypesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriPoiTypesRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPoiTypesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPoiTypesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoiTypesIdRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPoiTypesRequestBuilder {
    withRegion(region: string): CoverageRegionPoiTypesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPoiTypesRequestBuilder;
    withCount(count: number): CoverageRegionPoiTypesRequestBuilder;
    withDepth(depth: number): CoverageRegionPoiTypesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoiTypesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoiTypesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPoiTypesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPoiTypesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPoiTypesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPoiTypesRequestBuilder;
    withDistance(distance: number): CoverageRegionPoiTypesRequestBuilder;
    withSince(since: string): CoverageRegionPoiTypesRequestBuilder;
    withUntil(until: string): CoverageRegionPoiTypesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPoiTypesRequestBuilder;
    withFilter(filter: string): CoverageRegionPoiTypesRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPoiTypesIdRequestBuilder {
    withRegion(region: string): CoverageRegionPoiTypesIdRequestBuilder;
    withId(id: string): CoverageRegionPoiTypesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPoiTypesIdRequestBuilder;
    withCount(count: number): CoverageRegionPoiTypesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionPoiTypesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoiTypesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoiTypesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPoiTypesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPoiTypesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPoiTypesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPoiTypesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionPoiTypesIdRequestBuilder;
    withSince(since: string): CoverageRegionPoiTypesIdRequestBuilder;
    withUntil(until: string): CoverageRegionPoiTypesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPoiTypesIdRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPoiTypesRequestBuilder {
    withRegion(region: string): CoverageRegionUriPoiTypesRequestBuilder;
    withUri(uri: string): CoverageRegionUriPoiTypesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPoiTypesRequestBuilder;
    withCount(count: number): CoverageRegionUriPoiTypesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPoiTypesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoiTypesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoiTypesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPoiTypesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPoiTypesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPoiTypesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPoiTypesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPoiTypesRequestBuilder;
    withSince(since: string): CoverageRegionUriPoiTypesRequestBuilder;
    withUntil(until: string): CoverageRegionUriPoiTypesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoiTypesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriPoiTypesRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPoiTypesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withId(id: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPoiTypesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriPoiTypesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPoiTypesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoiTypesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoiTypesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPoiTypesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPoiTypesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriPoiTypesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoiTypesIdRequestBuilder;
    get(success: (response: PoiTypes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPoisRequestBuilder {
    withLat(lat: number): CoverageLonLatPoisRequestBuilder;
    withLon(lon: number): CoverageLonLatPoisRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPoisRequestBuilder;
    withCount(count: number): CoverageLonLatPoisRequestBuilder;
    withDepth(depth: number): CoverageLonLatPoisRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoisRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoisRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPoisRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPoisRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPoisRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPoisRequestBuilder;
    withDistance(distance: number): CoverageLonLatPoisRequestBuilder;
    withSince(since: string): CoverageLonLatPoisRequestBuilder;
    withUntil(until: string): CoverageLonLatPoisRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoisRequestBuilder;
    withFilter(filter: string): CoverageLonLatPoisRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatPoisRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatPoisRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPoisRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPoisIdRequestBuilder {
    withLat(lat: number): CoverageLonLatPoisIdRequestBuilder;
    withLon(lon: number): CoverageLonLatPoisIdRequestBuilder;
    withId(id: string): CoverageLonLatPoisIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatPoisIdRequestBuilder;
    withCount(count: number): CoverageLonLatPoisIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatPoisIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoisIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoisIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatPoisIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatPoisIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatPoisIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatPoisIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatPoisIdRequestBuilder;
    withSince(since: string): CoverageLonLatPoisIdRequestBuilder;
    withUntil(until: string): CoverageLonLatPoisIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoisIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatPoisIdRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatPoisIdRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPoisIdRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPoisRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPoisRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPoisRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPoisRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPoisRequestBuilder;
    withCount(count: number): CoverageLonLatUriPoisRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPoisRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoisRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoisRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPoisRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPoisRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPoisRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPoisRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPoisRequestBuilder;
    withSince(since: string): CoverageLonLatUriPoisRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPoisRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoisRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriPoisRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriPoisRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatUriPoisRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPoisRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriPoisIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriPoisIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriPoisIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriPoisIdRequestBuilder;
    withId(id: string): CoverageLonLatUriPoisIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriPoisIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriPoisIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriPoisIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriPoisIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriPoisIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriPoisIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriPoisIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriPoisIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriPoisIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriPoisIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoisIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriPoisIdRequestBuilder;
    withBssStands(bssStands: boolean): CoverageLonLatUriPoisIdRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPoisRequestBuilder {
    withRegion(region: string): CoverageRegionPoisRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPoisRequestBuilder;
    withCount(count: number): CoverageRegionPoisRequestBuilder;
    withDepth(depth: number): CoverageRegionPoisRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoisRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoisRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPoisRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPoisRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPoisRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPoisRequestBuilder;
    withDistance(distance: number): CoverageRegionPoisRequestBuilder;
    withSince(since: string): CoverageRegionPoisRequestBuilder;
    withUntil(until: string): CoverageRegionPoisRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPoisRequestBuilder;
    withFilter(filter: string): CoverageRegionPoisRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionPoisRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionPoisRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPoisRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPoisIdRequestBuilder {
    withRegion(region: string): CoverageRegionPoisIdRequestBuilder;
    withId(id: string): CoverageRegionPoisIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionPoisIdRequestBuilder;
    withCount(count: number): CoverageRegionPoisIdRequestBuilder;
    withDepth(depth: number): CoverageRegionPoisIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoisIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoisIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionPoisIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionPoisIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionPoisIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionPoisIdRequestBuilder;
    withDistance(distance: number): CoverageRegionPoisIdRequestBuilder;
    withSince(since: string): CoverageRegionPoisIdRequestBuilder;
    withUntil(until: string): CoverageRegionPoisIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPoisIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionPoisIdRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionPoisIdRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPoisIdRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPoisRequestBuilder {
    withRegion(region: string): CoverageRegionUriPoisRequestBuilder;
    withUri(uri: string): CoverageRegionUriPoisRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPoisRequestBuilder;
    withCount(count: number): CoverageRegionUriPoisRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPoisRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoisRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoisRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPoisRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPoisRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPoisRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPoisRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPoisRequestBuilder;
    withSince(since: string): CoverageRegionUriPoisRequestBuilder;
    withUntil(until: string): CoverageRegionUriPoisRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoisRequestBuilder;
    withFilter(filter: string): CoverageRegionUriPoisRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriPoisRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionUriPoisRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPoisRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriPoisIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriPoisIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriPoisIdRequestBuilder;
    withId(id: string): CoverageRegionUriPoisIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriPoisIdRequestBuilder;
    withCount(count: number): CoverageRegionUriPoisIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriPoisIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoisIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoisIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriPoisIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriPoisIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriPoisIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriPoisIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriPoisIdRequestBuilder;
    withSince(since: string): CoverageRegionUriPoisIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriPoisIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoisIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriPoisIdRequestBuilder;
    withBssStands(bssStands: boolean): CoverageRegionUriPoisIdRequestBuilder;
    withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPoisIdRequestBuilder;
    get(success: (response: Pois) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatPtObjectsRequestBuilder {
    withQ(q: string): CoverageLonLatPtObjectsRequestBuilder;
    withLat(lat: number): CoverageLonLatPtObjectsRequestBuilder;
    withLon(lon: number): CoverageLonLatPtObjectsRequestBuilder;
    withType(type: Array<string>): CoverageLonLatPtObjectsRequestBuilder;
    withCount(count: number): CoverageLonLatPtObjectsRequestBuilder;
    withAdminUri(adminUri: Array<string>): CoverageLonLatPtObjectsRequestBuilder;
    withDepth(depth: number): CoverageLonLatPtObjectsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatPtObjectsRequestBuilder;
    get(success: (response: PtObjects) => void, error: (error: string) => void): void;
}

declare class CoverageRegionPtObjectsRequestBuilder {
    withQ(q: string): CoverageRegionPtObjectsRequestBuilder;
    withRegion(region: string): CoverageRegionPtObjectsRequestBuilder;
    withType(type: Array<string>): CoverageRegionPtObjectsRequestBuilder;
    withCount(count: number): CoverageRegionPtObjectsRequestBuilder;
    withAdminUri(adminUri: Array<string>): CoverageRegionPtObjectsRequestBuilder;
    withDepth(depth: number): CoverageRegionPtObjectsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionPtObjectsRequestBuilder;
    get(success: (response: PtObjects) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriRouteSchedulesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withDuration(duration: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withCount(count: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriRouteSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRouteSchedulesRequestBuilder;
    get(success: (response: RouteSchedules) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriRouteSchedulesRequestBuilder {
    withRegion(region: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withUri(uri: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withDuration(duration: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withCount(count: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRouteSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRouteSchedulesRequestBuilder;
    withCalendar(calendar: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriRouteSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionUriRouteSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriRouteSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRouteSchedulesRequestBuilder;
    get(success: (response: RouteSchedules) => void, error: (error: string) => void): void;
}

declare class RouteSchedulesRequestBuilder {
    withFilter(filter: string): RouteSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): RouteSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): RouteSchedulesRequestBuilder;
    withDuration(duration: number): RouteSchedulesRequestBuilder;
    withDepth(depth: number): RouteSchedulesRequestBuilder;
    withCount(count: number): RouteSchedulesRequestBuilder;
    withStartPage(startPage: number): RouteSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): RouteSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): RouteSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): RouteSchedulesRequestBuilder;
    withCalendar(calendar: string): RouteSchedulesRequestBuilder;
    withDistance(distance: number): RouteSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): RouteSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): RouteSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): RouteSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): RouteSchedulesRequestBuilder;
    get(success: (response: RouteSchedules) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatRoutesRequestBuilder {
    withLat(lat: number): CoverageLonLatRoutesRequestBuilder;
    withLon(lon: number): CoverageLonLatRoutesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatRoutesRequestBuilder;
    withCount(count: number): CoverageLonLatRoutesRequestBuilder;
    withDepth(depth: number): CoverageLonLatRoutesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatRoutesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatRoutesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatRoutesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatRoutesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatRoutesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatRoutesRequestBuilder;
    withDistance(distance: number): CoverageLonLatRoutesRequestBuilder;
    withSince(since: string): CoverageLonLatRoutesRequestBuilder;
    withUntil(until: string): CoverageLonLatRoutesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatRoutesRequestBuilder;
    withFilter(filter: string): CoverageLonLatRoutesRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatRoutesRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatRoutesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatRoutesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatRoutesIdRequestBuilder;
    withId(id: string): CoverageLonLatRoutesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatRoutesIdRequestBuilder;
    withCount(count: number): CoverageLonLatRoutesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatRoutesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatRoutesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatRoutesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatRoutesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatRoutesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatRoutesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatRoutesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatRoutesIdRequestBuilder;
    withSince(since: string): CoverageLonLatRoutesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatRoutesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatRoutesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatRoutesIdRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriRoutesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriRoutesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriRoutesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriRoutesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriRoutesRequestBuilder;
    withCount(count: number): CoverageLonLatUriRoutesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriRoutesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRoutesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRoutesRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriRoutesRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriRoutesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriRoutesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriRoutesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriRoutesRequestBuilder;
    withSince(since: string): CoverageLonLatUriRoutesRequestBuilder;
    withUntil(until: string): CoverageLonLatUriRoutesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRoutesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriRoutesRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriRoutesRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriRoutesIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withId(id: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRoutesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRoutesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriRoutesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriRoutesIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriRoutesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRoutesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriRoutesIdRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionRoutesRequestBuilder {
    withRegion(region: string): CoverageRegionRoutesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionRoutesRequestBuilder;
    withCount(count: number): CoverageRegionRoutesRequestBuilder;
    withDepth(depth: number): CoverageRegionRoutesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionRoutesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionRoutesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionRoutesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionRoutesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionRoutesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionRoutesRequestBuilder;
    withDistance(distance: number): CoverageRegionRoutesRequestBuilder;
    withSince(since: string): CoverageRegionRoutesRequestBuilder;
    withUntil(until: string): CoverageRegionRoutesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionRoutesRequestBuilder;
    withFilter(filter: string): CoverageRegionRoutesRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionRoutesRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionRoutesIdRequestBuilder {
    withRegion(region: string): CoverageRegionRoutesIdRequestBuilder;
    withId(id: string): CoverageRegionRoutesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionRoutesIdRequestBuilder;
    withCount(count: number): CoverageRegionRoutesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionRoutesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionRoutesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionRoutesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionRoutesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionRoutesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionRoutesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionRoutesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionRoutesIdRequestBuilder;
    withSince(since: string): CoverageRegionRoutesIdRequestBuilder;
    withUntil(until: string): CoverageRegionRoutesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionRoutesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionRoutesIdRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriRoutesRequestBuilder {
    withRegion(region: string): CoverageRegionUriRoutesRequestBuilder;
    withUri(uri: string): CoverageRegionUriRoutesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriRoutesRequestBuilder;
    withCount(count: number): CoverageRegionUriRoutesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriRoutesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRoutesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRoutesRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriRoutesRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriRoutesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriRoutesRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriRoutesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriRoutesRequestBuilder;
    withSince(since: string): CoverageRegionUriRoutesRequestBuilder;
    withUntil(until: string): CoverageRegionUriRoutesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRoutesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriRoutesRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriRoutesRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriRoutesIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriRoutesIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriRoutesIdRequestBuilder;
    withId(id: string): CoverageRegionUriRoutesIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriRoutesIdRequestBuilder;
    withCount(count: number): CoverageRegionUriRoutesIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriRoutesIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRoutesIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRoutesIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriRoutesIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriRoutesIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriRoutesIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriRoutesIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriRoutesIdRequestBuilder;
    withSince(since: string): CoverageRegionUriRoutesIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriRoutesIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRoutesIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriRoutesIdRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class RoutesRequestBuilder {
    withExternalCode(externalCode: string): RoutesRequestBuilder;
    withStartPage(startPage: number): RoutesRequestBuilder;
    withCount(count: number): RoutesRequestBuilder;
    withDepth(depth: number): RoutesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): RoutesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): RoutesRequestBuilder;
    withHeadsign(headsign: string): RoutesRequestBuilder;
    withShowCodes(showCodes: boolean): RoutesRequestBuilder;
    withOdtLevel(odtLevel: string): RoutesRequestBuilder;
    withDistance(distance: number): RoutesRequestBuilder;
    withSince(since: string): RoutesRequestBuilder;
    withUntil(until: string): RoutesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): RoutesRequestBuilder;
    withFilter(filter: string): RoutesRequestBuilder;
    withOriginalId(originalId: string): RoutesRequestBuilder;
    get(success: (response: Routes) => void, error: (error: string) => void): void;
}

declare class CoverageRegionStatusRequestBuilder {
    withRegion(region: string): CoverageRegionStatusRequestBuilder;
    get(success: (response: Status_1) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatStopAreasRequestBuilder {
    withLat(lat: number): CoverageLonLatStopAreasRequestBuilder;
    withLon(lon: number): CoverageLonLatStopAreasRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatStopAreasRequestBuilder;
    withCount(count: number): CoverageLonLatStopAreasRequestBuilder;
    withDepth(depth: number): CoverageLonLatStopAreasRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopAreasRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopAreasRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatStopAreasRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatStopAreasRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatStopAreasRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatStopAreasRequestBuilder;
    withDistance(distance: number): CoverageLonLatStopAreasRequestBuilder;
    withSince(since: string): CoverageLonLatStopAreasRequestBuilder;
    withUntil(until: string): CoverageLonLatStopAreasRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopAreasRequestBuilder;
    withFilter(filter: string): CoverageLonLatStopAreasRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatStopAreasRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatStopAreasIdRequestBuilder {
    withLat(lat: number): CoverageLonLatStopAreasIdRequestBuilder;
    withLon(lon: number): CoverageLonLatStopAreasIdRequestBuilder;
    withId(id: string): CoverageLonLatStopAreasIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatStopAreasIdRequestBuilder;
    withCount(count: number): CoverageLonLatStopAreasIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatStopAreasIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopAreasIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopAreasIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatStopAreasIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatStopAreasIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatStopAreasIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatStopAreasIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatStopAreasIdRequestBuilder;
    withSince(since: string): CoverageLonLatStopAreasIdRequestBuilder;
    withUntil(until: string): CoverageLonLatStopAreasIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopAreasIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatStopAreasIdRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriStopAreasRequestBuilder {
    withLat(lat: number): CoverageLonLatUriStopAreasRequestBuilder;
    withLon(lon: number): CoverageLonLatUriStopAreasRequestBuilder;
    withUri(uri: string): CoverageLonLatUriStopAreasRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriStopAreasRequestBuilder;
    withCount(count: number): CoverageLonLatUriStopAreasRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriStopAreasRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopAreasRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopAreasRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriStopAreasRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriStopAreasRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriStopAreasRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriStopAreasRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriStopAreasRequestBuilder;
    withSince(since: string): CoverageLonLatUriStopAreasRequestBuilder;
    withUntil(until: string): CoverageLonLatUriStopAreasRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopAreasRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriStopAreasRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriStopAreasRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriStopAreasIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withId(id: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopAreasIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopAreasIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriStopAreasIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriStopAreasIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopAreasIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriStopAreasIdRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageRegionStopAreasRequestBuilder {
    withRegion(region: string): CoverageRegionStopAreasRequestBuilder;
    withStartPage(startPage: number): CoverageRegionStopAreasRequestBuilder;
    withCount(count: number): CoverageRegionStopAreasRequestBuilder;
    withDepth(depth: number): CoverageRegionStopAreasRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopAreasRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopAreasRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionStopAreasRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionStopAreasRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionStopAreasRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionStopAreasRequestBuilder;
    withDistance(distance: number): CoverageRegionStopAreasRequestBuilder;
    withSince(since: string): CoverageRegionStopAreasRequestBuilder;
    withUntil(until: string): CoverageRegionStopAreasRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionStopAreasRequestBuilder;
    withFilter(filter: string): CoverageRegionStopAreasRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionStopAreasRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageRegionStopAreasIdRequestBuilder {
    withRegion(region: string): CoverageRegionStopAreasIdRequestBuilder;
    withId(id: string): CoverageRegionStopAreasIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionStopAreasIdRequestBuilder;
    withCount(count: number): CoverageRegionStopAreasIdRequestBuilder;
    withDepth(depth: number): CoverageRegionStopAreasIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopAreasIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopAreasIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionStopAreasIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionStopAreasIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionStopAreasIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionStopAreasIdRequestBuilder;
    withDistance(distance: number): CoverageRegionStopAreasIdRequestBuilder;
    withSince(since: string): CoverageRegionStopAreasIdRequestBuilder;
    withUntil(until: string): CoverageRegionStopAreasIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionStopAreasIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionStopAreasIdRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriStopAreasRequestBuilder {
    withRegion(region: string): CoverageRegionUriStopAreasRequestBuilder;
    withUri(uri: string): CoverageRegionUriStopAreasRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriStopAreasRequestBuilder;
    withCount(count: number): CoverageRegionUriStopAreasRequestBuilder;
    withDepth(depth: number): CoverageRegionUriStopAreasRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopAreasRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopAreasRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriStopAreasRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriStopAreasRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriStopAreasRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriStopAreasRequestBuilder;
    withDistance(distance: number): CoverageRegionUriStopAreasRequestBuilder;
    withSince(since: string): CoverageRegionUriStopAreasRequestBuilder;
    withUntil(until: string): CoverageRegionUriStopAreasRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopAreasRequestBuilder;
    withFilter(filter: string): CoverageRegionUriStopAreasRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriStopAreasRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriStopAreasIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withId(id: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriStopAreasIdRequestBuilder;
    withCount(count: number): CoverageRegionUriStopAreasIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriStopAreasIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopAreasIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopAreasIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriStopAreasIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriStopAreasIdRequestBuilder;
    withSince(since: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriStopAreasIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopAreasIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriStopAreasIdRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class StopAreasRequestBuilder {
    withExternalCode(externalCode: string): StopAreasRequestBuilder;
    withStartPage(startPage: number): StopAreasRequestBuilder;
    withCount(count: number): StopAreasRequestBuilder;
    withDepth(depth: number): StopAreasRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): StopAreasRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): StopAreasRequestBuilder;
    withHeadsign(headsign: string): StopAreasRequestBuilder;
    withShowCodes(showCodes: boolean): StopAreasRequestBuilder;
    withOdtLevel(odtLevel: string): StopAreasRequestBuilder;
    withDistance(distance: number): StopAreasRequestBuilder;
    withSince(since: string): StopAreasRequestBuilder;
    withUntil(until: string): StopAreasRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): StopAreasRequestBuilder;
    withFilter(filter: string): StopAreasRequestBuilder;
    withOriginalId(originalId: string): StopAreasRequestBuilder;
    get(success: (response: StopAreas) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatStopPointsRequestBuilder {
    withLat(lat: number): CoverageLonLatStopPointsRequestBuilder;
    withLon(lon: number): CoverageLonLatStopPointsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatStopPointsRequestBuilder;
    withCount(count: number): CoverageLonLatStopPointsRequestBuilder;
    withDepth(depth: number): CoverageLonLatStopPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatStopPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatStopPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatStopPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatStopPointsRequestBuilder;
    withDistance(distance: number): CoverageLonLatStopPointsRequestBuilder;
    withSince(since: string): CoverageLonLatStopPointsRequestBuilder;
    withUntil(until: string): CoverageLonLatStopPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopPointsRequestBuilder;
    withFilter(filter: string): CoverageLonLatStopPointsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatStopPointsRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatStopPointsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatStopPointsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatStopPointsIdRequestBuilder;
    withId(id: string): CoverageLonLatStopPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatStopPointsIdRequestBuilder;
    withCount(count: number): CoverageLonLatStopPointsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatStopPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatStopPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatStopPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatStopPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatStopPointsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatStopPointsIdRequestBuilder;
    withSince(since: string): CoverageLonLatStopPointsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatStopPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopPointsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatStopPointsIdRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriStopPointsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriStopPointsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriStopPointsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriStopPointsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriStopPointsRequestBuilder;
    withCount(count: number): CoverageLonLatUriStopPointsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriStopPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriStopPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriStopPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriStopPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriStopPointsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriStopPointsRequestBuilder;
    withSince(since: string): CoverageLonLatUriStopPointsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriStopPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopPointsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriStopPointsRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriStopPointsRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriStopPointsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriStopPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriStopPointsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopPointsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageLonLatUriStopPointsIdRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionStopPointsRequestBuilder {
    withRegion(region: string): CoverageRegionStopPointsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionStopPointsRequestBuilder;
    withCount(count: number): CoverageRegionStopPointsRequestBuilder;
    withDepth(depth: number): CoverageRegionStopPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionStopPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionStopPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionStopPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionStopPointsRequestBuilder;
    withDistance(distance: number): CoverageRegionStopPointsRequestBuilder;
    withSince(since: string): CoverageRegionStopPointsRequestBuilder;
    withUntil(until: string): CoverageRegionStopPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionStopPointsRequestBuilder;
    withFilter(filter: string): CoverageRegionStopPointsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionStopPointsRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionStopPointsIdRequestBuilder {
    withRegion(region: string): CoverageRegionStopPointsIdRequestBuilder;
    withId(id: string): CoverageRegionStopPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionStopPointsIdRequestBuilder;
    withCount(count: number): CoverageRegionStopPointsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionStopPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionStopPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionStopPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionStopPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionStopPointsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionStopPointsIdRequestBuilder;
    withSince(since: string): CoverageRegionStopPointsIdRequestBuilder;
    withUntil(until: string): CoverageRegionStopPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionStopPointsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionStopPointsIdRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriStopPointsRequestBuilder {
    withRegion(region: string): CoverageRegionUriStopPointsRequestBuilder;
    withUri(uri: string): CoverageRegionUriStopPointsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriStopPointsRequestBuilder;
    withCount(count: number): CoverageRegionUriStopPointsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriStopPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopPointsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriStopPointsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriStopPointsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriStopPointsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriStopPointsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriStopPointsRequestBuilder;
    withSince(since: string): CoverageRegionUriStopPointsRequestBuilder;
    withUntil(until: string): CoverageRegionUriStopPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopPointsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriStopPointsRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriStopPointsRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriStopPointsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withId(id: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriStopPointsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriStopPointsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriStopPointsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopPointsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopPointsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriStopPointsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriStopPointsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriStopPointsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopPointsIdRequestBuilder;
    withOriginalId(originalId: string): CoverageRegionUriStopPointsIdRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class StopPointsRequestBuilder {
    withExternalCode(externalCode: string): StopPointsRequestBuilder;
    withStartPage(startPage: number): StopPointsRequestBuilder;
    withCount(count: number): StopPointsRequestBuilder;
    withDepth(depth: number): StopPointsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): StopPointsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): StopPointsRequestBuilder;
    withHeadsign(headsign: string): StopPointsRequestBuilder;
    withShowCodes(showCodes: boolean): StopPointsRequestBuilder;
    withOdtLevel(odtLevel: string): StopPointsRequestBuilder;
    withDistance(distance: number): StopPointsRequestBuilder;
    withSince(since: string): StopPointsRequestBuilder;
    withUntil(until: string): StopPointsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): StopPointsRequestBuilder;
    withFilter(filter: string): StopPointsRequestBuilder;
    withOriginalId(originalId: string): StopPointsRequestBuilder;
    get(success: (response: StopPoints) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriStopSchedulesRequestBuilder {
    withLat(lat: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withLon(lon: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withUri(uri: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withDuration(duration: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withCount(count: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopSchedulesRequestBuilder;
    withCalendar(calendar: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriStopSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageLonLatUriStopSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriStopSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopSchedulesRequestBuilder;
    get(success: (response: StopSchedules) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriStopSchedulesRequestBuilder {
    withRegion(region: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withUri(uri: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withFilter(filter: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withDuration(duration: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withDepth(depth: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withCount(count: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopSchedulesRequestBuilder;
    withCalendar(calendar: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withDistance(distance: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriStopSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): CoverageRegionUriStopSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriStopSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopSchedulesRequestBuilder;
    get(success: (response: StopSchedules) => void, error: (error: string) => void): void;
}

declare class StopSchedulesRequestBuilder {
    withFilter(filter: string): StopSchedulesRequestBuilder;
    withFromDatetime(fromDatetime: string): StopSchedulesRequestBuilder;
    withUntilDatetime(untilDatetime: string): StopSchedulesRequestBuilder;
    withDuration(duration: number): StopSchedulesRequestBuilder;
    withDepth(depth: number): StopSchedulesRequestBuilder;
    withCount(count: number): StopSchedulesRequestBuilder;
    withStartPage(startPage: number): StopSchedulesRequestBuilder;
    withMaxDateTimes(maxDateTimes: number): StopSchedulesRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): StopSchedulesRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): StopSchedulesRequestBuilder;
    withCalendar(calendar: string): StopSchedulesRequestBuilder;
    withDistance(distance: number): StopSchedulesRequestBuilder;
    withShowCodes(showCodes: boolean): StopSchedulesRequestBuilder;
    withDataFreshness(dataFreshness: string): StopSchedulesRequestBuilder;
    withItemsPerSchedule(itemsPerSchedule: number): StopSchedulesRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): StopSchedulesRequestBuilder;
    get(success: (response: StopSchedules) => void, error: (error: string) => void): void;
}

declare class CoverageRegionTrafficReportsRequestBuilder {
    withRegion(region: string): CoverageRegionTrafficReportsRequestBuilder;
    withDepth(depth: number): CoverageRegionTrafficReportsRequestBuilder;
    withCount(count: number): CoverageRegionTrafficReportsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionTrafficReportsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionTrafficReportsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTrafficReportsRequestBuilder;
    withDistance(distance: number): CoverageRegionTrafficReportsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionTrafficReportsRequestBuilder;
    get(success: (response: TrafficReports) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriTrafficReportsRequestBuilder {
    withRegion(region: string): CoverageRegionUriTrafficReportsRequestBuilder;
    withUri(uri: string): CoverageRegionUriTrafficReportsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriTrafficReportsRequestBuilder;
    withCount(count: number): CoverageRegionUriTrafficReportsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriTrafficReportsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTrafficReportsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTrafficReportsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriTrafficReportsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTrafficReportsRequestBuilder;
    get(success: (response: TrafficReports) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatTripsRequestBuilder {
    withLat(lat: number): CoverageLonLatTripsRequestBuilder;
    withLon(lon: number): CoverageLonLatTripsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatTripsRequestBuilder;
    withCount(count: number): CoverageLonLatTripsRequestBuilder;
    withDepth(depth: number): CoverageLonLatTripsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatTripsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatTripsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatTripsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatTripsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatTripsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatTripsRequestBuilder;
    withDistance(distance: number): CoverageLonLatTripsRequestBuilder;
    withSince(since: string): CoverageLonLatTripsRequestBuilder;
    withUntil(until: string): CoverageLonLatTripsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatTripsRequestBuilder;
    withFilter(filter: string): CoverageLonLatTripsRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatTripsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatTripsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatTripsIdRequestBuilder;
    withId(id: string): CoverageLonLatTripsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatTripsIdRequestBuilder;
    withCount(count: number): CoverageLonLatTripsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatTripsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatTripsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatTripsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatTripsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatTripsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatTripsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatTripsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatTripsIdRequestBuilder;
    withSince(since: string): CoverageLonLatTripsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatTripsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatTripsIdRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriTripsRequestBuilder {
    withLat(lat: number): CoverageLonLatUriTripsRequestBuilder;
    withLon(lon: number): CoverageLonLatUriTripsRequestBuilder;
    withUri(uri: string): CoverageLonLatUriTripsRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriTripsRequestBuilder;
    withCount(count: number): CoverageLonLatUriTripsRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriTripsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriTripsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriTripsRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriTripsRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriTripsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriTripsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriTripsRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriTripsRequestBuilder;
    withSince(since: string): CoverageLonLatUriTripsRequestBuilder;
    withUntil(until: string): CoverageLonLatUriTripsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriTripsRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriTripsRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriTripsIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriTripsIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriTripsIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriTripsIdRequestBuilder;
    withId(id: string): CoverageLonLatUriTripsIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriTripsIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriTripsIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriTripsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriTripsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriTripsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriTripsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriTripsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriTripsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriTripsIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriTripsIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriTripsIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriTripsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriTripsIdRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageRegionTripsRequestBuilder {
    withRegion(region: string): CoverageRegionTripsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionTripsRequestBuilder;
    withCount(count: number): CoverageRegionTripsRequestBuilder;
    withDepth(depth: number): CoverageRegionTripsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionTripsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTripsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionTripsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionTripsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionTripsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionTripsRequestBuilder;
    withDistance(distance: number): CoverageRegionTripsRequestBuilder;
    withSince(since: string): CoverageRegionTripsRequestBuilder;
    withUntil(until: string): CoverageRegionTripsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionTripsRequestBuilder;
    withFilter(filter: string): CoverageRegionTripsRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageRegionTripsIdRequestBuilder {
    withRegion(region: string): CoverageRegionTripsIdRequestBuilder;
    withId(id: string): CoverageRegionTripsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionTripsIdRequestBuilder;
    withCount(count: number): CoverageRegionTripsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionTripsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionTripsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTripsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionTripsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionTripsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionTripsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionTripsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionTripsIdRequestBuilder;
    withSince(since: string): CoverageRegionTripsIdRequestBuilder;
    withUntil(until: string): CoverageRegionTripsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionTripsIdRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriTripsRequestBuilder {
    withRegion(region: string): CoverageRegionUriTripsRequestBuilder;
    withUri(uri: string): CoverageRegionUriTripsRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriTripsRequestBuilder;
    withCount(count: number): CoverageRegionUriTripsRequestBuilder;
    withDepth(depth: number): CoverageRegionUriTripsRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTripsRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTripsRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriTripsRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriTripsRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriTripsRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriTripsRequestBuilder;
    withDistance(distance: number): CoverageRegionUriTripsRequestBuilder;
    withSince(since: string): CoverageRegionUriTripsRequestBuilder;
    withUntil(until: string): CoverageRegionUriTripsRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTripsRequestBuilder;
    withFilter(filter: string): CoverageRegionUriTripsRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriTripsIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriTripsIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriTripsIdRequestBuilder;
    withId(id: string): CoverageRegionUriTripsIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriTripsIdRequestBuilder;
    withCount(count: number): CoverageRegionUriTripsIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriTripsIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTripsIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTripsIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriTripsIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriTripsIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriTripsIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriTripsIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriTripsIdRequestBuilder;
    withSince(since: string): CoverageRegionUriTripsIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriTripsIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTripsIdRequestBuilder;
    get(success: (response: Trips) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriVehicleJourneysRequestBuilder {
    withLat(lat: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withLon(lon: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withUri(uri: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withCount(count: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withSince(since: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withUntil(until: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriVehicleJourneysRequestBuilder;
    withFilter(filter: string): CoverageLonLatUriVehicleJourneysRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatUriVehicleJourneysIdRequestBuilder {
    withLat(lat: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withLon(lon: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withUri(uri: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withId(id: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withCount(count: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withSince(since: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withUntil(until: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatVehicleJourneysRequestBuilder {
    withLat(lat: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withLon(lon: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withCount(count: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withDepth(depth: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatVehicleJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatVehicleJourneysRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatVehicleJourneysRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatVehicleJourneysRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatVehicleJourneysRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatVehicleJourneysRequestBuilder;
    withDistance(distance: number): CoverageLonLatVehicleJourneysRequestBuilder;
    withSince(since: string): CoverageLonLatVehicleJourneysRequestBuilder;
    withUntil(until: string): CoverageLonLatVehicleJourneysRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatVehicleJourneysRequestBuilder;
    withFilter(filter: string): CoverageLonLatVehicleJourneysRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageLonLatVehicleJourneysIdRequestBuilder {
    withLat(lat: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withLon(lon: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withId(id: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withStartPage(startPage: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withCount(count: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withDepth(depth: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withHeadsign(headsign: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withDistance(distance: number): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withSince(since: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withUntil(until: string): CoverageLonLatVehicleJourneysIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageLonLatVehicleJourneysIdRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriVehicleJourneysRequestBuilder {
    withRegion(region: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withUri(uri: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriVehicleJourneysRequestBuilder;
    withCount(count: number): CoverageRegionUriVehicleJourneysRequestBuilder;
    withDepth(depth: number): CoverageRegionUriVehicleJourneysRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriVehicleJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriVehicleJourneysRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriVehicleJourneysRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withDistance(distance: number): CoverageRegionUriVehicleJourneysRequestBuilder;
    withSince(since: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withUntil(until: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriVehicleJourneysRequestBuilder;
    withFilter(filter: string): CoverageRegionUriVehicleJourneysRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageRegionUriVehicleJourneysIdRequestBuilder {
    withRegion(region: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withUri(uri: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withId(id: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withCount(count: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withDepth(depth: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withDistance(distance: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withSince(since: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withUntil(until: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionUriVehicleJourneysIdRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageRegionVehicleJourneysRequestBuilder {
    withRegion(region: string): CoverageRegionVehicleJourneysRequestBuilder;
    withStartPage(startPage: number): CoverageRegionVehicleJourneysRequestBuilder;
    withCount(count: number): CoverageRegionVehicleJourneysRequestBuilder;
    withDepth(depth: number): CoverageRegionVehicleJourneysRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionVehicleJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionVehicleJourneysRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionVehicleJourneysRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionVehicleJourneysRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionVehicleJourneysRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionVehicleJourneysRequestBuilder;
    withDistance(distance: number): CoverageRegionVehicleJourneysRequestBuilder;
    withSince(since: string): CoverageRegionVehicleJourneysRequestBuilder;
    withUntil(until: string): CoverageRegionVehicleJourneysRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionVehicleJourneysRequestBuilder;
    withFilter(filter: string): CoverageRegionVehicleJourneysRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class CoverageRegionVehicleJourneysIdRequestBuilder {
    withRegion(region: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withId(id: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withStartPage(startPage: number): CoverageRegionVehicleJourneysIdRequestBuilder;
    withCount(count: number): CoverageRegionVehicleJourneysIdRequestBuilder;
    withDepth(depth: number): CoverageRegionVehicleJourneysIdRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): CoverageRegionVehicleJourneysIdRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionVehicleJourneysIdRequestBuilder;
    withExternalCode(externalCode: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withHeadsign(headsign: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withShowCodes(showCodes: boolean): CoverageRegionVehicleJourneysIdRequestBuilder;
    withOdtLevel(odtLevel: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withDistance(distance: number): CoverageRegionVehicleJourneysIdRequestBuilder;
    withSince(since: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withUntil(until: string): CoverageRegionVehicleJourneysIdRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): CoverageRegionVehicleJourneysIdRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class VehicleJourneysRequestBuilder {
    withExternalCode(externalCode: string): VehicleJourneysRequestBuilder;
    withStartPage(startPage: number): VehicleJourneysRequestBuilder;
    withCount(count: number): VehicleJourneysRequestBuilder;
    withDepth(depth: number): VehicleJourneysRequestBuilder;
    withForbiddenId(forbiddenId: Array<string>): VehicleJourneysRequestBuilder;
    withForbiddenUris(forbiddenUris: Array<string>): VehicleJourneysRequestBuilder;
    withHeadsign(headsign: string): VehicleJourneysRequestBuilder;
    withShowCodes(showCodes: boolean): VehicleJourneysRequestBuilder;
    withOdtLevel(odtLevel: string): VehicleJourneysRequestBuilder;
    withDistance(distance: number): VehicleJourneysRequestBuilder;
    withSince(since: string): VehicleJourneysRequestBuilder;
    withUntil(until: string): VehicleJourneysRequestBuilder;
    withDisableGeojson(disableGeojson: boolean): VehicleJourneysRequestBuilder;
    withFilter(filter: string): VehicleJourneysRequestBuilder;
    get(success: (response: VehicleJourneys) => void, error: (error: string) => void): void;
}

declare class Address {
    name: string;
    house_number: number;
    coord: Coord;
    label: string;
    administrative_regions: Array<Admin>;
    id: string;
}

declare class Admin {
    insee: string;
    name: string;
    level: number;
    coord: Coord;
    label: string;
    id: string;
    zip_code: string;
}

declare class Amount {
    value: number;
    unit: string;
}

declare class Arrivals {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    arrivals: Array<Passage>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Autocomplete {
    class: string;
    timeout: number;
}

declare class BetaEndpoints {
    message: string;
    id: string;
}

declare class CO2 {
    co2_emission: Amount;
}

declare class Calendar {
    active_periods: Array<CalendarPeriod>;
    name: string;
    validity_pattern: ValidityPattern;
    exceptions: Array<CalendarException>;
    week_pattern: WeekPattern;
    id: string;
}

declare class CalendarException {
    type: string;
    datetime: string;
}

declare class CalendarPeriod {
    begin: string;
    end: string;
}

declare class Calendars {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    calendars: Array<Calendar>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class CellLatSchema {
    min_lat: number;
    max_lat: number;
    center_lat: number;
}

declare class CellLonSchema {
    min_lon: number;
    center_lon: number;
    max_lon: number;
}

declare class Channel {
    content_type: string;
    id: string;
    types: Array<string>;
    name: string;
}

declare class CircuitBreaker {
    fail_counter: number;
    current_state: string;
    reset_timeout: number;
}

declare class Code {
    type: string;
    value: string;
}

declare class CommercialMode {
    id: string;
    name: string;
}

declare class CommercialModes {
    pagination: Pagination;
    commercial_modes: Array<CommercialMode>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Companie {
    codes: Array<Code>;
    id: string;
    name: string;
}

declare class Companies {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    companies: Array<Companie>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Context {
    car_direct_path: CO2;
}

declare class Contributor {
    website: string;
    id: string;
    license: string;
    name: string;
}

declare class Contributors {
    pagination: Pagination;
    contributors: Array<Contributor>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Coord {
    lat: string;
    lon: string;
}

declare class Cost {
    currency: string;
    value: string;
}

declare class Coverage {
    status: string;
    dataset_created_at: string;
    name: string;
    start_production_date: string;
    shape: string;
    end_production_date: string;
    error: CoverageError;
    last_load_at: string;
    id: string;
}

declare class CoverageError {
    code: string;
    value: string;
}

declare class Coverages {
    regions: Array<Coverage>;
}

declare class Dataset {
    realtime_level: string;
    description: string;
    system: string;
    start_validation_date: string;
    end_validation_date: string;
    contributor: Contributor;
    id: string;
}

declare class Datasets {
    pagination: Pagination;
    datasets: Array<Dataset>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class DateTimeType {
    date_time: string;
    additional_informations: Array<string>;
    base_date_time: string;
    data_freshness: string;
    links: Array<LinkSchema>;
}

declare class Departures {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    departures: Array<Passage>;
    error: ModelError;
}

declare class Disruption {
    disruption_id: string;
    status: string;
    severity: Severity;
    tags: Array<string>;
    application_periods: Array<Period>;
    impact_id: string;
    messages: Array<Message>;
    updated_at: string;
    uri: string;
    impacted_objects: Array<Impacted>;
    id: string;
    contributor: string;
    category: string;
    cause: string;
    disruption_uri: string;
}

declare class Disruptions {
    disruptions: Array<Disruption>;
    pagination: Pagination;
    error: ModelError;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
}

declare class Durations {
    walking: number;
    total: number;
}

declare class Exception {
    date: string;
    type: string;
    id: string;
}

declare class Fare {
    found: boolean;
    total: Cost;
    links: Array<LinkSchema>;
}

declare class FeedPublisher {
    url: string;
    id: string;
    license: string;
    name: string;
}

declare class GeoStatus {
    nb_admins_from_cities: number;
    street_network_sources: Array<string>;
    poi_sources: Array<string>;
    nb_addresses: number;
    nb_admins: number;
    nb_pois: number;
    nb_ways: number;
}

declare class GeoStatus_1 {
    geo_status: GeoStatus;
}

declare class GraphicalIsrochone {
    max_duration: number;
    from: Place;
    geojson: GraphicalIsrochone_geojson;
    min_duration: number;
    min_date_time: string;
    to: Place;
    requested_date_time: string;
    max_date_time: string;
}

declare class GraphicalIsrochone_1 {
    isochrones: Array<GraphicalIsrochone>;
    feed_publishers: Array<FeedPublisher>;
    warnings: Array<BetaEndpoints>;
    links: Array<LinkSchema>;
    error: ModelError;
}

declare class GraphicalIsrochone_geojson {
    coordinates: Array<Array<Array<Array<number>>>>;
}

declare class Header {
    display_informations: VJDisplayInformation;
    additional_informations: Array<string>;
    links: Array<LinkSchema>;
}

declare class HeatMap {
    to: Place;
    requested_date_time: string;
    from: Place;
    heat_matrix: HeatMatrixSchema;
}

declare class HeatMap_1 {
    feed_publishers: Array<FeedPublisher>;
    warnings: Array<BetaEndpoints>;
    heat_maps: Array<HeatMap>;
    links: Array<LinkSchema>;
    error: ModelError;
}

declare class HeatMatrixSchema {
    line_headers: Array<LineHeadersSchema>;
    lines: Array<LinesSchema>;
}

declare class Impacted {
    impacted_stops: Array<ImpactedStop>;
    pt_object: PtObject;
    impacted_section: ImpactedSection;
}

declare class ImpactedSection {
    to: PtObject;
    from: PtObject;
}

declare class ImpactedStop {
    amended_arrival_time: string;
    stop_point: StopPoint;
    stop_time_effect: string;
    departure_status: string;
    amended_departure_time: string;
    base_arrival_time: string;
    cause: string;
    base_departure_time: string;
    arrival_status: string;
}

declare class Journey {
    status: string;
    fare: Fare;
    from: Place;
    tags: Array<string>;
    nb_transfers: number;
    durations: Durations;
    arrival_date_time: string;
    calendars: Array<Calendar>;
    departure_date_time: string;
    to: Place;
    requested_date_time: string;
    co2_emission: Amount;
    type: string;
    duration: number;
    sections: Array<Section>;
    debug: JourneyDebug;
}

declare class JourneyDebug {
    nb_vj_extentions: number;
    nb_sections: number;
    internal_id: string;
    streetnetwork_duration: number;
    transfer_duration: number;
    min_waiting_duration: number;
}

declare class JourneyPattern {
    route: Route;
    journey_pattern_points: Array<JourneyPatternPoint>;
    name: string;
    id: string;
}

declare class JourneyPatternPoint {
    stop_point: StopPoint;
    id: string;
}

declare class JourneyPatternPoints {
    pagination: Pagination;
    journey_pattern_points: Array<JourneyPatternPoint>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class JourneyPatterns {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    journey_patterns: Array<JourneyPattern>;
    error: ModelError;
}

declare class Journeys {
    tickets: Array<Ticket>;
    links: Array<LinkSchema>;
    journeys: Array<Journey>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    context: Context;
    error: ModelError;
    exceptions: Array<Exception>;
}

declare class Line {
    comment: string;
    properties: Array<Property>;
    code: string;
    network: Network;
    links: Array<LinkSchema>;
    color: string;
    routes: Array<Route>;
    geojson: MultiLineStringSchema;
    text_color: string;
    physical_modes: Array<PhysicalMode>;
    codes: Array<Code>;
    comments: Array<ModelComment>;
    closing_time: string;
    opening_time: string;
    commercial_mode: CommercialMode;
    id: string;
    line_groups: Array<LineGroup>;
    name: string;
}

declare class LineGroup {
    name: string;
    lines: Array<Line>;
    main_line: Line;
    comments: Array<ModelComment>;
    id: string;
}

declare class LineGroups {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    line_groups: Array<LineGroup>;
}

declare class LineHeadersSchema {
    cell_lat: CellLatSchema;
}

declare class LineReport {
    line: Line;
    pt_objects: Array<PtObject>;
}

declare class LineReports {
    pagination: Pagination;
    warnings: Array<BetaEndpoints>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    line_reports: Array<LineReport>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Lines {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    lines: Array<Line>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class LinesSchema {
    duration: Array<number>;
    cell_lon: CellLonSchema;
}

declare class LinkSchema {
    title: string;
    internal: boolean;
    rel: string;
    templated: boolean;
    type: string;
    id: string;
}

declare class Message {
    text: string;
    channel: Channel;
}

declare class ModelComment {
    type: string;
    value: string;
}

declare class ModelError {
    message: string;
    id: string;
}

declare class MultiLineStringSchema {
    type: string;
    coordinates: Array<Array<Array<number>>>;
}

declare class Network {
    codes: Array<Code>;
    lines: Line;
    id: string;
    links: Array<LinkSchema>;
    name: string;
}

declare class Networks {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    networks: Array<Network>;
}

declare class Note {
    category: string;
    type: string;
    id: string;
    value: string;
}

declare class Pagination {
    start_page: number;
    items_on_page: number;
    items_per_page: number;
    total_result: number;
}

declare class Parameters {
    min_car: number;
    max_duration: number;
    journey_order: string;
    min_tc_with_bss: number;
    max_bss_duration_to_pt: number;
    max_nb_transfers: number;
    bike_speed: number;
    walking_transfer_penalty: number;
    max_additional_connections: number;
    walking_speed: number;
    max_duration_fallback_mode: string;
    priority: number;
    car_speed: number;
    min_tc_with_car: number;
    min_tc_with_bike: number;
    successive_physical_mode_to_limit_id: string;
    min_bike: number;
    max_walking_duration_to_pt: number;
    night_bus_filter_base_factor: number;
    max_bike_duration_to_pt: number;
    max_duration_criteria: string;
    bss_provider: boolean;
    scenario: string;
    max_car_duration_to_pt: number;
    min_bss: number;
    min_duration_too_long_journey: number;
    night_bus_filter_max_factor: number;
    factor_too_long_journey: number;
    bss_speed: number;
}

declare class Passage {
    display_informations: VJDisplayInformation;
    stop_point: StopPoint;
    route: Route;
    links: Array<LinkSchema>;
    stop_date_time: StopDateTime;
}

declare class Path {
    duration: number;
    direction: number;
    length: number;
    name: string;
}

declare class Period {
    begin: string;
    end: string;
}

declare class PhysicalMode {
    id: string;
    name: string;
}

declare class PhysicalModes {
    pagination: Pagination;
    physical_modes: Array<PhysicalMode>;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Place {
    embedded_type: string;
    stop_point: StopPoint;
    administrative_region: Admin;
    name: string;
    address: Address;
    poi: Poi;
    quality: number;
    id: string;
    stop_area: StopArea;
}

declare class PlaceNearby {
    embedded_type: string;
    stop_point: StopPoint;
    administrative_region: Admin;
    name: string;
    distance: string;
    address: Address;
    poi: Poi;
    quality: number;
    id: string;
    stop_area: StopArea;
}

declare class Places {
    disruptions: Array<Disruption>;
    error: ModelError;
    places: Array<Place>;
    feed_publishers: Array<FeedPublisher>;
}

declare class PlacesNearby {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    places_nearby: Array<PlaceNearby>;
}

declare class Poi {
    poi_type: PoiType;
    name: string;
    coord: Coord;
    label: string;
    administrative_regions: Array<Admin>;
    address: Address;
    id: string;
    properties: Array<string>;
    stands: Stands;
}

declare class PoiType {
    id: string;
    name: string;
}

declare class PoiTypes {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    poi_types: Array<PoiType>;
}

declare class Pois {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    pois: Array<Poi>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class Property {
    name: string;
    value: string;
}

declare class PtObject {
    embedded_type: string;
    stop_point: StopPoint;
    name: string;
    route: Route;
    stop_area: StopArea;
    commercial_mode: CommercialMode;
    id: string;
    line: Line;
    quality: number;
    trip: Trip;
    network: Network;
}

declare class PtObjects {
    disruptions: Array<Disruption>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    pt_objects: Array<PtObject>;
}

declare class Route {
    direction: Place;
    codes: Array<Code>;
    name: string;
    links: Array<LinkSchema>;
    physical_modes: Array<PhysicalMode>;
    is_frequence: string;
    comments: Array<ModelComment>;
    direction_type: string;
    geojson: MultiLineStringSchema;
    stop_points: Array<StopPoint>;
    line: Line;
    id: string;
}

declare class RouteDisplayInformation {
    direction: string;
    code: string;
    network: string;
    links: Array<LinkSchema>;
    color: string;
    label: string;
    commercial_mode: string;
    text_color: string;
    name: string;
}

declare class RouteSchedule {
    display_informations: RouteDisplayInformation;
    table: Table;
    additional_informations: string;
    geojson: MultiLineStringSchema;
    links: Array<LinkSchema>;
}

declare class RouteSchedules {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    route_schedules: Array<RouteSchedule>;
}

declare class Routes {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    routes: Array<Route>;
}

declare class Row {
    stop_point: StopPoint;
    date_times: Array<DateTimeType>;
}

declare class Section {
    transfer_type: string;
    from: Place;
    links: Array<LinkSchema>;
    arrival_date_time: string;
    additional_informations: Array<string>;
    departure_date_time: string;
    display_informations: VJDisplayInformation;
    to: Place;
    base_arrival_date_time: string;
    base_departure_date_time: string;
    co2_emission: Amount;
    geojson: SectionGeoJsonSchema;
    duration: number;
    path: Array<Path>;
    stop_date_times: Array<StopDateTime>;
    type: string;
    id: string;
    data_freshness: string;
    mode: string;
}

declare class SectionGeoJsonSchema {
    type: string;
    coordinates: Array<Array<number>>;
}

declare class Severity {
    color: string;
    priority: number;
    name: string;
    effect: string;
}

declare class Stands {
    available_places: number;
    available_bikes: number;
    total_stands: number;
}

declare class Status {
    status: string;
    dataset_created_at: string;
    traveler_profiles: Array<TravelerProfiles>;
    is_realtime_loaded: boolean;
    parameters: Parameters;
    kraken_version: string;
    start_production_date: string;
    is_open_service: boolean;
    nb_threads: number;
    is_connected_to_rabbitmq: boolean;
    autocomplete: Autocomplete;
    data_version: number;
    last_load_at: string;
    end_production_date: string;
    realtime_proxies: Array<string>;
    publication_date: string;
    realtime_contributors: Array<string>;
    street_networks: Array<StreetNetwork>;
    last_load_status: boolean;
    is_open_data: boolean;
    last_rt_data_loaded: string;
}

declare class Status_1 {
    status: Status;
}

declare class StopArea {
    comment: string;
    codes: Array<Code>;
    name: string;
    links: Array<LinkSchema>;
    physical_modes: Array<PhysicalMode>;
    comments: Array<ModelComment>;
    label: string;
    commercial_modes: Array<CommercialMode>;
    coord: Coord;
    administrative_regions: Array<Admin>;
    timezone: string;
    stop_points: Array<StopPoint>;
    id: string;
}

declare class StopAreas {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    stop_areas: Array<StopArea>;
}

declare class StopDateTime {
    stop_point: StopPoint;
    links: Array<LinkSchema>;
    arrival_date_time: string;
    additional_informations: Array<string>;
    departure_date_time: string;
    base_arrival_date_time: string;
    base_departure_date_time: string;
    data_freshness: string;
}

declare class StopPoint {
    comment: string;
    codes: Array<Code>;
    name: string;
    links: Array<LinkSchema>;
    physical_modes: Array<PhysicalMode>;
    coord: Coord;
    label: string;
    equipments: Array<string>;
    commercial_modes: Array<CommercialMode>;
    comments: Array<ModelComment>;
    administrative_regions: Array<Admin>;
    address: Address;
    id: string;
    stop_area: StopArea;
}

declare class StopPoints {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    stop_points: Array<StopPoint>;
}

declare class StopSchedule {
    stop_point: StopPoint;
    links: Array<LinkSchema>;
    date_times: Array<DateTimeType>;
    route: Route;
    additional_informations: string;
    display_informations: RouteDisplayInformation;
}

declare class StopSchedules {
    stop_schedules: Array<StopSchedule>;
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
}

declare class StopTime {
    stop_point: StopPoint;
    headsign: string;
    journey_pattern_point: JourneyPatternPoint;
    departure_time: string;
    arrival_time: string;
}

declare class StreetNetwork {
    id: string;
    modes: Array<string>;
    class: string;
    timeout: number;
    circuit_breaker: CircuitBreaker;
}

declare class Table {
    headers: Array<Header>;
    rows: Array<Row>;
}

declare class Ticket {
    comment: string;
    name: string;
    links: Array<LinkSchema>;
    cost: Cost;
    found: boolean;
    id: string;
}

declare class TrafficReport {
    vehicle_journeys: Array<VehicleJourney>;
    lines: Array<Line>;
    network: Network;
    stop_areas: Array<StopArea>;
}

declare class TrafficReports {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    traffic_reports: Array<TrafficReport>;
    error: ModelError;
}

declare class TravelerProfiles {
    last_section_mode: Array<string>;
    walking_speed: number;
    is_from_db: boolean;
    traveler_type: string;
    wheelchair: boolean;
    max_bss_duration_to_pt: number;
    max_walking_duration_to_pt: number;
    first_section_mode: Array<string>;
    max_bike_duration_to_pt: number;
    bike_speed: number;
    car_speed: number;
    max_car_duration_to_pt: number;
    bss_speed: number;
}

declare class Trip {
    id: string;
    name: string;
}

declare class Trips {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    trips: Array<Trip>;
}

declare class VJDisplayInformation {
    direction: string;
    code: string;
    network: string;
    links: Array<LinkSchema>;
    color: string;
    name: string;
    physical_mode: string;
    headsign: string;
    label: string;
    equipments: Array<string>;
    text_color: string;
    headsigns: Array<string>;
    commercial_mode: string;
    description: string;
}

declare class ValidityPattern {
    beginning_date: string;
    days: string;
}

declare class VehicleJourney {
    comment: string;
    codes: Array<Code>;
    name: string;
    journey_pattern: JourneyPattern;
    disruptions: Array<LinkSchema>;
    calendars: Array<Calendar>;
    stop_times: Array<StopTime>;
    comments: Array<ModelComment>;
    validity_pattern: ValidityPattern;
    id: string;
    trip: Trip;
}

declare class VehicleJourneys {
    pagination: Pagination;
    disruptions: Array<Disruption>;
    notes: Array<Note>;
    feed_publishers: Array<FeedPublisher>;
    error: ModelError;
    vehicle_journeys: Array<VehicleJourney>;
}

declare class WeekPattern {
    monday: boolean;
    tuesday: boolean;
    friday: boolean;
    wednesday: boolean;
    thursday: boolean;
    sunday: boolean;
    saturday: boolean;
}

