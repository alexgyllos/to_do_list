import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy Shopping", isCompleted: false, priority: false},
        {name: "Clean Bathroom", isCompleted: true, priority: true},
        {name: "Cars MOT", isCompleted: false, priority: false}
      ],
      newItem: "",
      priority: "",
    },
    methods: {
      saveNewItem: function() {
        const itemToAdd = {
          name: this.newItem,
          isCompleted: false,
          priority: this.priority
        }
        this.items.push(itemToAdd);
        this.newItem = "";
        this.priority = "";
      },
      completeTask: function(index) {
        this.items[index].isCompleted = true
      },
      setPriority: function() {
        if (this.priority === 'true') {
        this.priority = true;
      } else {
        this.priority = false;
      }}
    }
  });
});
