// Note: Using should test syntax
module.exports = ({ response, store, repeat, i }) => ({
  path: 'tshirt',
  method: 'post',
  body: store.mockTshirt[i],
  test() {
    // check that a row was inserted in the db
    response.affectedRows.should.equal(1);
    // store the inserted id in mockUsers
    store.mockTshirt[i].id = response.insertId;
    // repeat this step/query as long as
    // there a more mockUsers to insert
    if(store.mockTshirt[i + 1]){
      repeat();
    }
  }
});