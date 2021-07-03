import * as React from 'react'
import { mount } from '@cypress/react'
import Fetch from '../../src/Components/Fetch/Fetch'

describe('Testing Fetch component should', () => {
  it('Contain a custom title', () => {
    mount(<Fetch />)
    cy.contains('This is setion retrieve data of different countries')
  })
})