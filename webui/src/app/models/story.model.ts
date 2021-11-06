export interface IStory {
  title: string;
  author: string;
  description: string;
  isPrivate: boolean;
}

export class Story implements IStory {
  title: string;
  author: string;
  description: string;
  isPrivate: boolean;

  constructor() {
    this.title = '';
    this.author = '';
    this.description = '';
    this.isPrivate = false;
  }
}