# Rotoris - Luxury Watch Brand Website

A modern, elegant e-commerce website for the Rotoris luxury watch brand, featuring product collections, shopping cart functionality, and customer engagement tools.

## 🌐 Live Website

Visit the live website: [Rotoris Watch Brand](https://iftequaruddin220-hue.github.io/rotoris-watch-website/)

## 📋 Features

### Core Pages
- **Home (index.html)** - Hero section, featured collections, products, about, and contact
- **Collections (products.html)** - Browse watches by collection with filters
- **Shopping Cart (cart.html)** - Manage cart items and checkout
- **Responsive Design** - Mobile-friendly on all devices

### Product Collections
1. **Classic Series** - Timeless elegance with precision engineering
2. **Gold Edition** - Premium gold-plated luxury timepieces
3. **Silver Elegance** - Refined silver designs
4. **Sport Edition** - Durable watches for active lifestyles

### Functionality
✅ Smooth navigation and scroll animations
✅ Add to cart feature with local storage
✅ Product filtering by price and sorting options
✅ Contact form for customer inquiries
✅ Responsive mobile navigation
✅ Order summary with tax and shipping calculations
✅ Social media links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - Interactive features without dependencies
- **Local Storage** - Client-side cart management

## 📁 Project Structure

```
rotoris-watch-website/
├── index.html          # Homepage
├── products.html       # Product collections page
├── cart.html          # Shopping cart page
├── styles.css         # Global styles
├── script.js          # Main JavaScript functionality
└── README.md          # This file
```

## 🎨 Design Highlights

- **Color Scheme**: Dark elegance with gold accents (#d4af37)
- **Typography**: Clean, modern fonts with premium feel
- **Layout**: Grid-based responsive design
- **Animations**: Smooth scroll, hover effects, fade-in animations

## 💰 Sample Products

### Classic Series
- Rotoris Classic Black - $899
- Rotoris Elegance - $1,099
- Rotoris Heritage - $1,199
- Rotoris Signature - $999

### Gold Edition
- Rotoris Golden Hour - $1,599
- Rotoris Gold Luxury - $1,799
- Rotoris Prestige Gold - $1,899
- Rotoris Gold Elite - $2,099

*And more in Silver and Sport categories...*

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/iftequaruddin220-hue/rotoris-watch-website.git
   cd rotoris-watch-website
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment
The website is automatically deployed to GitHub Pages. Simply push changes to the main branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

## 📧 Contact Information

- **Email**: info@rotoris.com
- **Phone**: +1 (800) ROTORIS
- **Address**: Luxury Watch District, Geneva, Switzerland

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Update Brand Colors
Edit variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #d4af37;
    --text-color: #333;
    --light-bg: #f5f5f5;
    --white: #ffffff;
    --accent: #c0c0c0;
}
```

### Add New Products
Edit the `allProducts` object in `products.html`:
```javascript
const allProducts = {
    collection_name: [
        { id: 1, name: 'Watch Name', price: 999, rating: 4.9, specs: 'Specifications' }
    ]
};
```

## 🌟 Future Enhancements

- [ ] Backend integration for real product database
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] User authentication and profiles
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Blog/News section
- [ ] Newsletter subscription
- [ ] Live chat support
- [ ] Admin dashboard for inventory management

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by: iftequaruddin220-hue

## 🙏 Acknowledgments

- Inspired by luxury watch brand websites
- Icons and design principles from modern e-commerce platforms
- Community feedback and suggestions

---

**Made with ❤️ for Rotoris Watch Brand** ⌚