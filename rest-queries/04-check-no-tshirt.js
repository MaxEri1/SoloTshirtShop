// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
    path: 'tshirt',
    method: 'get',
    test() {
     
     assert.deepEqual(response, []);
    }
  });