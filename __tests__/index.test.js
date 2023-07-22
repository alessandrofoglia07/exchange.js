import { convert } from '../lib/esm/index.js';

describe('convert', () => {
    it('should convert USD to CAD', async () => {
        const amount = await convert('USD', 'CAD', 1);
        expect(typeof amount).toBe('number');
        expect(Math.floor(amount)).toBe(1);
    });

    it('should throw an error if the currency is not supported', async () => {
        await expect(convert('USD', 'ABC', 1)).rejects.toThrow('Currency ABC is not supported.');
    });
});
