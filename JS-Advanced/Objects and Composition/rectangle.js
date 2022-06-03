function rectangle(width, height, color) {
  let letter = color.charAt(0).toUpperCase();
  color = color.replace(color[0], letter);
  let obj = {
    width: width,
    height: height,
    color: color,
    calcArea() {
      return width * height;
    },
  };
  return obj;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
