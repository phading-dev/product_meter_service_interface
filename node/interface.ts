import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetTodayWrtTimezoneRequestBody {
}

export let GET_TODAY_WRT_TIMEZONE_REQUEST_BODY: MessageDescriptor<GetTodayWrtTimezoneRequestBody> = {
  name: 'GetTodayWrtTimezoneRequestBody',
  fields: [],
};

export interface GetTodayWrtTimezoneResponse {
  date?: string,
}

export let GET_TODAY_WRT_TIMEZONE_RESPONSE: MessageDescriptor<GetTodayWrtTimezoneResponse> = {
  name: 'GetTodayWrtTimezoneResponse',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export let GET_TODAY_WRT_TIMEZONE: NodeRemoteCallDescriptor = {
  name: "GetTodayWrtTimezone",
  path: "/GetTodayWrtTimezone",
  body: {
    messageType: GET_TODAY_WRT_TIMEZONE_REQUEST_BODY,
  },
  response: {
    messageType: GET_TODAY_WRT_TIMEZONE_RESPONSE,
  },
}
