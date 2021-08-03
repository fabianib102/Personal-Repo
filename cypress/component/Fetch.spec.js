import * as React from 'react'
import { mount } from '@cypress/react'
import Fetch from '../../src/Components/Fetch/Fetch'

describe('Testing Fetch component should', () => {
  it('Contain a custom title', () => {
    mount(<Fetch />)
    cy.contains('Country');
    cy.contains('Capital Name');
    cy.contains('Region');
  })
})