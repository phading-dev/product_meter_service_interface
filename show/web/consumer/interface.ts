import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { MeterReadingPerSeason, METER_READING_PER_SEASON, MeterReadingPerDay, METER_READING_PER_DAY, MeterReadingPerMonth, METER_READING_PER_MONTH } from './meter_reading';
import { PRODUCT_METER_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface RecordWatchTimeRequestBody {
  seasonId?: string,
  episodeId?: string,
  watchTimeMs?: number,
}

export let RECORD_WATCH_TIME_REQUEST_BODY: MessageDescriptor<RecordWatchTimeRequestBody> = {
  name: 'RecordWatchTimeRequestBody',
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

export interface RecordWatchTimeResponse {
}

export let RECORD_WATCH_TIME_RESPONSE: MessageDescriptor<RecordWatchTimeResponse> = {
  name: 'RecordWatchTimeResponse',
  fields: [],
};

export interface RecordNetworkTransmissionRequestBody {
  seasonId?: string,
  episodeId?: string,
  transmittedBytes?: number,
}

export let RECORD_NETWORK_TRANSMISSION_REQUEST_BODY: MessageDescriptor<RecordNetworkTransmissionRequestBody> = {
  name: 'RecordNetworkTransmissionRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'transmittedBytes',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface RecordNetworkTransmissionResponse {
}

export let RECORD_NETWORK_TRANSMISSION_RESPONSE: MessageDescriptor<RecordNetworkTransmissionResponse> = {
  name: 'RecordNetworkTransmissionResponse',
  fields: [],
};

export interface ListMeterReadingPerSeasonRequestBody {
  date?: string,
}

export let LIST_METER_READING_PER_SEASON_REQUEST_BODY: MessageDescriptor<ListMeterReadingPerSeasonRequestBody> = {
  name: 'ListMeterReadingPerSeasonRequestBody',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListMeterReadingPerSeasonResponse {
  readings?: Array<MeterReadingPerSeason>,
}

export let LIST_METER_READING_PER_SEASON_RESPONSE: MessageDescriptor<ListMeterReadingPerSeasonResponse> = {
  name: 'ListMeterReadingPerSeasonResponse',
  fields: [{
    name: 'readings',
    index: 1,
    messageType: METER_READING_PER_SEASON,
    isArray: true,
  }],
};

export interface ListMeterReadingsPerDayRequestBody {
  startDate?: string,
  endDate?: string,
}

export let LIST_METER_READINGS_PER_DAY_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerDayRequestBody> = {
  name: 'ListMeterReadingsPerDayRequestBody',
  fields: [{
    name: 'startDate',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endDate',
    index: 2,
    primitiveType: PrimitiveType.STRING,
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
  startMonth?: string,
  endMonth?: string,
}

export let LIST_METER_READINGS_PER_MONTH_REQUEST_BODY: MessageDescriptor<ListMeterReadingsPerMonthRequestBody> = {
  name: 'ListMeterReadingsPerMonthRequestBody',
  fields: [{
    name: 'startMonth',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 2,
    primitiveType: PrimitiveType.STRING,
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

export let RECORD_WATCH_TIME: RemoteCallDescriptor = {
  name: "RecordWatchTime",
  service: PRODUCT_METER_WEB_SERVICE,
  path: "/RecordWatchTime",
  body: {
    messageType: RECORD_WATCH_TIME_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: RECORD_WATCH_TIME_RESPONSE,
  },
}

export let RECORD_NETWORK_TRANSMISSION: RemoteCallDescriptor = {
  name: "RecordNetworkTransmission",
  service: PRODUCT_METER_WEB_SERVICE,
  path: "/RecordNetworkTransmission",
  body: {
    messageType: RECORD_NETWORK_TRANSMISSION_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: RECORD_NETWORK_TRANSMISSION_RESPONSE,
  },
}

export let LIST_METER_READING_PER_SEASON: RemoteCallDescriptor = {
  name: "ListMeterReadingPerSeason",
  service: PRODUCT_METER_WEB_SERVICE,
  path: "/ListMeterReadingPerSeason",
  body: {
    messageType: LIST_METER_READING_PER_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_METER_READING_PER_SEASON_RESPONSE,
  },
}

export let LIST_METER_READINGS_PER_DAY: RemoteCallDescriptor = {
  name: "ListMeterReadingsPerDay",
  service: PRODUCT_METER_WEB_SERVICE,
  path: "/ListMeterReadingsPerDay",
  body: {
    messageType: LIST_METER_READINGS_PER_DAY_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_METER_READINGS_PER_DAY_RESPONSE,
  },
}

export let LIST_METER_READINGS_PER_MONTH: RemoteCallDescriptor = {
  name: "ListMeterReadingsPerMonth",
  service: PRODUCT_METER_WEB_SERVICE,
  path: "/ListMeterReadingsPerMonth",
  body: {
    messageType: LIST_METER_READINGS_PER_MONTH_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_METER_READINGS_PER_MONTH_RESPONSE,
  },
}
