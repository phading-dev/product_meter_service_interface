import { SyncMeterReadingRequestBody, SYNC_METER_READING, SyncMeterReadingResponse, ListMeterReadingPerSeasonRequestBody, LIST_METER_READING_PER_SEASON, ListMeterReadingPerSeasonResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class SyncMeterReadingHandlerInterface implements WebHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    sessionStr: string,
  ): Promise<SyncMeterReadingResponse>;
}

export abstract class ListMeterReadingPerSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_METER_READING_PER_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingPerSeasonRequestBody,
    sessionStr: string,
  ): Promise<ListMeterReadingPerSeasonResponse>;
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
