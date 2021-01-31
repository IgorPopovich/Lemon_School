function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }
  console.log('Максимальное общее значение, которое нацело делит два заданных числа = ' + NOD(8, 18));