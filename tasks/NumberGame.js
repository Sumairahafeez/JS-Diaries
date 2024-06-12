function job(int) {
  let prom = new Promise((resolve, reject) => {
    if (typeof int != "number") {
      reject("error");
    } else if (int % 2 != 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else if (int % 2 == 0) {
      setTimeout(() => {
        resolve("odd");
      }, 2000);
    }
  });

  let p1 = prom
    .then((e) => {
        console.log(e);
        return e;
    
    })
    .catch((err) => {
        console.log(err);
        return err;
    });
  return p1;
}
job("abc");
module.exports = job;
