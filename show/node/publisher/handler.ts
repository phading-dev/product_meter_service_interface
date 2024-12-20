import { GetDailyBatchRequestBody, GET_DAILY_BATCH, GetDailyBatchResponse, ProcessDailyMeterReadingRequestBody, PROCESS_DAILY_METER_READING, ProcessDailyMeterReadingResponse, LoadPublishersToProcessMonthlyRequestBody, LOAD_PUBLISHERS_TO_PROCESS_MONTHLY, LoadPublishersToProcessMonthlyResponse, GetMonthlyBatchRequestBody, GET_MONTHLY_BATCH, GetMonthlyBatchResponse, ProcessMonthlyMeterReadingRequestBody, PROCESS_MONTHLY_METER_READING, ProcessMonthlyMeterReadingResponse } from './interface';
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

export abstract class LoadPublishersToProcessMonthlyHandlerInterface implements NodeHandlerInterface {
  public descriptor = LOAD_PUBLISHERS_TO_PROCESS_MONTHLY;
  public abstract handle(
    loggingPrefix: string,
    body: LoadPublishersToProcessMonthlyRequestBody,
  ): Promise<LoadPublishersToProcessMonthlyResponse>;
}

export abstract class GetMonthlyBatchHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_MONTHLY_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetMonthlyBatchRequestBody,
  ): Promise<GetMonthlyBatchResponse>;
}

export abstract class ProcessMonthlyMeterReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_MONTHLY_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessMonthlyMeterReadingRequestBody,
  ): Promise<ProcessMonthlyMeterReadingResponse>;
}
