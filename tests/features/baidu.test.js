const TITLE = '百度一下，你就知道';
module.exports = {
    '百度一下，你就知道': function (browser) {
        // Browser is the browser that is being controlled
        browser
            .url('https://www.baidu.com') // Navigate to the url
            .waitForElementVisible('body', 1000) // Wait until you can see the body element.
            .verify.title(TITLE) // Verify that the title is 'Bing'
            .end() // This must be called to close the browser at the end
    }
}