import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_PLAYTIME_METER_REPORT, GetPlaytimeMeterReportRequestBody, GetPlaytimeMeterReportResponse, LIST_HISTORY_PLAYTIME_METER_REPORTS, ListHistoryPlaytimeMeterReportsRequestBody, ListHistoryPlaytimeMeterReportsResponse, INCREMENT_PLAYTIME, IncrementPlaytimeRequestBody, IncrementPlaytimeResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetPlaytimeMeterReportHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_PLAYTIME_METER_REPORT;
  public abstract handle(
    requestId: string,
    body: GetPlaytimeMeterReportRequestBody,
    auth: WebClientSession,
  ): Promise<GetPlaytimeMeterReportResponse>;
}

export abstract class ListHistoryPlaytimeMeterReportsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_HISTORY_PLAYTIME_METER_REPORTS;
  public abstract handle(
    requestId: string,
    body: ListHistoryPlaytimeMeterReportsRequestBody,
    auth: WebClientSession,
  ): Promise<ListHistoryPlaytimeMeterReportsResponse>;
}

export abstract class IncrementPlaytimeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = INCREMENT_PLAYTIME;
  public abstract handle(
    requestId: string,
    body: IncrementPlaytimeRequestBody,
    auth: WebClientSession,
  ): Promise<IncrementPlaytimeResponse>;
}
