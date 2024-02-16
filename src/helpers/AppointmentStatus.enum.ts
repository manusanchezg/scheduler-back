import { registerEnumType } from '@nestjs/graphql';

export enum AppointmentStatus {
  APPROVED,
  CANCELED,
  POSTPONED,
  PENDING,
}

registerEnumType(AppointmentStatus, {
  name: 'AppointmentStatus',
});
