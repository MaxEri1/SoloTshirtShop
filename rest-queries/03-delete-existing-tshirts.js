// Note: Using expect test syntax
module.exports = ({ expect, response }) => ({
    path: 'tshirt',
    method: 'delete',
    test() {
      
      expect(response.warningCount).to.equal(0);
    }
  });