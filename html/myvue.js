var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    html: '<h2>Declarative Rendering</h2>',
    buttonProp: 'btn btn-lg btn-success',
    seen: true
  },

  created: function () {
    console.log("message: " + this.message);
  },

  methods: {

    reverseMsg: function () {
      this.message = this.message.split('').reverse().join('');
    }

  }

});

var app1 = new Vue({
  el: '#app1',
  data: {
    show: true,
    message: 'Time is ' + new Date(),
    fruits: [
      { text: 'Banana' },
      { text: 'Orange' },
      { text: 'Kiwi' },
      { text: 'Apple' },
    ]
  },
});


var app2 = new Vue({
  el: '#app2',
  data: {
    seen: true,
    buttonText: 'ON'
  },

  methods: {

    hideAndShow: function () {
      if (this.seen)
        this.seen = false;
      else
        this.seen = true;
    }

  }

});