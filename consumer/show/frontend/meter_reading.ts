import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from '../../../money';

export interface EpisodeSummary {
  seasonId?: string,
  episodeId?: string,
  seasonName?: string,
  episodeName?: string,
}

export let EPISODE_SUMMARY: MessageDescriptor<EpisodeSummary> = {
  name: 'EpisodeSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeName',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MeterReadingPerEpisode {
  episode?: EpisodeSummary,
  watchTimeMs?: number,
}

export let METER_READING_PER_EPISODE: MessageDescriptor<MeterReadingPerEpisode> = {
  name: 'MeterReadingPerEpisode',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_SUMMARY,
  }, {
    name: 'watchTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerDay {
  timezone?: string,
  date?: number,
  amount?: Money,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [{
    name: 'timezone',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'date',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'amount',
    index: 3,
    messageType: MONEY,
  }],
};

export interface MeterReadingPerMonth {
  timezone?: string,
  month?: number,
  amount?: Money,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [{
    name: 'timezone',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'month',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'amount',
    index: 3,
    messageType: MONEY,
  }],
};
