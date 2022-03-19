import {ObjectUtils, Value} from '@/core';

export declare type ProxyCallbackData = {
  beforeObject?: unknown;
  obj?: unknown;
  prop: string | symbol;
  value?: unknown;
};

export class ProxyData {
  constructor(data: Value<any>, callback: (args: ProxyCallbackData) => void) {
    return new Proxy(data, {
      set: (obj, prop, value) => {
        if (obj[prop] === value) {
          return true;
        }

        const beforeObject = ObjectUtils.deepCopy(obj);

        obj[prop] = value;

        const callbackArgs: ProxyCallbackData = {
          beforeObject,
          obj,
          prop,
          value,
        };

        console.log(data,1);

        callback(callbackArgs);

        return true;
      },
    });
  }
}
