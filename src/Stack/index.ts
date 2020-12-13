import { Node } from "./Node";

export class Stack {
  /* last index is TOP of stack */
  private values: Array<number> = [];

  /*
    use push to insert at last index
  */
  push(data: number) {
    this.values.push(data);
  }

  /*
    use pop to insert at last index
  */
  pop(): number {
    return this.values.pop() as number;
  }

  /*
    return last element as its on top
  */
  top(): number {
    return this.values[this.values.length - 1];
  }
  
  /*
    print values arrays
  */
  printStack () {
    console.log(this.values);
  }

  /*
    assign to []
  */
  delete() {
    this.values = [];
  }
}
