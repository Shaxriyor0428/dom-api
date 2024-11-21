const requests = {
  controller: new AbortController(),
  getData: async function (url, deadline) {
    try {
      this.cancelRequest(deadline);
      const res = await fetch(url, { signal: this.controller.signal });
      const products = await res.json();
      console.log(products);
    } catch (error) {
      console.error("ERRORON GETDATA", error);
    }
  },

  cancelRequest(time) {
    try {
      setTimeout(() => {
        this.controller.abort();
      }, time);
    } catch (error) {
      console.error("ERROR ON Cancel", error);
    }
  },
};

requests.getData("https://dummyjson.com/products", 3000);
