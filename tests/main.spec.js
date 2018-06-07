const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcCLIConverter = 'node.exe ./src/main.js';
const pkg = require('../package.json');

// https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1

describe('Main CLI', () => {
  it('should return thee btc-cli-converter version', (done) => {
    exec(`${btcCLIConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
  it('should return the description when btc-cli-converter --help', (done) => {
    exec(`${btcCLIConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done();
    });
  });
  it('should return the currency option when btc-cli-converter --help', (done) => {
    exec(`${btcCLIConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });
  it('should return the amount option when btc-cli-converter --help', (done) => {
    exec(`${btcCLIConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
})
