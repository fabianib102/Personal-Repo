import Fetch from '../../src/Components/Fetch/Fetch';

describe('Fetch component should', () => {
  it('Contains a text to describe the section', () => {
    mount(<Fetch />);
    cy.contains('This is setion retrieve data of different countries')
  });
})