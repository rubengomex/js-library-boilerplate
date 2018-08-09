export default class Todo {
  constructor({ name }) {
    this.name = name
  }

  async getTodo() {
    const todo = await Promise.resolve({ name: this.name })
    console.log(todo)
    return todo
  }
}
