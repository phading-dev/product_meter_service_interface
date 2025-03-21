import { ListMeterReadingPerSeasonRequestBody, LIST_METER_READING_PER_SEASON, ListMeterReadingPerSeasonResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class ListMeterReadingPerSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_METER_READING_PER_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingPerSeasonRequestBody,
    authStr: string,
  ): Promise<ListMeterReadingPerSeasonResponse>;
}

export abstract class ListMeterReadingsPerDayHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_DAY;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerDayRequestBody,
    authStr: string,
  ): Promise<ListMeterReadingsPerDayResponse>;
}

export abstract class ListMeterReadingsPerMonthHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_METER_READINGS_PER_MONTH;
  public abstract handle(
    loggingPrefix: string,
    body: ListMeterReadingsPerMonthRequestBody,
    authStr: string,
  ): Promise<ListMeterReadingsPerMonthResponse>;
}
