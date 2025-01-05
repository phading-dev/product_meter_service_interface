import { RecordWatchTimeRequestBody, RecordWatchTimeResponse, RECORD_WATCH_TIME, RecordNetworkTransmissionRequestBody, RecordNetworkTransmissionResponse, RECORD_NETWORK_TRANSMISSION, ListMeterReadingPerSeasonRequestBody, ListMeterReadingPerSeasonResponse, LIST_METER_READING_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function recordWatchTime(
  client: WebClientInterface,
  body: RecordWatchTimeRequestBody,
  options?: WebClientOptions,
): Promise<RecordWatchTimeResponse> {
  return client.send(
    {
      descriptor: RECORD_WATCH_TIME,
      body,
    },
    options,
  );
}

export function recordNetworkTransmission(
  client: WebClientInterface,
  body: RecordNetworkTransmissionRequestBody,
  options?: WebClientOptions,
): Promise<RecordNetworkTransmissionResponse> {
  return client.send(
    {
      descriptor: RECORD_NETWORK_TRANSMISSION,
      body,
    },
    options,
  );
}

export function listMeterReadingPerSeason(
  client: WebClientInterface,
  body: ListMeterReadingPerSeasonRequestBody,
  options?: WebClientOptions,
): Promise<ListMeterReadingPerSeasonResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READING_PER_SEASON,
      body,
    },
    options,
  );
}

export function listMeterReadingsPerDay(
  client: WebClientInterface,
  body: ListMeterReadingsPerDayRequestBody,
  options?: WebClientOptions,
): Promise<ListMeterReadingsPerDayResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_DAY,
      body,
    },
    options,
  );
}

export function listMeterReadingsPerMonth(
  client: WebClientInterface,
  body: ListMeterReadingsPerMonthRequestBody,
  options?: WebClientOptions,
): Promise<ListMeterReadingsPerMonthResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READINGS_PER_MONTH,
      body,
    },
    options,
  );
}
