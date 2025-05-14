import Product from "./Product/product";
import Mailbox from "./Mailbox/mailbox";


export default function App() {
  return (
    <>
      <h1> Best Selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />

      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />


      <Mailbox
        username="Jacob"
        messages={["Message 1", "Message 2", "Message 3", "Message 4"]}
      />
    </>
  );
}


