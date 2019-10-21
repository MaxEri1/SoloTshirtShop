// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'tshirt',
  method: 'get',
  test() {
    // check that we got the right number of users
    // (intentionelly spelled length wrong to provoke a fail)
    assert.equal(response.length, store.mockTshirt.length);
    // check that all users where
    // inserted correctly with correct data
    
  }
});