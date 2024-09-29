// define the data models for User, Product, and Order.
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  id: number;
  productId: number;
  quantity: number;
}

// create a generic repository class that works with any type
class Repository<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  getById(id: number): T | undefined {
    // Assuming `id` is a property of the type `T`
    // This approach requires `T` to have an `id` property
    return this.data.find((item: any) => item.id === id);
  }
}

//instantiate the repository class for dirrerent types
const userRepository = new Repository<User>();
userRepository.add({ id: 1, name: "ramesh", email: "ramesh@gmail.com" });
userRepository.add({ id: 2, name: "bishal", email: "bishal@gmail.com" });

const productRepository = new Repository<Product>();
productRepository.add({ id: 1, name: "Laptop", price: 1200 });
productRepository.add({ id: 2, name: "iphone 15", price: 1800 });

const orderRepository = new Repository<Order>();
orderRepository.add({ id: 1, productId: 1, quantity: 2 });
orderRepository.add({ id: 2, productId: 2, quantity: 4 });

// Fetch all users
const users = userRepository.getAll();
console.log("users:", users);

// Fetch a product by ID
const product = productRepository.getById(1);
console.log("products:", product);

// Fetch an order by ID
const order = orderRepository.getById(1);
console.log("orders:", order);
