webpackJsonp([0xac23cdd8b3aa],{464:function(e,a){e.exports={data:{markdownRemark:{html:'<p>This will be applicable for services with the rate that looks like this:</p>\n<p>$X per <code>provisioned IOPS-month</code></p>\n<p>For example, it could be <code>RDS</code> (Relational Database SErvice), or <code>EBS</code> (Elastic Block Store).</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-98255.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.355605889014726%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQoz4VRi27DIAzM/3/etKlr84a0edCENGnzIuFmXK2ruklDOh1n4Gxj79y0OOUVTkWFI7E8lZDHAo2+wK11XbFtG8NaS7jzt35mBy/Pc4RhiCiOkaYpkiRFFMUIgoC0QMxxAUFIaB9HEd/xDz6fuXtRGCGTGaZpgleWJbIs44AUElJKfuySJEkCIQQncnGtNXTbomka1HXN2rHTbs8VahJKKaiqQt/33OZzC492N4v/lnvnDcOA6/WGtr2g63rcSI9UujMB/9kPXpP8SsqG44gbQdUNch5MgVq3WMwKV9PmjCx7s36tk2OPgZHhPA7oqX+Y5X68rTRaA0vaLn9hxth3uNJf9rrBMo2PdtlQ+58Q72+o/D1aEWM5l1hUeecXmHOFWRVQwQHFfofj7gNdElItC2aCMQZf4WBmAovKw9IAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="rate"\n        title=""\n        src="/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-fb8a0.png"\n        srcset="/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-1a291.png 148w,\n/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-2bc4a.png 295w,\n/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-fb8a0.png 590w,\n/static/rate-1b91c2342f4285e56f4c4dee0a4d7acf-98255.png 883w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The rate shown above is the rate for RDS of instance type <code>Provisioned IOPS SSD (io1) Volumes</code>.</p>\n<p>If you have created the instance (or could be created by another service), but not sure what that means to your bill.\nChances are you might not need it, or otherwise, be prepared for a higher bill amount.</p>\n<p>How the bill are calculated for provisioned IOPS-month type of instance:</p>\n<p>$0.11 * 1000 IOPS * number of hours</p>\n<p>= $110 for 1 month</p>\n<p>= $3.67 for 1 day</p>\n<p>That\'s for 1000 IOPS for an instance.</p>\n<hr>\n<p>Also, please take note that:</p>\n<ol>\n<li>Provisioned IOPS SSD (io1) volumes are <strong>not included</strong> in the AWS Free Tier</li>\n<li>They are not charged by usage of I/O, but the <strong>amount of IOPS enabled/provisioned</strong>.</li>\n</ol>\n<p>So if you enable an instance of 8000 IOPS of io1, but only used a bit of it, you will still be charged for</p>\n<p>$0.11 * 8000 * number of hours</p>\n<br />\nPlus, there will be a charge for the storage rate. Refer to the image attached above.\n<p><code>$0.138 per GB-month</code></p>\n<br />\n<p>So, if you are not sure, probably a General Purpose SSD (gp2) volume is your right choice.</p>\n<p>Refer to the <a href="https://aws.amazon.com/ebs/pricing/">EBS pricing</a> for another example. (the IOPS-month rate is applicable for RDS as well)</p>',frontmatter:{date:"May 02, 2018",path:"/blog/billing-for-aws-provisioned-iops",title:"Billing for AWS Provisioned IOPS (io1)",excerpt:"Watch out before it's too late",tags:["aws"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-billing-for-aws-provisioned-iops-93eb7e0a231fa609f857.js.map