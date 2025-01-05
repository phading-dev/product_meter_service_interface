import { RecordUploadedRequestBody, RECORD_UPLOADED, RecordUploadedResponse, RecordStorageStartRequestBody, RECORD_STORAGE_START, RecordStorageStartResponse, RecordStorageEndRequestBody, RECORD_STORAGE_END, RecordStorageEndResponse, ListMeterReadingPerSeasonRequestBody, LIST_METER_READING_PER_SEASON, ListMeterReadingPerSeasonResponse, ListMeterReadingsPerDayRequestBody, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerDayResponse, ListMeterReadingsPerMonthRequestBody, LIST_METER_READINGS_PER_MONTH, ListMeterReadingsPerMonthResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecordUploadedHandlerInterface implements WebHandlerInterface {
  public descriptor = RECORD_UPLOADED;
  public abstract handle(
    loggingPrefix: string,
    body: RecordUploadedRequestBody,
    sessionStr: string,
  ): Promise<RecordUploadedResponse>;
}

export abstract class RecordStorageStartHandlerInterface implements WebHandlerInterface {
  public descriptor = RECORD_STORAGE_START;
  public abstract handle(
    loggingPrefix: string,
    body: RecordStorageStartRequestBody,
    sessionStr: string,
  ): Promise<RecordStorageStartResponse>;
}

export abstract class RecordStorageEndHandlerInterface implements WebHandlerInterface {
  public descriptor = RECORD_STORAGE_END;
  public abstract handle(
    loggingPrefix: string,
    body: RecordStorageEndRequestBody,
    sessionStr: string,
  ): Promise<RecordStorageEndResponse>;
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
