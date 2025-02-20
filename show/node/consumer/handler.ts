import { GetDailyBatchRequestBody, GET_DAILY_BATCH, GetDailyBatchResponse, ProcessDailyMeterReadingRequestBody, PROCESS_DAILY_METER_READING, ProcessDailyMeterReadingResponse, GetMonthlyBatchRequestBody, GET_MONTHLY_BATCH, GetMonthlyBatchResponse, ProcessMonthlyMeterReadingRequestBody, PROCESS_MONTHLY_METER_READING, ProcessMonthlyMeterReadingResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetDailyBatchHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_DAILY_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetDailyBatchRequestBody,
  ): Promise<GetDailyBatchResponse>;
}

export abstract class ProcessDailyMeterReadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_DAILY_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessDailyMeterReadingRequestBody,
  ): Promise<ProcessDailyMeterReadingResponse>;
}

export abstract class GetMonthlyBatchHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_MONTHLY_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetMonthlyBatchRequestBody,
  ): Promise<GetMonthlyBatchResponse>;
}

export abstract class ProcessMonthlyMeterReadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_MONTHLY_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessMonthlyMeterReadingRequestBody,
  ): Promise<ProcessMonthlyMeterReadingResponse>;
}
