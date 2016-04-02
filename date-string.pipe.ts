import {Pipe} from 'angular2/core';
import {DatePipe} from 'angular2/common';

/**
 * Date pipe for string format.
 * If args withLocalTimeZone is present, local time zone is added to the date.
 * 
 */
@Pipe({ name: 'date', pure: true })
export class DateStringPipe extends DatePipe {
  transform(value: any, args: any[]): string {
    value = typeof value === 'string' ? Date.parse(value) : value;


    if (args[0].indexOf('withLocalTimeZone') > -1) {
      const index = args.indexOf('withLocalTimeZone');
      value = addLocalTimeZone(value);
      args[0].splice(index, 1);
    }
    return super.transform(value, args);
  }
}

/**
 * Add local timeZone to date
 * 
 */
const addLocalTimeZone = (value) => {
  const startTime = new Date(value);
  return new Date(startTime.getTime() + (startTime.getTimezoneOffset() * 60000));
};

