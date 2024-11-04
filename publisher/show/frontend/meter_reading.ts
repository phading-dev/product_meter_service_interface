import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface SeasonSummary {
  seasonId?: string,
  seasonName?: string,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MeterReadingPerSeason {
  season?: SeasonSummary,
  watchTimeSec?: number,
}

export let METER_READING_PER_SEASON: MessageDescriptor<MeterReadingPerSeason> = {
  name: 'MeterReadingPerSeason',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerDay {
  date?: string,
  watchTimeSec?: number,
  transmittedMb?: number,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'transmittedMb',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerMonth {
  month?: string,
  watchTimeSec?: number,
  transmittedMb?: number,
  storageMbh?: number,
  uploadMb?: number,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [{
    name: 'month',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'transmittedMb',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'storageMbh',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'uploadMb',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
