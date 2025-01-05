import { RecordUploadedRequestBody, RECORD_UPLOADED, RecordUploadedResponse, RecordStorageStartRequestBody, RECORD_STORAGE_START, RecordStorageStartResponse, RecordStorageEndRequestBody, RECORD_STORAGE_END, RecordStorageEndResponse, GetDailyWatchBatchRequestBody, GET_DAILY_WATCH_BATCH, GetDailyWatchBatchResponse, ProcessDailyWatchReadingRequestBody, PROCESS_DAILY_WATCH_READING, ProcessDailyWatchReadingResponse, GetDailyStorageBatchRequestBody, GET_DAILY_STORAGE_BATCH, GetDailyStorageBatchResponse, ProcessDailyStorageReadingRequestBody, PROCESS_DAILY_STORAGE_READING, ProcessDailyStorageReadingResponse, GetMonthlyBatchRequestBody, GET_MONTHLY_BATCH, GetMonthlyBatchResponse, ProcessMonthlyMeterReadingRequestBody, PROCESS_MONTHLY_METER_READING, ProcessMonthlyMeterReadingResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecordUploadedHandlerInterface implements NodeHandlerInterface {
  public descriptor = RECORD_UPLOADED;
  public abstract handle(
    loggingPrefix: string,
    body: RecordUploadedRequestBody,
  ): Promise<RecordUploadedResponse>;
}

export abstract class RecordStorageStartHandlerInterface implements NodeHandlerInterface {
  public descriptor = RECORD_STORAGE_START;
  public abstract handle(
    loggingPrefix: string,
    body: RecordStorageStartRequestBody,
  ): Promise<RecordStorageStartResponse>;
}

export abstract class RecordStorageEndHandlerInterface implements NodeHandlerInterface {
  public descriptor = RECORD_STORAGE_END;
  public abstract handle(
    loggingPrefix: string,
    body: RecordStorageEndRequestBody,
  ): Promise<RecordStorageEndResponse>;
}

export abstract class GetDailyWatchBatchHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_DAILY_WATCH_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetDailyWatchBatchRequestBody,
  ): Promise<GetDailyWatchBatchResponse>;
}

export abstract class ProcessDailyWatchReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_DAILY_WATCH_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessDailyWatchReadingRequestBody,
  ): Promise<ProcessDailyWatchReadingResponse>;
}

export abstract class GetDailyStorageBatchHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_DAILY_STORAGE_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetDailyStorageBatchRequestBody,
  ): Promise<GetDailyStorageBatchResponse>;
}

export abstract class ProcessDailyStorageReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_DAILY_STORAGE_READING;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessDailyStorageReadingRequestBody,
  ): Promise<ProcessDailyStorageReadingResponse>;
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
