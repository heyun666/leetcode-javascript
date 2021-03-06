const assert = require('assert');
const addTwoNumbers = require('../../src/0445-Add Two Numbers II/addTwoNumbers1');

describe('#0002- Add Two Numbers', () => {
    it('should return the new list plus by two given list', () => {
        const list1 = { val: 1, next: { val: 9, next: null } };
        const list2 = { val: 1, next: { val: 3, next: { val: 9, next: { val: 1, next: null } } } };
        const list3 = addTwoNumbers(list1, list2);
        assert.strictEqual(list3.val, 1);
        assert.strictEqual(list3.next.val, 4);
        assert.strictEqual(list3.next.next.val, 1);
        assert.strictEqual(list3.next.next.next.val, 0);
    });
});
