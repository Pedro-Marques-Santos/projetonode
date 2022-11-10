import { v4 as uuidV4 } from 'uuid'

class Category {
  name: string;
  description: string;
  created_at: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category }