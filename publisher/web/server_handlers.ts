import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_SIZE_TIME_METER_REPORT, GetSizeTimeMeterReportRequestBody, GetSizeTimeMeterReportResponse, LIST_HISTORY_SIZE_TIME_METER_REPORTS, ListHistorySizeTimeMeterReportsRequestBody, ListHistorySizeTimeMeterReportsResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetSizeTimeMeterReportHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SIZE_TIME_METER_REPORT;
  public abstract handle(
    requestId: string,
    body: GetSizeTimeMeterReportRequestBody,
    auth: WebClientSession,
  ): Promise<GetSizeTimeMeterReportResponse>;
}

export abstract class ListHistorySizeTimeMeterReportsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_HISTORY_SIZE_TIME_METER_REPORTS;
  public abstract handle(
    requestId: string,
    body: ListHistorySizeTimeMeterReportsRequestBody,
    auth: WebClientSession,
  ): Promise<ListHistorySizeTimeMeterReportsResponse>;
}
