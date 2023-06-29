import 'react-native';
import { myMultiply } from "./multiply";

describe('multiply tests', () => {
    it('multiply 4 * 3 to equal 12', () => {
        expect(myMultiply(4,3)).toBe(12)
    });
})