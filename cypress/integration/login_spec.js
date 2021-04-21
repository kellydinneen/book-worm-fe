
describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://book-worm-2.herokuapp.com/')
  })

  it('Should have a login button', () => {
      cy.get('.loginBackground').find('button').should('have.class', 'loginButton')
  })
  it('Should display the site title', () => {
      cy.get('.loginBackground').find('.loginTitleContainer')
        .children().first().contains('BookWorm')
  })
  it('Should display the site caption', () => {
      cy.get('.loginBackground').find('.caption').contains('Track your reading progress!')
  })
  it('Should display an image of a book and worm', () => {
      cy.get('.loginBackground').find('.imageContainer')
        .children().first().should('have.class', 'book')
      cy.get('.loginBackground').find('.imageContainer')
        .children().last().should('have.class', 'worm')
  })
  it('Should be able to click login button and login', () => {
      cy.get('.loginBackground').find('button').click().wait(1000)
  })
})
