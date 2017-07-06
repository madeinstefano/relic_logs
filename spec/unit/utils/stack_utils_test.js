const chai = require('chai');
const expect = chai.expect;

const StackUtils = require('../../../lib/utils/stack_utils');

describe('Utils > Stack Utils test', () => {

  it('Should find an event key on some stack trace', () => {
    const knowKey = 'andromeda_123-absauds-asasj3-sd83y3hd';
    const knowError = {
      stack: `at line1\nat line2\nat Object.${knowKey} (somewhere/somewhat.js:34:34)\nat line4\nat line5`
    }

    const key = StackUtils.extractEventKey( knowError );
    expect( key ).to.eqls( knowKey );
  });
});
