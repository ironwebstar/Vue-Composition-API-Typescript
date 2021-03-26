describe('The Home Product list page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[cy-test=cart-action]').find('button').as('cartAction')
    cy.get('[cy-test=wishlist-action]').find('button').as('wishlistAction')
    cy.get('[cy-test=cart-number]').as('cartNumber')
    cy.get('[cy-test=wishlist-number]').as('wishListNumber')
  })

  it('should be zero for the value of cart and wishlist, all cart action should be add cart button when refresh page', () => {
    cy.get('@cartAction')
      .should('have.attr', 'class')
      .and('include', 'add-cart__btn')
    cy.get('@cartNumber').contains('0')
  })

  it('should be zero for the value of wishlist, all favourite buttons should have grey color when refresh page', () => {
    cy.get('@wishlistAction')
      .find('i')
      .should('have.attr', 'class')
      .and('include', 'grey--text')
    cy.get('@wishListNumber').contains('0')
  })

  it('should change cart action button and update cart number when click add to cart button', () => {
    cy.get('@cartNumber').contains('0')
    cy.get('@cartAction').eq(0).click()
    cy.wait(500)
    cy.get('@cartAction')
      .should('have.attr', 'class')
      .and('include', 'remove-cart__btn')
    cy.get('@cartNumber').contains('1')
  })

  it('should change wishlist action button and update wishlist number when click favourite button', () => {
    cy.get('@wishListNumber').contains('0')
    cy.get('@wishlistAction').eq(0).click()
    cy.wait(500)
    cy.get('@wishlistAction')
      .find('i')
      .should('have.attr', 'class')
      .and('include', 'red--text')
    cy.get('@wishListNumber').contains('1')
  })
})
