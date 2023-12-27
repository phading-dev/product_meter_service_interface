import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PlaytimeMeterReport, PLAYTIME_METER_REPORT, PlaytimeMeterReportRange, PLAYTIME_METER_REPORT_RANGE } from './playtime_meter_report';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

export interface GetPlaytimeMeterReportRequestBody {
/* If absent, return the current report. Otherwise, return the corresponding historical report. */
  reportId?: string,
}

export let GET_PLAYTIME_METER_REPORT_REQUEST_BODY: MessageDescriptor<GetPlaytimeMeterReportRequestBody> = {
  name: 'GetPlaytimeMeterReportRequestBody',
  fields: [
    {
      name: 'reportId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetPlaytimeMeterReportResponse {
  playtimeMeterReport?: PlaytimeMeterReport,
}

export let GET_PLAYTIME_METER_REPORT_RESPONSE: MessageDescriptor<GetPlaytimeMeterReportResponse> = {
  name: 'GetPlaytimeMeterReportResponse',
  fields: [
    {
      name: 'playtimeMeterReport',
      messageType: PLAYTIME_METER_REPORT,
    },
  ]
};

export let GET_PLAYTIME_METER_REPORT: ServiceDescriptor = {
  name: "GetPlaytimeMeterReport",
  path: "/GetPlaytimeMeterReport",
  body: {
    messageType: GET_PLAYTIME_METER_REPORT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_PLAYTIME_METER_REPORT_RESPONSE,
  },
}

export interface ListHistoryPlaytimeMeterReportsRequestBody {
}

export let LIST_HISTORY_PLAYTIME_METER_REPORTS_REQUEST_BODY: MessageDescriptor<ListHistoryPlaytimeMeterReportsRequestBody> = {
  name: 'ListHistoryPlaytimeMeterReportsRequestBody',
  fields: [
  ]
};

export interface ListHistoryPlaytimeMeterReportsResponse {
  playtimeMeterReportRanges?: Array<PlaytimeMeterReportRange>,
}

export let LIST_HISTORY_PLAYTIME_METER_REPORTS_RESPONSE: MessageDescriptor<ListHistoryPlaytimeMeterReportsResponse> = {
  name: 'ListHistoryPlaytimeMeterReportsResponse',
  fields: [
    {
      name: 'playtimeMeterReportRanges',
      messageType: PLAYTIME_METER_REPORT_RANGE,
      isArray: true,
    },
  ]
};

export let LIST_HISTORY_PLAYTIME_METER_REPORTS: ServiceDescriptor = {
  name: "ListHistoryPlaytimeMeterReports",
  path: "/ListHistoryPlaytimeMeterReports",
  body: {
    messageType: LIST_HISTORY_PLAYTIME_METER_REPORTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_HISTORY_PLAYTIME_METER_REPORTS_RESPONSE,
  },
}

export interface IncrementPlaytimeRequestBody {
  productId?: string,
  playtime?: number,
}

export let INCREMENT_PLAYTIME_REQUEST_BODY: MessageDescriptor<IncrementPlaytimeRequestBody> = {
  name: 'IncrementPlaytimeRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playtime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface IncrementPlaytimeResponse {
}

export let INCREMENT_PLAYTIME_RESPONSE: MessageDescriptor<IncrementPlaytimeResponse> = {
  name: 'IncrementPlaytimeResponse',
  fields: [
  ]
};

export let INCREMENT_PLAYTIME: ServiceDescriptor = {
  name: "IncrementPlaytime",
  path: "/IncrementPlaytime",
  body: {
    messageType: INCREMENT_PLAYTIME_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: INCREMENT_PLAYTIME_RESPONSE,
  },
}
