import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetSizeTimeMeterReportRequestBody, GetSizeTimeMeterReportResponse, GET_SIZE_TIME_METER_REPORT, ListHistorySizeTimeMeterReportsRequestBody, ListHistorySizeTimeMeterReportsResponse, LIST_HISTORY_SIZE_TIME_METER_REPORTS } from './interface';

export function getSizeTimeMeterReport(
  client: WebServiceClientInterface,
  body: GetSizeTimeMeterReportRequestBody,
): Promise<GetSizeTimeMeterReportResponse> {
  return client.send({
    descriptor: GET_SIZE_TIME_METER_REPORT,
    body,
  });
}

export function listHistorySizeTimeMeterReports(
  client: WebServiceClientInterface,
  body: ListHistorySizeTimeMeterReportsRequestBody,
): Promise<ListHistorySizeTimeMeterReportsResponse> {
  return client.send({
    descriptor: LIST_HISTORY_SIZE_TIME_METER_REPORTS,
    body,
  });
}
