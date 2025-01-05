import { RecordUploadedRequestBody, RecordUploadedResponse, RECORD_UPLOADED, RecordStorageStartRequestBody, RecordStorageStartResponse, RECORD_STORAGE_START, RecordStorageEndRequestBody, RecordStorageEndResponse, RECORD_STORAGE_END, ListMeterReadingPerSeasonRequestBody, ListMeterReadingPerSeasonResponse, LIST_METER_READING_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function recordUploaded(
  client: WebClientInterface,
  body: RecordUploadedRequestBody,
  options?: WebClientOptions,
): Promise<RecordUploadedResponse> {
  return client.send(
    {
      descriptor: RECORD_UPLOADED,
      body,
    },
    options,
  );
}

export function recordStorageStart(
  client: WebClientInterface,
  body: RecordStorageStartRequestBody,
  options?: WebClientOptions,
): Promise<RecordStorageStartResponse> {
  return client.send(
    {
      descriptor: RECORD_STORAGE_START,
      body,
    },
    options,
  );
}

export function recordStorageEnd(
  client: WebClientInterface,
  body: RecordStorageEndRequestBody,
  options?: WebClientOptions,
): Promise<RecordStorageEndResponse> {
  return client.send(
    {
      descriptor: RECORD_STORAGE_END,
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
