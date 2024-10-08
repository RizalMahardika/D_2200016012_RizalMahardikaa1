const { expect } = require('chai');
const { tambah, kali } = require('./math');

describe('Pengujian Tambahan untuk Fungsi Matematika', function() {
  it('seharusnya mengembalikan NaN saat menambahkan string "2" dan 2', function() {
    expect(tambah("2", 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan string "2" dan 3', function() {
    expect(kali("2", 3)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat menambahkan null dan 2', function() {
    expect(tambah(null, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan null dan 3', function() {
    expect(kali(null, 3)).to.be.NaN;
  });
});
