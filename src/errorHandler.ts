import { UUID_INIT_ERROR } from './constants';

export function initError() {
  return new Error(UUID_INIT_ERROR);
}
