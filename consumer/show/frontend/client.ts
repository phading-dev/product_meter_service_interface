import { SyncMeterReadingRequestBody, SyncMeterReadingResponse, SYNC_METER_READING, ListMeterReadingPerEpisodeRequestBody, ListMeterReadingPerEpisodeResponse, LIST_METER_READING_PER_EPISODE, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function syncMeterReading(
  client: WebClientInterface,
  body: SyncMeterReadingRequestBody,
  options?: WebClientOptions,
): Promise<SyncMeterReadingResponse> {
  return client.send(
    {
      descriptor: SYNC_METER_READING,
      body,
    },
    options,
  );
}

export function listMeterReadingPerEpisode(
  client: WebClientInterface,
  body: ListMeterReadingPerEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<ListMeterReadingPerEpisodeResponse> {
  return client.send(
    {
      descriptor: LIST_METER_READING_PER_EPISODE,
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
