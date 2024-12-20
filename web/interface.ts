import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetTimezoneOffsetRequestBody {
}

export let GET_TIMEZONE_OFFSET_REQUEST_BODY: MessageDescriptor<GetTimezoneOffsetRequestBody> = {
  name: 'GetTimezoneOffsetRequestBody',
  fields: [],
};

export interface GetTimezoneOffsetResponse {
  negativeOffset?: number,
}

export let GET_TIMEZONE_OFFSET_RESPONSE: MessageDescriptor<GetTimezoneOffsetResponse> = {
  name: 'GetTimezoneOffsetResponse',
  fields: [{
    name: 'negativeOffset',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_TIMEZONE_OFFSET: WebRemoteCallDescriptor = {
  name: "GetTimezoneOffset",
  path: "/GetTimezoneOffset",
  body: {
    messageType: GET_TIMEZONE_OFFSET_REQUEST_BODY,
  },
  response: {
    messageType: GET_TIMEZONE_OFFSET_RESPONSE,
  },
}
