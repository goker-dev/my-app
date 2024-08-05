describe('Test a view', () => {
  it('Should be show new text', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('main').contains('This is my page');
  });

  it('Should be show new text', () => {
    cy.visit('/about', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.get('.layout-header').find('.hidden select').focus().select('tr');
    cy.wait(500);
    cy.get('main').contains('Benim sayfam');
  });
});
