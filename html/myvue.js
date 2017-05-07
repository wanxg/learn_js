var app = new Vue({
  el: '#app',
  data: {
    message1: 'Hello Vue!',
  }
});

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Time is ' + new Date()
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    seen: true
  }
});