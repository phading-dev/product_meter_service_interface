import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { MeterReadingPerSeason, METER_READING_PER_SEASON, MeterReadingPerDay, METER_READING_PER_DAY, MeterReadingPerMonth, METER_READING_PER_MONTH } from './meter_reading';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

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

export let LIST_METER_READING_PER_SEASON: WebRemoteCallDescriptor = {
  name: "ListMeterReadingPerSeason",
  path: "/ListMeterReadingPerSeason",
  body: {
    messageType: LIST_METER_READING_PER_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_METER_READING_PER_SEASON_RESPONSE,
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
