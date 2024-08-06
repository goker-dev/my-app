describe('Test a view like mobile', () => {
  beforeEach(async () => {
    cy.viewport('iphone-x');

    // From https://github.com/cypress-io/cypress/issues/702#issuecomment-435873135
    if (!window.navigator || !navigator.serviceWorker) {
      return null;
    }
    const registrations = await navigator.serviceWorker.getRegistrations();
    return Promise.all(
      registrations.map((registration) => {
        return registration.unregister();
      }),
    );
  });

  it('Should be show new text', () => {
    cy.visit('/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('undefined-cookies', 'true');
      },
    });
    cy.wait(500);

    cy.get('[data-cy="reload-prompt"]').then(($prompt) => {
      const $btn = $prompt.find('[data-cy="close"]');
      if ($btn.length) {
        $btn.click();
      }
      return true;
    });

    cy.wait(500);

    cy.get('#navbar-switch').click();
    cy.get('.layout-header a[href="/about"]').click();
    cy.get('main').contains('This is my page');
    cy.get('#navbar-switch').click(); // open navigation
    cy.get('#mobile-localization').find('select').select('tr');
    cy.get('#navbar-switch').click(); // close navigation
    cy.wait(500);
    cy.get('main').contains('Benim sayfam');
  });
});
