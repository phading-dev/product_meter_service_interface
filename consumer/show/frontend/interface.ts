import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { MeterReadingPerEpisode, METER_READING_PER_EPISODE, MeterReadingPerDay, METER_READING_PER_DAY, MeterReadingPerMonth, METER_READING_PER_MONTH } from './meter_reading';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface SyncMeterReadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  watchTimeMs?: number,
}

export let SYNC_METER_READING_REQUEST_BODY: MessageDescriptor<SyncMeterReadingRequestBody> = {
  name: 'SyncMeterReadingRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SyncMeterReadingResponse {
}

export let SYNC_METER_READING_RESPONSE: MessageDescriptor<SyncMeterReadingResponse> = {
  name: 'SyncMeterReadingResponse',
  fields: [],
};

export interface ListMeterReadingPerEpisodeRequestBody {
  date?: number,
}

export let LIST_METER_READING_PER_EPISODE_REQUEST_BODY: MessageDescriptor<ListMeterReadingPerEpisodeRequestBody> = {
  name: 'ListMeterReadingPerEpisodeRequestBody',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListMeterReadingPerEpisodeResponse {
  readings?: Array<MeterReadingPerEpisode>,
}

export let LIST_METER_READING_PER_EPISODE_RESPONSE: MessageDescriptor<ListMeterReadingPerEpisodeResponse> = {
  name: 'ListMeterReadingPerEpisodeResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_EPISODE,
    isArray: true,
  }],
};

export interface ListMeterReadingsPerDayRequestBody {
  startDate?: number,
  endDate?: number,
}

export let LIST_METER_READINGS_PER_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerDayRequestBody> = {
  name: 'ListMeterReadingsPerDayRequestBody',
  fields: [{
    name: 'startDate',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'endDate',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListMeterReadingsPerDayResponse {
  readings?: Array<MeterReadingPerDay>,
}

export let LIST_METER_READINGS_PER_DAY_RESPONSE: MessageDescriptor<ListMeterReadingsPerDayResponse> = {
  name: 'ListMeterReadingsPerDayResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_DAY,
    isArray: true,
  }],
};

export interface ListMeterReadingsPerMonthRequestBody {
  startMonth?: number,
  endMonth?: number,
}

export let LIST_METER_READINGS_PER_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerMonthRequestBody> = {
  name: 'ListMeterReadingsPerMonthRequestBody',
  fields: [{
    name: 'startMonth',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'endMonth',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListMeterReadingsPerMonthResponse {
  readings?: Array<MeterReadingPerMonth>,
}

export let LIST_METER_READINGS_PER_MONTH_RESPONSE: MessageDescriptor<ListMeterReadingsPerMonthResponse> = {
  name: 'ListMeterReadingsPerMonthResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_MONTH,
    isArray: true,
  }],
};

export let SYNC_METER_READING: WebRemoteCallDescriptor = {
  name: "SyncMeterReading",
  path: "/SyncMeterReading",
  body: {
    messageType: SYNC_METER_READING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: SYNC_METER_READING_RESPONSE,
  },
}

export let LIST_METER_READING_PER_EPISODE: WebRemoteCallDescriptor = {
  name: "ListMeterReadingPerEpisode",
  path: "/ListMeterReadingPerEpisode",
  body: {
    messageType: LIST_METER_READING_PER_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_METER_READING_PER_EPISODE_RESPONSE,
  },
}

export let LIST_METER_READINGS_PER_DAY: WebRemoteCallDescriptor = {
  name: "ListMeterReadingsPerDay",
  path: "/ListMeterReadingsPerDay",
  body: {
    messageType: LIST_METER_READINGS_PER_DAY_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_METER_READINGS_PER_DAY_RESPONSE,
  },
}

export let LIST_METER_READINGS_PER_MONTH: WebRemoteCallDescriptor = {
  name: "ListMeterReadingsPerMonth",
  path: "/ListMeterReadingsPerMonth",
  body: {
    messageType: LIST_METER_READINGS_PER_MONTH_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_METER_READINGS_PER_MONTH_RESPONSE,
  },
}
