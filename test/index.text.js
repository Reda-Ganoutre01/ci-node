const assert = require('assert');
const { add } = require('../index');

describe('Fonction add', () => {
  it('devrait retourner 5 pour add(2, 3)', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('devrait retourner 0 pour add(-2, 2)', () => {
    assert.strictEqual(add(-2, 2), 0);
  });
});
