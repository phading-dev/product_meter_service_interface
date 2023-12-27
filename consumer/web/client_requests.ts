import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetPlaytimeMeterReportRequestBody, GetPlaytimeMeterReportResponse, GET_PLAYTIME_METER_REPORT, ListHistoryPlaytimeMeterReportsRequestBody, ListHistoryPlaytimeMeterReportsResponse, LIST_HISTORY_PLAYTIME_METER_REPORTS, IncrementPlaytimeRequestBody, IncrementPlaytimeResponse, INCREMENT_PLAYTIME } from './interface';

export function getPlaytimeMeterReport(
  client: WebServiceClientInterface,
  body: GetPlaytimeMeterReportRequestBody,
): Promise<GetPlaytimeMeterReportResponse> {
  return client.send({
    descriptor: GET_PLAYTIME_METER_REPORT,
    body,
  });
}

export function listHistoryPlaytimeMeterReports(
  client: WebServiceClientInterface,
  body: ListHistoryPlaytimeMeterReportsRequestBody,
): Promise<ListHistoryPlaytimeMeterReportsResponse> {
  return client.send({
    descriptor: LIST_HISTORY_PLAYTIME_METER_REPORTS,
    body,
  });
}

export function incrementPlaytime(
  client: WebServiceClientInterface,
  body: IncrementPlaytimeRequestBody,
): Promise<IncrementPlaytimeResponse> {
  return client.send({
    descriptor: INCREMENT_PLAYTIME,
    body,
  });
}
