const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

function factory(lib, list) {
  return list.map((order) =>
    Object.assign(
      {},
      order.template,
      Object.fromEntries(order.parts.map((p) => [p, lib[p]]))
    )
  );
}
const products = factory(library, orders);
console.log(products);
console.log(products[3].play("Rick Astley", "Never Gonna Give You Up"));
