
var plrdata = []
plrdata.nuts = new Decimal(10);
plrdata.upgs = []
for (let i = 0; i < 10; i++) {
    let generator = {
      cost: Decimal.pow(Decimal.pow(10, i), i).mul(10),
      bought: new Decimal(0),
      amount: new Decimal(0),
      mult: new Decimal(1)
    }
    plrdata.upgs.push(generator)
  }
function getnuts() {
    nuts = Decimal.add(nuts,Decimal.mul(1,Decimal.add(plrdata.upgs[0].amount+1)).mul(plrdata.upgs[0].mult))
    document.getElementById("nuts").textContent = `Nuts: ${nuts.toString()}`
}