import { registerEnumType } from '@nestjs/graphql';

export enum dayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

registerEnumType(dayOfWeek, {
  name: 'DayOfWeek',
});
