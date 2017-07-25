var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request('http://www.appinessworld.com/blogs/156/Remembering-2016-and-welcoming-2017-a-transcript-of-the-CEOs-year-end-talk-to-employees', function (error, response, html) {
        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
            //$('#disqus_thread').remove();
            $('.blog-fixed-navigate-holder').remove();
            $('.next-blog-holder').remove();
            $('.other-blogs-holder').remove();
            $('.read-more-blogs-holder ').remove();
            $('.footer-social-holder ').remove();
            var my_form = $('.main-container').html();
            var heading = $('.blog-title-holder > h2').text();
            var Info = $('.blog-author-details').text();
            console.log(heading)
            res.render('blogs', {my_form_content: my_form, head: heading,user:Info});
        }

    });
});

module.exports = router;
