import { RecordWatchTimeRequestBody, RecordWatchTimeResponse, RECORD_WATCH_TIME, RecordNetworkTransmissionRequestBody, RecordNetworkTransmissionResponse, RECORD_NETWORK_TRANSMISSION, ListMeterReadingPerSeasonRequestBody, ListMeterReadingPerSeasonResponse, LIST_METER_READING_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newRecordWatchTimeRequest(
  body: RecordWatchTimeRequestBody,
): ClientRequestInterface<RecordWatchTimeResponse> {
  return {
    descriptor: RECORD_WATCH_TIME,
    body,
  };
}

export function newRecordNetworkTransmissionRequest(
  body: RecordNetworkTransmissionRequestBody,
): ClientRequestInterface<RecordNetworkTransmissionResponse> {
  return {
    descriptor: RECORD_NETWORK_TRANSMISSION,
    body,
  };
}

export function newListMeterReadingPerSeasonRequest(
  body: ListMeterReadingPerSeasonRequestBody,
): ClientRequestInterface<ListMeterReadingPerSeasonResponse> {
  return {
    descriptor: LIST_METER_READING_PER_SEASON,
    body,
  };
}

export function newListMeterReadingsPerDayRequest(
  body: ListMeterReadingsPerDayRequestBody,
): ClientRequestInterface<ListMeterReadingsPerDayResponse> {
  return {
    descriptor: LIST_METER_READINGS_PER_DAY,
    body,
  };
}

export function newListMeterReadingsPerMonthRequest(
  body: ListMeterReadingsPerMonthRequestBody,
): ClientRequestInterface<ListMeterReadingsPerMonthResponse> {
  return {
    descriptor: LIST_METER_READINGS_PER_MONTH,
    body,
  };
}
