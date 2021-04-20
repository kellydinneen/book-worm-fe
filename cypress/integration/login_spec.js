
describe('Login', () => {
  it('Should have a login button', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.loginBackground').find('.loginTitleContainer')
        .children().first().contains('BookWorm')
      cy.get('.loginBackground').find('.caption').contains('Track your reading progress!')
      cy.get('.loginBackground').find('.imageContainer')
        .children().first().should('have.class', 'book')
      cy.get('.loginBackground').find('.imageContainer')
        .children().last().should('have.class', 'worm')
      cy.get('.loginBackground').find('.loginButton').click().wait(1000)
  })
})

// Client secret: j2QReMPY_Mg_0rpOu7J_rrE2
// client_id: 426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com
