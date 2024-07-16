// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})

Cypress.Commands.add('login', (email, password) => {
    // Перейдите на страницу логина
    // cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.visit('/')
    cy.get('button').contains('Sign In').click()

    
    // Введите email и пароль
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password);
    
    // Нажмите кнопку входа
    cy.get('button').contains('Login').click()
    
    // Убедитесь, что вход был успешным (например, проверка URL или наличие определенного элемента)
    cy.url().should('include', '/panel/garage');
    cy.contains('Add car').should('be.visible');
  });

  

  