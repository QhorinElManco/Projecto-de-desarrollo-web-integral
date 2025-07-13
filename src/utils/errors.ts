function createCustomError(name: string) {
    return class extends Error {
        constructor(message?: string) {
            super(message);
            this.name = name;
        }
    };
}

export const ValidationError = createCustomError('ValidationError');
export const InvalidShippingAddress = createCustomError('InvalidShippingAddress');

