import { GetDailyBatchRequestBody, GET_DAILY_BATCH, GetDailyBatchResponse, ProcessDailyMeterReadingRequestBody, PROCESS_DAILY_METER_READING, ProcessDailyMeterReadingResponse, GetUnprocessedDateRequestBody, GET_UNPROCESSED_DATE, GetUnprocessedDateResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetDailyBatchHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_DAILY_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetDailyBatchRequestBody,
  ): Promise<GetDailyBatchResponse>;
}

export abstract class ProcessDailyMeterReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_DAILY_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessDailyMeterReadingRequestBody,
  ): Promise<ProcessDailyMeterReadingResponse>;
}

export abstract class GetUnprocessedDateHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_UNPROCESSED_DATE;
  public abstract handle(
    loggingPrefix: string,
    body: GetUnprocessedDateRequestBody,
  ): Promise<GetUnprocessedDateResponse>;
}
