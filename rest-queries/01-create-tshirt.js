// Note: Using should test syntax
module.exports = ({ response, store, repeat, i }) => ({
  path: 'tshirt',
  method: 'post',
  body: store.mockTshirt = require('./mock-tshirt.json'),
  test() {
    
    response.affectedRows.should.equal(1);
    
    store.mockTshirt[i].id = response.insertId;
    
    if(store.mockTshirt[i + 1]){
      repeat();
    }
  }
});