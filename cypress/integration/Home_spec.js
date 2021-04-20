describe('Navigation Landscape', () => {
  beforeEach(() => {
    cy.visit('https://book-worm-2.herokuapp.com/home')
  });

  it.skip('Should have button that opens form for adding book', () => {
      cy.get('.navigation-wrapper')
        .children().first().find('img')
        .should('have.class','mountain')
        .click()
        .url().should('include','newbook')
      cy.contains('What\'s the title of the book?')
  });

  it.skip('Should have button that opens finished books page', () => {
      cy.get('.navigation-wrapper')
        .children().last().find('img')
        .should('have.class','sandcastle')
        .click().wait(2000)
        .url().should('include','finishedbooks')
      cy.contains('Books You\'ve Wormed Your Way All The Way Through')
  });
});

describe('Rainbow', () => {
  beforeEach(() => {
    cy.visit('https://book-worm-2.herokuapp.com/home').wait(1000)
  });

  it.skip('Should be underground', () => {
      cy.get('topsoil').should('have.alt', 'Feel the grass at the top of the earth and dig deep to find your books to start your journey.')
  });

  it.skip('Should be a rainbow', () => {
      cy.get('svg').should('have.class', 'rainbowBox')
        .find('.rainbow')
        .each((rainbowLine) => {
          cy.should('have.attr', 'stroke')
        })
  });

  it.skip('Worms should be climbing rainbow', () => {
      cy.get('svg').find('.currentBook')
        .each((worm) => {
          cy.should('have.attr', 'xlink:href')
        })
  });

  it.skip('Book icons should be clickable and take user to book details', () => {
      cy.get('svg').find('.bookImage')
        .click().wait(1000)
        .url().should('include','books')
  });
});
