import { GetBatchRequestBody, GET_BATCH, GetBatchResponse, AggregateMeterReadingRequestBody, AGGREGATE_METER_READING, AggregateMeterReadingResponse, GetUnprocessedDateRequestBody, GET_UNPROCESSED_DATE, GetUnprocessedDateResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetBatchHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_BATCH;
  public abstract handle(
    loggingPrefix: string,
    body: GetBatchRequestBody,
  ): Promise<GetBatchResponse>;
}

export abstract class AggregateMeterReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = AGGREGATE_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: AggregateMeterReadingRequestBody,
  ): Promise<AggregateMeterReadingResponse>;
}

export abstract class GetUnprocessedDateHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_UNPROCESSED_DATE;
  public abstract handle(
    loggingPrefix: string,
    body: GetUnprocessedDateRequestBody,
  ): Promise<GetUnprocessedDateResponse>;
}
