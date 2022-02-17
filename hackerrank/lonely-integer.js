const lonelyinteger = (a) => {
  if (a.length === 1) {
    return a[0];
  }
  let count = {};
  for (let i = 0; i < a.length; i++) {
    if (!count[a[i]]) {
      count[a[i]] = 1;
    } else {
      count[a[i]] += 1;
    }
  }
  for (const [key, value] of Object.entries(count)) {
    if (value === 1) {
      return key;
    }
  }
};