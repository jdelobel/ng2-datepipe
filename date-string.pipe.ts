import {Pipe} from 'angular2/core';
import {DatePipe} from 'angular2/common';

/**
 * Date pipe for string format
 * 
 */
@Pipe({ name: 'date', pure: true })
export class DateStringPipe extends DatePipe {
  transform(value: any, args: any[]): string {
    value = typeof value === 'string' ? Date.parse(value) : value;
    return super.transform(value, args);
  }
}
