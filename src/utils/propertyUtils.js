export function getPropertyValue(object, propertyName) {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
    if (propertyDescriptor.get) {
        try {
            return propertyDescriptor.get()
        }
        catch {
            return propertyDescriptor.get
        }
    }

    return object[propertyName];
}

export const propertyValueFormatter = (object, type)=>{
    switch (type){
        case 'any':
            return object;
        case 'bigint':
            return `${String(object)}n`;
        case 'number':
            return `${String(object)}`;
        case 'string':
            return `"${object}"`;
        case 'boolean':
        case 'undefined':
        case 'null':
        case 'Date':
        case 'RegExp':
            return `${object}`;
        case 'Array':
            return `Array(${object.length})`;
        case 'Object':
            return 'Object';
        case 'Buffer':
            return `Buffer[${object.length}]`;
        case 'Class':
            return object.constructor.name;
        case 'function':
            return `${object.name}()`;
        case 'symbol':
            return `${object.toString()}`;
        case 'unknown':
        default:
            return '';
    }
};
