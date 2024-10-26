import { SyncMeterReadingRequestBody, SYNC_METER_READING, SyncMeterReadingResponse, ListMeterReadingPerEpisodeRequestBody, LIST_METER_READING_PER_EPISODE, ListMeterReadingPerEpisodeResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class SyncMeterReadingHandlerInterface implements WebHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    sessionStr: string,
  ): Promise<SyncMeterReadingResponse>;
}

export abstract class ListMeterReadingPerEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READING_PER_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingPerEpisodeRequestBody,
    sessionStr: string,
  ): Promise<ListMeterReadingPerEpisodeResponse>;
}

export abstract class ListMeterReadingsPerDayHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_DAY;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerDayRequestBody,
    sessionStr: string,
  ): Promise<ListMeterReadingsPerDayResponse>;
}

export abstract class ListMeterReadingsPerMonthHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_MONTH;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerMonthRequestBody,
    sessionStr: string,
  ): Promise<ListMeterReadingsPerMonthResponse>;
}
