webpackJsonp([75069344264691],{466:function(e,t){e.exports={data:{markdownRemark:{html:"<p>So you need a payment gateway for your react-native app, and for any reason, your only best choice is <a href=\"https://www.ipay88.com/\">iPay88</a>.</p>\n<br />\n<h4>The good news</h4>\n<p>You don't have to write your own sdk wrapper library.</p>\n<p>There is already an open source library for you.</p>\n<p>If you are looking to integrate iPay88 into your react-native app, take a look at <a href=\"https://github.com/myussufz/react-native-ipay88-sdk\">this library</a>.</p>\n<p>I must say it is an awesome work from the developer.</p>\n<br />\n<hr />\n<br />\n<h4>The bad news</h4>\n<p>You got to be extremely <strong>patience</strong>.</p>\n<p>Chances are, you are going to spent a lot of time to get your issue (not your ticket) resolved.</p>\n<p>So be earlier in your integration, do it as soon as possible!</p>\n<br />\n<hr />\n<br />\n<h4>The undocumented part</h4>\n<p>To provide a bit of context to my experience, here is what I am trying to do:</p>\n<ul>\n<li>integrate iPay88 and enable Alipay</li>\n</ul>\n<p>If you are trying to enable credit card or online banking, you might have better experience integrating it.</p>\n<br />\n<h5>PaymentId</h5>\n<p>So in order to enable selected/subscribed payment method, we need to provide <code>paymentId</code> for respective payment method, and in my case, for Alipay.</p>\n<p>Alipay is supported by the platform(that's why it is chosen), but there is no documentation on the <code>paymentId</code> that need to be used, and you get <code>Invalid parameters(Payment Not Allow)</code> error.</p>\n<p>A ticket was submitted, and got a response the next working day with a link in it to integrate by using \"standard integration API doc\".</p>\n<p>Then you get the same documentation and it don't have the <code>paymentId</code> for Alipay.</p>\n<p>The cycle repeats.</p>\n<p>Another ticket was submitted, with greater precision on the issue(to avoid getting another reply with a link).</p>\n<p>This time is different, I was asked to provide the merchant code, and redirect to contact with account manager.</p>\n<p>After few more rounds, finally you got what you want. The <code>paymentId</code> for Alipay payment method.</p>\n<p>However, it still didn't work.</p>\n<p>What now?</p>\n<p><code>Invalid parameters(Payment Not Allow)</code></p>\n<br />\n<h5>Currency</h5>\n<p>So the above cycle, repeats again.</p>\n<p>It was due to unsupported currency that caused it, but you only can know after a lot of emails, and many days later.</p>\n<p>So be sure to ask about the supported currency if you are integrating Alipay with iPay88.</p>\n<br />\n<hr />\n<br />\n<h4>Key takeaway</h4>\n<ol>\n<li>When in doubt, or facing issue, <strong>directly contact account manager</strong>.</li>\n<li>Integrating iPay88 in react-native app <strong>takes relatively longer time</strong> than other payment gateways, like Stripe or Braintree.\nThere is no sandbox account or test account and mostly require time checking with account manager and communicating to and fro.</li>\n<li>Use the right <strong>merchant code</strong>, ask your account manager for confirmation. Generally, it is different from the web one.</li>\n<li>Make sure to handle the <strong>BackendPostURL</strong> in your backend.</li>\n</ol>\n<br />\n<p>If you are curious on the solutions, here you go.</p>\n<p>You need to pass in <code>paymentId: 118</code> and <code>currency: 'CNY'</code> if you are using Alipay.</p>\n<p>iPay88 is great to be used for web integration. However, when it comes to mobile, there needs to be improvements.</p>",frontmatter:{date:"September 25, 2018",path:"/blog/ipay88-react-native-integration",title:"iPay88 integration with react native",excerpt:"The undocumented part"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-ipay-88-react-native-integration-bd3742e0672d01592dfe.js.map