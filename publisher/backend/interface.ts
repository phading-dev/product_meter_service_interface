import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';

export interface IncrementSizeTimeRequestBody {
  publisherId?: string,
  productId?: string,
  sizeTime?: number,
}

export let INCREMENT_SIZE_TIME_REQUEST_BODY: MessageDescriptor<IncrementSizeTimeRequestBody> = {
  name: 'IncrementSizeTimeRequestBody',
  fields: [
    {
      name: 'publisherId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'sizeTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface IncrementSizeTimeResponse {
}

export let INCREMENT_SIZE_TIME_RESPONSE: MessageDescriptor<IncrementSizeTimeResponse> = {
  name: 'IncrementSizeTimeResponse',
  fields: [
  ]
};

export let INCREMENT_SIZE_TIME: ServiceDescriptor = {
  name: "IncrementSizeTime",
  path: "/IncrementSizeTime",
  body: {
    messageType: INCREMENT_SIZE_TIME_REQUEST_BODY,
  },
  response: {
    messageType: INCREMENT_SIZE_TIME_RESPONSE,
  },
}
