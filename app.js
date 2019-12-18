var app = new Vue({
  el: '#app',
  components: {
    'task': {
      props: ['task'],
      template:`
        <div class="ui segment task"
        v-bind:class="task.completed? 'done' : 'todo'" >

          <div class="ui grid">
            <div class="left floated twelve wide column">
              <div class="ui checkbox">
                <input type="checkbox" name="task" v-on:click="app.toggleDone($event, task.id)" :checked="task.completed" >
                <label>{{ task.name }} <span class="description">{{ task.description }}</span> </label>
              </div>
            </div>
            <div class="right floated three wide column">
            </div>
          </div>
        </div>
      `

    }
  },
  data: {
    tasks: [
      { id: 1, name: 'Todo 1', description: 'This is a todo', completed: false },
      { id: 2, name: 'Todo 2', description: 'This is a todo', completed: false },
      { id: 3, name: 'Todo 3', description: 'This is a completed todo', completed: true },
      { id: 4, name: 'Todo 4', description: 'This is a completed todo', completed: true },
    ],
    message: 'Hello World!'
  },
  computed: {
    completedTasks: function(){
      return this.tasks.filter(item => item.completed == true)
    },
    todoTasks: function(){
      return this.tasks.filter(item => item.completed == false )
    }
  },
  methods: {
    toggleDone: function(event, id){
      let task = this.tasks.find(item => item.id == id);
      console.log(task)
    }
  }
})
