webpackJsonp([0xa5fc43028885],{493:function(e,o){e.exports={data:{markdownRemark:{html:"<p>There are time when you have multiple AWS access keys and secrets.</p>\n<p>Each key are able to access the AWS resources/services, depending on the given permissions.</p>\n<p>Ideally those keys only have access to the resources that are needed, nothing more.</p>\n<p>However, it might still happen that you are accessing the same services, but for different accounts.</p>\n<p>Let say pushing files to S3 bucket, but instead of pushing to your work/company AWS account, you want to push it to your personal one.</p>\n<p>So you want to make sure you are passing in the right configurations for the command.</p>\n<h4>AWS Profile</h4>\n<p>What you are looking for is AWS <em>profile</em> management. (I made that up, but you get the idea.)</p>\n<p>You can have a quick look at your current profiles using this command.</p>\n<pre><code>$ cat ~/.aws/config\n</code></pre>\n<p>Well, to save you some typings, here's mine.</p>\n<pre><code>[default]\nregion = ap-southeast-1\noutput = text\n\n[profile docker-repository]\nregion = us-west-2\n\n[profile eb-cli]\naws_access_key_id =\naws_secret_access_key =\n\n\n[profile chinloong]\naws_access_key_id =\naws_secret_access_key =\nregion = ap-southeast-1\n</code></pre>\n<p>You guessed it right. <strong>default</strong> configurations will be used if no profile is spcified explicitly.</p>\n<p>New profile can be created by following the pattern you can derived from the file.</p>\n<p><code>[profile staging]</code></p>\n<p>and passed it as an argument in the command as</p>\n<p><code>--profile staging</code></p>\n<p>For example:</p>\n<p>I am trying to deploy files to S3 bucket to use it in static web hosting.</p>\n<pre><code>s3-deploy './public/**' --cwd './public/' --profile chinloong --bucket your-bucket-name --deleteRemoved --gzip\n</code></pre>\n<p>Bad news is, it won't work.</p>\n<p>You will probably get:</p>\n<pre><code>(node:82129) UnhandledPromiseRejectionWarning: Upload error: CredentialsError: Missing credentials in config (CredentialsError: Missing credentials in config\n</code></pre>\n<h4>The missing part</h4>\n<pre><code>$ cat ~/.aws/credentials\n</code></pre>\n<p>Make sure these two configs are there.</p>\n<pre><code>aws_access_key_id =\naws_secret_access_key =\n</code></pre>\n<p>Did I mentioned about the profile name?</p>\n<p>Before I forgot, you can specify the profile name those configs are for.\nBut watchout for the missing <strong>profile</strong> word.</p>\n<p>The full block looks like this. (Instead of <code>[profile staging]</code>)</p>\n<pre><code>[staging]\naws_access_key_id =\naws_secret_access_key =\n</code></pre>\n<p>You are now good to go!</p>\n<h4>Explanation</h4>\n<p>So we have</p>\n<pre><code>~/.aws/config\n</code></pre>\n<p>and</p>\n<pre><code>~/.aws/credentials\n</code></pre>\n<p>In short, use</p>\n<p><code>~/.aws/credentials</code> for sensitive config like your access key and secret.</p>\n<p><code>~/.aws/config</code> for less sensitive config like <code>region=us-west-2</code> or <code>max_concurrent_requests=10</code></p>\n<p>Hope that clears up things a bit for you! 😀</p>\n<p>You can also set the profile as environment variable.</p>\n<p><code>AWS_PROFILE=staging s3-deploy ...</code></p>\n<p>Full explanation?</p>\n<p>Read it here. <a href=\"https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html\">https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html</a></p>\n<p>and here <a href=\"https://docs.aws.amazon.com/cli/latest/topic/config-vars.html\">https://docs.aws.amazon.com/cli/latest/topic/config-vars.html</a></p>",frontmatter:{date:"May 09, 2018",path:"/blog/aws-config-vs-aws-credentials",title:"aws/config vs aws/credentials",excerpt:"Get it right",tags:["aws"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-aws-config-vs-aws-credentials-6643cf76265c99921e42.js.map