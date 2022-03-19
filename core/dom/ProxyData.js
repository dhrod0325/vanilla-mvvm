import {ObjectUtils} from '../utils/ObjectUtils';

class CustomProxy {
    constructor(data, handler) {
        return new Proxy(data, handler);
    }
}

export class ProxyData {
    constructor(data, callback) {
        return new CustomProxy(data, {
            set: (obj, prop, value) => {
                if (obj[prop] === value) {
                    return true;
                }

                const beforeObject = ObjectUtils.deepCopy(obj);

                obj[prop] = value;

                callback(beforeObject, obj, prop, value);

                return true;
            },
        });
    }
}
