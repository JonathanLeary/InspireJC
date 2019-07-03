export default class toDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    return `
    <p>${this.description} <input type="checkbox" id="myCheck" onclick="completed()">
    <p id="text" style="display:"none"></p>
    <button onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-danger">Done</button>
    </div>
    `
  }
}