import React, { useState } from "react";
import './product.css';

// ProductCard component
const ProductCard = ({ name, image, price, discount, rating, reviews }) => {
  const [activeColor, setActiveColor] = useState('blue');

  const handleColorChange = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="product-card" style={{ maxWidth: '320px', border: '1px solid #ddd', padding: '16px', borderRadius: '10px' }}>
      <div className="logo-cart" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ backgroundColor: '#e6f7ff', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', color: '#007bff' }}>
          {discount}
        </span>
        <i className="bx bx-shopping-bag" style={{ fontSize: '24px', color: '#007bff' }}></i>
      </div>
      <div className="main-images" style={{ textAlign: 'center', marginTop: '16px' }}>
        <img
          id="blue"
          className={`blue ${activeColor === 'blue' ? 'active' : ''}`}
          src={image}
          alt={name}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      <div className="shoe-details" style={{ marginTop: '16px' }}>
        <span className="shoe_name" style={{ fontWeight: 'bold', fontSize: '18px', display: 'block' }}>{name}</span>
        <div className="stars" style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <span style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
            <i className="bx bxs-star" style={{ color: '#FFD700' }}></i>
            <i className="bx bxs-star" style={{ color: '#FFD700' }}></i>
            <i className="bx bxs-star" style={{ color: '#FFD700' }}></i>
            <i className="bx bxs-star" style={{ color: '#FFD700' }}></i>
            <i className="bx bx-star" style={{ color: '#FFD700' }}></i>
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>{rating} ({reviews})</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
          <span style={{ fontSize: '14px', color: '#4CAF50' }}>Fast Delivery</span>
          <span style={{ fontSize: '14px', color: '#FF5722' }}>Best Price</span>
        </div>
      </div>
      <div className="color-price" style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="price" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          ${price}
        </div>
      </div>
      <div className="button" style={{ marginTop: '16px', textAlign: 'center' }}>
        <button style={{ backgroundColor: '#0f766e', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', fontSize: '16px' }}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// ProductSection component

// ProductSection component
const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section" style={{ margin: '20px 0' }}>
      <h2 className="section-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{title}</h2>
      <div 
        className="products-container" 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', // Ensure items wrap to the next line
          gap: '16px', 
          justifyContent: 'flex-start' // Align items properly
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

// BrandSection component
const BrandSection = () => {
  const brands = [
    { name: "MRF", image: "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png" },
    { name: "Nike", image: "https://i.pinimg.com/564x/29/df/c6/29dfc6f05b80804c18913851a79c5140.jpg" },
    { name: "Adidas", image: "https://ik.imagekit.io/dsareuftc/adidas-logo-png-transparent.png" },
    { name: "Puma", image: "https://cdn.icon-icons.com/icons2/2845/PNG/512/puma_logo_icon_181343.png" },
    { name: "Reebok", image: "https://logos-world.net/wp-content/uploads/2020/04/Reebok-Logo.png" },
    { name: "Under Armour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/225px-Under_armour_logo.svg.png" },
    { name: "New balance", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/450px-New_Balance_logo.svg.png?20160801155106" },
    { name: "Vector X ", image: "https://media.licdn.com/dms/image/v2/C510BAQEbox0PgbsAQg/company-logo_200_200/company-logo_200_200/0/1630625528779/vectorxindia_logo?e=1733961600&v=beta&t=LwybUx7Sgeu94aDJo3uMtrJaJXcafQwkq852m7qiBwQ" },
    { name: "Yonex", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo-Yonex.svg/1200px-Logo-Yonex.svg.png" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-10">Featured Sports Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-24 w-24 object-contain mx-auto mb-4"
              />
              <p className="text-lg font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// HomePage component combining both sections
const HomePage = () => {
  const outdoorGames = [
    { name: "MRF Kashmir Willow Winner", image: "https://www.mrfsports.com/sites/default/files/styles/homepage_bat_listing/public/mrf-kashmir-willow-winner_0_1.png?", price: "11,699", discount: "Up to 35% off", rating: "5.0", reviews: 455 },
    { name: " Kookaburra Regulation Cricket Ball", image: "https://cdn-5c84bc36-b681cbc1.mysagestore.com//b522fd52e101edc926c3308c230445d5/contents/variations/1a1104/thumbnail/big_1A1104@@White.jpg", price: "34,699", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "NIVIA Ashtang 2.0-FIFA PRO Football", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/m/f/l/420-455-22-ashtang-2-0-fifa-pro-official-5-1-fb-2-0-l-football-original-imagqbqaa75t844r.jpeg", price: "3,768", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
    { name: "ALFA AX-9", image: "https://alfahockey.in/wp-content/uploads/2019/12/AX9-P-2.webp", price: "23,699", discount: "Up to 55% off", rating: "5.0", reviews: 455 },
    { name: "ALFA Hockey Turf Ball Dimple Hollow (Pack of 6)", image: "https://alfahockey.in/wp-content/uploads/2020/01/dimple-ball-1-800x800.jpg", price: "1,699", discount: "Up to 5% off", rating: "5.0", reviews: 455 },
      { name: "Wilson MVP OUTDOOR BASKETBALL", image: "https://static.nbastore.in/resized/500X500/36/nba-mvp-basketball-size-7-brown-65147087d5db8.jpg", price: "1,099", discount: "Up to 45% off", rating: "5.0", reviews: 455 },
    { name: "Nivia Jh-P003 Nylon Volleyball Net ", image: "https://m.media-amazon.com/images/I/51CyTun+19L._SX679_.jpg", price: "1,969", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "Nike Pro Dri-fit Knit Knee Sleeves (1 piece) -Black", image: "https://gambol.in/cdn/shop/products/nike-pro-knitted-knee-sleeve-black-anthracite-white-031-852522_360x.jpg?v=1655207475", price: "2,199", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
    { name: "Wilson Essence 112 Tennis Racquet (280g, Strung)", image: "https://cdnmedia.racquets4u.com/media/iopt/catalog/product/cache/8f24f3f124e67ea1e49f457c6f2f1da7/w/i/wilson-essence-112-tennis-racquet-280g-strung.webp", price: "2,699", discount: "Up to 10% off", rating: "5.0", reviews: 455 },
    { name: "TON Classic English Willow Cricket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxp36MqhT9G8ee3lyepmxlrGQxurS_sls1zA&s", price: "11,699", discount: "Up to 6% off", rating: "5.0", reviews: 455 }

    // More products...
  ];

  const indoorGames = [
    { name: "Franklin Sports Family Volleyball Badminton Combo Set", image: "https://m.media-amazon.com/images/I/91g7wiwa1NL._SX679_.jpg", price: "34,567", discount: "Up to 35% off", rating: "5.0", reviews: 455 },
    { name: "STAG GLOBAL 2 Star Anywhere Everywhere Table Tennis Playset | 2 Racquets, 3 Balls (White)", image: "https://m.media-amazon.com/images/I/712IEJCGl+L._SX679_.jpg", price: "999", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "CABRIO Combo of Dotted and Plain Rubber Tennikoit Ring", image: "https://m.media-amazon.com/images/I/51sc0+nhrHL._SX522_.jpg", price: "368", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
    { name: "WINMAU Blade 6 Professional Bristle Dartboard", image: "https://m.media-amazon.com/images/I/71Rg736nqZL._SX679_.jpg", price: "11699", discount: "Up to 55% off", rating: "5.0", reviews: 455 },
    { name: "Pegasus Tungsten Steel Darts Set - 21g, 23g, 25g, 27g, 30g - White Red Dragon Stems and White Flights", image: "https://m.media-amazon.com/images/I/81mr39FRWcL._SX679_.jpg", price: "4,675", discount: "Up to 5% off", rating: "5.0", reviews: 455 },
    { name: "BCBESTCHESS Wooden Handcrafted Foldable Magnetic Chess Board Set with Extra Magnetic Pieces Extra Queens for 2 Players Kids and Adults (16x16 Inches, Brown)", image: "https://m.media-amazon.com/images/I/71y8xnEp0nL._SX522_.jpg", price: "8,999", discount: "Up to 45% off", rating: "5.0", reviews: 455 },
    { name: "SISCAA Champion Fighter Carrom Board Fast English Birch Ply Best Carrom Board (Black, Includes Perfect Shot Coin Set And Genius Striker ) 20Mm", image: "https://m.media-amazon.com/images/I/51y+RtnEwZL.jpg", price: "16,620", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "Jam & Honey Foosball (Big) | Table Soccer Game", image: "https://m.media-amazon.com/images/I/814YelpkIUL._SX522_.jpg", price: "4,299", discount: "Up to 15% off", rating: "5.0", reviews: 455 }
 
  ];

  const sportsWear = [
    { name: "Y-3 Gendo Superstar", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d4e48ce784c4dbfab8731bb78bf5170_9366/Y-3_Gendo_Superstar_White_IG2936_01_standard.jpg", price: "22,999", discount: "Up to 35% off", rating: "5.0", reviews: 455 },
    { name: "Armour Goalkeeper Jersey ", image: "https://cdn.shopify.com/s/files/1/0555/8235/9665/files/Re-2023-Lemon-Yellow-2.jpg?v=1698491113&width=400", price: "1,699", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "Carbonite Web", image: "https://cdn.shopify.com/s/files/1/0555/8235/9665/files/New-742-943-Multicolor-3.jpg?v=1698490651&width=400", price: "768", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
    { name: "HOMEPLAY-04 (Pack of 3)", image: "https://cdn.shopify.com/s/files/1/0555/8235/9665/files/2B0A8518.jpg?v=1710762715&width=400", price: "299", discount: "Up to 55% off", rating: "5.0", reviews: 455 },
    { name: "Oakley Cycling Helmet ARO3 Black 99470-001L", image: "https://sportsnextdoor.com/wp-content/uploads/2023/07/Oakley-Cycling-Helmet-ARO3-Black-99470-001L-1.jpg", price: "16,620", discount: "Up to 35% off", rating: "5.0", reviews: 455 },
    { name: "Oakley BXTR Metal Sunglasses OO9237-0239, Prizm Violet Lenses, Matte Clear Frame", image: "https://sportsnextdoor.com/wp-content/uploads/2023/07/Oakley-BXTR-Metal-Violet-OO9237-0239-1.jpg", price: "12,699", discount: "Up to 15% off", rating: "5.0", reviews: 455 }
    
  ];
    const Fitness= [
      { name: "Nivia Trainer Skipping Rope ", image: "https://m.media-amazon.com/images/I/41aKN1IhW6L._SX300_SY300_QL70_FMwebp_.jpg", price: "599", discount: "Up to 45% off", rating: "5.0", reviews: 455 },
    { name: "Orthopedic Wrist support for gym", image: "https://m.media-amazon.com/images/I/712q-L4JYaL._SX679_.jpg", price: "399", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
    { name: "Vector X Neoprene Compression Foot Support Sleeve ", image: "https://m.media-amazon.com/images/I/61hXfn35SVL._SX679_.jpg", price: "399", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
    { name: "Boldfit Gym Typhoon Shaker Bottle 700ml ", image: "https://m.media-amazon.com/images/I/51NKPZx0a6L._SX679_.jpg", price: "399", discount: "Up to 10% off", rating: "5.0", reviews: 455 },
    { name: "Redify Skipping Rope Men and women ", image: "https://m.media-amazon.com/images/I/71qyXnwS9nL._SX679_.jpg", price: "499", discount: "Up to 6% off", rating: "5.0", reviews: 455 },
    { name: "Protoner 20 kg with 3 Rods PVC Weight Lifting Package", image: "https://m.media-amazon.com/images/I/81wlE9LW+nL._SX679_.jpg", price: "1,699", discount: "Up to 35% off", rating: "5.0", reviews: 455 },
    { name: "Boldfit Badminton Grip Multicolor Anti Slip Perforated Tennis Racket Grip Tape Sweat", image: "https://m.media-amazon.com/images/I/61eMJfWRjOL._SX679_.jpg", price: "699", discount: "Up to 5% off", rating: "5.0", reviews: 455 },
    { name: "Yonex Nanogy 95 Badminton Strings", image: "https://m.media-amazon.com/images/I/515oXvHVf7L._SX679_.jpg", price: "699", discount: "Up to 15% off", rating: "5.0", reviews: 455 }
  ];
  const Jersey= [
    { name: "FW24 India Cricket T20 International Jersey ", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9885d0752ef4a6d9c7c00bdcddf6f10_9366/FW24_India_Cricket_T20_International_Jersey_Blue_JN0886_01_laydown.jpg", price: "1190", discount: "Up to 45% off", rating: "5.0", reviews: 455 },
  { name: "Argentina 24 Home Jersey", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d580c3e2e46248cdbfb71cff58d13d0a_9366/Argentina_24_Home_Jersey_White_IP8409_25_model.jpg", price: "4,259", discount: "Up to 25% off", rating: "5.0", reviews: 455 },
  { name: "2024 Official Match Jersey - Dhoni 7 - Adult (H/S) ", image: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fs%2Fcsk_half_sleeve_1.png&w=1920&q=75", price: "1,999", discount: "Up to 15% off", rating: "5.0", reviews: 455 },
  { name: "Tamil Thalaivas Home Jersey ", image: "https://scontent.fmaa13-1.fna.fbcdn.net/v/t1.6435-9/41019717_714753405525069_2613231039744573440_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=ecwPrgrRFrsQ7kNvgF2Ja48&_nc_ht=scontent.fmaa13-1.fna&_nc_gid=ABNST5BB8be6DTEYse6q6dw&oh=00_AYAKzaEACFe-bx7ssqR8pwcJK5MpbB-dDfPIGFYwuktVwQ&oe=6708FB6F", price: "1,699", discount: "Up to 10% off", rating: "5.0", reviews: 455 }
  ];
  return (
    <div className="m-10">
 

  {/* Promotional Section */}

  {/* Promotional Section */}
  <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
    <div className="mx-auto grid max-w-screen-xl rounded-lg bg-[url('https://media.fancraze.com/original/1671606436252/CSK-1360x440.webp')] bg-cover bg-center p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
      <div className="lg:col-span-5 lg:mt-0">
        <a href="#">
          <img className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src="https://ik.imagekit.io/dsareuftc/51oImgxFQ4L._SX300_SY300_QL70_FMwebp_.png?updatedAt=1726056901136" alt="peripherals" />
          <img className="mb-4 hidden dark:block md:h-full" src="https://ik.imagekit.io/dsareuftc/51oImgxFQ4L._SX300_SY300_QL70_FMwebp_.png?updatedAt=1726056901136" alt="peripherals" />
        </a>
      </div>
      <div className="me-auto place-self-center lg:col-span-7">
        <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          Save Upto 20% today on your purchase 
          of a new Cricket Kit.
        </h1>
        <p className="mb-6 text-cyan-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod, aperiam autem dolores fuga aliquid quia consequatur eos consectetur omnis numquam minus odio quibusdam cumque harum vero quis velit neque.
        </p>
        <a href="#" className="bg-red-600 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
          Pre-order now
        </a>
      </div>
    </div>
  </section>



      {/* Best Sellers Section */}
      <h1 className="text-center text-4xl font-extrabold mb-12 text-gray-900">Best Sellers</h1>

      {/* Product Sections */}
      <ProductSection title="Outdoor Games" products={outdoorGames} />
      <ProductSection title="Indoor Games" products={indoorGames} />
      <ProductSection title="Sportswear " products={sportsWear} />
      <ProductSection title="Sports and Fitness Equipments" products={Fitness} />

    {/* Best Sellers Section */}
    <h1 className="text-center text-4xl font-extrabold mb-12 text-gray-900">Top Sales</h1>

{/* Product Sections */}
<ProductSection title="Sports Jersey" products={Jersey} />
      {/* Brand Section */}
      <BrandSection />
   
{/* Our Service Section */}
<section className="py-12 bg-teal-500">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Service 1: Custom Sports Gear */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            src="https://ik.imagekit.io/dsareuftc/settings_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.png" // Add your custom image
            alt="Custom Sports Gear"
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">Custom Sports Gear</h3>
        <p className="text-white text-center">Personalize your equipment and apparel with our custom design services, tailored to your specific needs.</p>
      </div>

      {/* Service 2: Fast Shipping */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            src="https://ik.imagekit.io/dsareuftc/local_shipping_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.png" // Add your custom image
            alt="Fast Shipping"
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">Fast Shipping</h3>
        <p className="text-white text-center">Get your sports gear delivered swiftly with our express shipping options, ensuring you’re always ready to perform.</p>
      </div>

      {/* Service 3: Expert Guidance */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            src="https://ik.imagekit.io/dsareuftc/support_agent_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.png?updatedAt=1725977388157" // Add your custom image
            alt="Expert Guidance"
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">Expert Guidance</h3>
        <p className="text-white text-center">Our team of sports professionals is here to provide expert advice and help you choose the right products for your needs.</p>
      </div>
    </div>
  </div>
</section>

    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Product Quality</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Our products are made with the highest quality materials and craftsmanship. We ensure that every product meets our rigorous standards for durability, functionality, and aesthetics.
        </p>
      </div>
    </section>
    </div>
    
  );
};

export default HomePage;
