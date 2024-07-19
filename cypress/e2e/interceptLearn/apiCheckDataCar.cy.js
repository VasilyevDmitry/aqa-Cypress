

describe('API testing', () => {
    
    it('one id', () => {

        const id = 3
        cy.api({
          url: `https://jsonplaceholder.typicode.com/posts/${id}`,
          method: "GET"
        }).as('posts')
    
    
        cy.get('@posts').should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.id).to.eq(id)
          expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
        })
       
      })

    it('posts list', () => {
        cy.api({
          url: `https://jsonplaceholder.typicode.com/posts`,
          method: "GET"
        }).as('posts')
    
    
        cy.get('@posts').should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array');
          expect(response.body.length).to.be.eq(100);
        })
      })

      it('create post', () => {
        const requestBody = {
          title: 'Totle1',
          body: 'bodyOne',
          userId: 8,
        }
    
        cy.api({
          url: 'https://jsonplaceholder.typicode.com/posts/',
          method: "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: requestBody
        }).as('createPost')
    
        cy.get('@createPost').should((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
          expect(response.body).to.deep.equal({...requestBody, id: 101})
        })
      });

      it('delete post', () => {
        const id = 1
        cy.api({
          url: `https://jsonplaceholder.typicode.com/posts/${id}`,
          method: "DELETE"
        }).as('deletePost')
    
        cy.get('@deletePost').should((response) => {
          expect(response.status).to.eq(200)
        })
      });

      it('update post', () => {
        const updatedPost = {
          title: 'updated title',
          body: 'updated body',
          userId: 1,
        };
    
        cy.api('PUT', `https://jsonplaceholder.typicode.com/posts/${updatedPost.userId}`, updatedPost).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', 1);
          expect(response.body).to.have.property('title', updatedPost.title);
          expect(response.body).to.have.property('body', updatedPost.body);
          expect(response.body).to.have.property('userId', updatedPost.userId);
        });
      });
   
});
