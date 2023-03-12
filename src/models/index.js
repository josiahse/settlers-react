// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Builds, Rolls, Players, Games, Users } = initSchema(schema);

export {
  Builds,
  Rolls,
  Players,
  Games,
  Users
};