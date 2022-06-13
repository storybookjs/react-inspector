export function getPropertyValue(object, propertyName) {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
    if (propertyDescriptor.get) {
        try {
            return object[propertyName];
        }
        catch {
            return propertyDescriptor.get;
        }
    }

    return object[propertyName];
}
