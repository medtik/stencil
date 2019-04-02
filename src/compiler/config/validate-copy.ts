import * as d from '../../declarations';
import { unique } from '@utils';

export function validateCopy(copy: d.CopyTask[] | boolean, defaultCopy: d.CopyTask[] = []): d.CopyTask[] {
  if (copy === null || copy === false) {
    return [];
  }
  if (!Array.isArray(copy)) {
    copy = [];
  }
  return unique([
    ...defaultCopy,
    ...copy
  ], task => task.src);
}
