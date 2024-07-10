describe('Login and Registration Tests', () => {
    
    it('should log in with valid credentials using custom login command', () => {
      // Используйте кастомную команду login для входа

      cy.login('dmitryv1800@gmail.com', 'Dmitryv1800');

    });
  });

  