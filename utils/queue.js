class Queue{

  constructor(){
    this.items = [];
  }

  isEmpty(){
    return !(this.items.length > 0);
  }

  initFromArray(array){
    this.items = [...array];
    return this.items;
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue(){
    if(!this.isEmpty())
      return this.items.shift();
    else
      return null;
  }

  front(){
    if(!this.isEmpty())
      return this.items[0];
    else
      return null;
  }

  viewQueue(){
    return this.items;
  }

  getLength(){
    return this.items.length;
  }
}

module.exports = Queue;