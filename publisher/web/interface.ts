import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { SizeTimeMeterReport, SIZE_TIME_METER_REPORT, SizeTimeMeterReportRange, SIZE_TIME_METER_REPORT_RANGE } from './size_time_meter_report';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

export interface GetSizeTimeMeterReportRequestBody {
/* If absent, return the current report. Otherwise, return the corresponding historical report. */
  reportId?: string,
}

export let GET_SIZE_TIME_METER_REPORT_REQUEST_BODY: MessageDescriptor<GetSizeTimeMeterReportRequestBody> = {
  name: 'GetSizeTimeMeterReportRequestBody',
  fields: [
    {
      name: 'reportId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSizeTimeMeterReportResponse {
  sizeTimeMeterReport?: SizeTimeMeterReport,
}

export let GET_SIZE_TIME_METER_REPORT_RESPONSE: MessageDescriptor<GetSizeTimeMeterReportResponse> = {
  name: 'GetSizeTimeMeterReportResponse',
  fields: [
    {
      name: 'sizeTimeMeterReport',
      messageType: SIZE_TIME_METER_REPORT,
    },
  ]
};

export let GET_SIZE_TIME_METER_REPORT: ServiceDescriptor = {
  name: "GetSizeTimeMeterReport",
  path: "/GetSizeTimeMeterReport",
  body: {
    messageType: GET_SIZE_TIME_METER_REPORT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SIZE_TIME_METER_REPORT_RESPONSE,
  },
}

export interface ListHistorySizeTimeMeterReportsRequestBody {
}

export let LIST_HISTORY_SIZE_TIME_METER_REPORTS_REQUEST_BODY: MessageDescriptor<ListHistorySizeTimeMeterReportsRequestBody> = {
  name: 'ListHistorySizeTimeMeterReportsRequestBody',
  fields: [
  ]
};

export interface ListHistorySizeTimeMeterReportsResponse {
  sizeTimeMeterReportRanges?: Array<SizeTimeMeterReportRange>,
}

export let LIST_HISTORY_SIZE_TIME_METER_REPORTS_RESPONSE: MessageDescriptor<ListHistorySizeTimeMeterReportsResponse> = {
  name: 'ListHistorySizeTimeMeterReportsResponse',
  fields: [
    {
      name: 'sizeTimeMeterReportRanges',
      messageType: SIZE_TIME_METER_REPORT_RANGE,
      isArray: true,
    },
  ]
};

export let LIST_HISTORY_SIZE_TIME_METER_REPORTS: ServiceDescriptor = {
  name: "ListHistorySizeTimeMeterReports",
  path: "/ListHistorySizeTimeMeterReports",
  body: {
    messageType: LIST_HISTORY_SIZE_TIME_METER_REPORTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_HISTORY_SIZE_TIME_METER_REPORTS_RESPONSE,
  },
}
