const Productcard = () => {
  return(
    <>
    
        <div className="border border-green-500 p-4">
          <img src="https://m.media-amazon.com/images/I/51afJC92cgL._SX522_.jpg"></img>
          <h1>Sony PlayStation®5 Digital Edition (slim) Console Video Game</h1>
          <p>Platform : PlayStation 5</p>
          <p>1K+ bought in past month</p>
          <p>₹44,990</p>
        </div>

        <div className="border border-blue-500 p-4">
          <img src="https://m.media-amazon.com/images/I/61Q1Pa4X4-L._SX679_.jpg"></img>
          <h1>Sony DualSense Wireless Controller White (PlayStation 5)</h1>
          <p>Platform : PlayStation 5</p>
          <p>1K+ bought in past month</p>
          <p>-4% ₹6,149</p>
        </div>

        <div className="border border-red-500 p-4">
          <img src="https://m.media-amazon.com/images/I/517X+Bfn5qL._SX342_SY445_.jpg"></img>
          <h1>Red Dead Redemption - 2 (PS4)</h1>
          <p>Brand: Polo</p>
          <p>100+ bought in past month</p>
          <p>-1% ₹2,266</p>
        </div>
    </>
  )
}

const ProductLayout = () => {
  return (
    <div className="2xl:container mx-auto">

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>

      </div>
    </div>
  );
};

export default ProductLayout;
