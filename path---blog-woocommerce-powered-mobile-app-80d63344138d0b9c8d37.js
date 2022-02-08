webpackJsonp([0xd6159d562fe5],{516:function(e,o){e.exports={data:{markdownRemark:{html:"<p>E-commerce is eating the retail world, and mobile app is playing an important role.</p>\n<p>If you own an e-commerce website, you should consider having an app for your business,</p>\n<p>because people tend to use mobile apps more ofthen than mobile web browser,</p>\n<p>and if you are running your e-commerce site with Wordpress WooCommerce, there is a good news for you.</p>\n<br />\n<h4>Backend ready with WooCommerce API</h4>\n<p>With WooCommerce API, you are good to go with the existing backend for your new mobile app.</p>\n<p>I am not going into detail how to enable REST API for your WooCommerce site.</p>\n<p>Let's just dive into developing the mobile app with it.</p>\n<p>Here are the <a href=\"http://woocommerce.github.io/woocommerce-rest-api-docs/\">API docs</a> to start with.</p>\n<br />\n<h5>Authentication</h5>\n<p>WooCommerce API provides <code>/customers</code> and <code>/token</code> endpoints for sign up and login purpose.</p>\n<p>However, do take note that the base url is different for <code>/token</code> in this case.</p>\n<p>To generate a token and hence login a user, you need to use <code>/wp-json/jwt-auth/v1/token</code>.</p>\n<p>Whereas for the rest of the API, use <code>/wp-json/wc/v2/</code> as base url instead.</p>\n<p>However, there are a pitfall in the authentication/customers module, which is reset a user password.</p>\n<p>To reset a password, WooCommerce did not provide an endpoint for that,</p>\n<p>but considering the amount of time saved for the rest of the available APIs, this is some what tolerable.</p>\n<p>Not to mention there are ways around it.</p>\n<br />\n<h5>Products</h5>\n<p>This endpoint is pretty much perfect for showing list of products for viewing, with pagination options and lots of other metadata like available stocks, prices etc.</p>\n<p>You can also build product reviews screens with the <code>Product reviews</code> module. Pretty neat.</p>\n<br />\n<h5>Shopping cart &#x26; Checking out</h5>\n<p>Perhaps the most important feature of all e-commerce apps.</p>\n<p>WooCommerce doesn't provide cart module. This is left for developer to implement own cart and checkout system.</p>\n<p>However, it is not hard to build one. I will cover this part in future blog topic.</p>\n<br />\n<h5>Orders</h5>\n<p>Customers place orders and with this module, you are good to go to show the purchase history, order status and etc.</p>\n<p>You can also view purchased item and their respective prices with a bit of twist.</p>\n<br />\n<h5>Payment</h5>\n<p>Well this could be a bit tricky because in order to have good user experience, it is advisable to go with native implementation of payment gateway(because you are just one step away from making a sale!).</p>\n<p>So you want to be extra careful here. Luckily for most payment gateway provider(that I've used so far), mobile support is available and somewhat considered good for certain provider.</p>\n<br />\n<hr />\n<br />\n<h4>Key takeaway</h4>\n<p>Overall it is time saving to use WooCommerce API considering that most APIs are ready to be consumed for mobile app. Products, reviews, customers and orders modules are well taken care of.</p>\n<p>Developer just need to integrate with payment gateway and implement a shopping cart &#x26; check-out module for a complete e-commerce app.</p>\n<p>So with the time saved, it means more time for better UI/UX, or simply reduction in development cost.</p>",frontmatter:{date:"November 06, 2018",path:"/blog/woocommerce-powered-mobile-app",title:"WooCommerce powered mobile app",excerpt:"Increase customer engaegement for your e-commerce site",tags:["e-commerce"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-woocommerce-powered-mobile-app-80d63344138d0b9c8d37.js.map