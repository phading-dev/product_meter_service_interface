import { RecordWatchTimeRequestBody, RECORD_WATCH_TIME, RecordWatchTimeResponse, RecordNetworkTransmissionRequestBody, RECORD_NETWORK_TRANSMISSION, RecordNetworkTransmissionResponse, ListMeterReadingPerSeasonRequestBody, LIST_METER_READING_PER_SEASON, ListMeterReadingPerSeasonResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecordWatchTimeHandlerInterface implements WebHandlerInterface {
  public descriptor = RECORD_WATCH_TIME;
  public abstract handle(
    loggingPrefix: string,
    body: RecordWatchTimeRequestBody,
    sessionStr: string,
  ): Promise<RecordWatchTimeResponse>;
}

export abstract class RecordNetworkTransmissionHandlerInterface implements WebHandlerInterface {
  public descriptor = RECORD_NETWORK_TRANSMISSION;
  public abstract handle(
    loggingPrefix: string,
    body: RecordNetworkTransmissionRequestBody,
    sessionStr: string,
  ): Promise<RecordNetworkTransmissionResponse>;
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
