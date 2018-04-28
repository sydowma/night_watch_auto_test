// module.exports = {
//     'Title is Bing': function (browser) {
//         // Browser is the browser that is being controlled
//         browser
//             .url('https://www.bing.com') // Navigate to the url
//             .waitForElementVisible('body', 1000) // Wait until you can see the body element.
//             .verify.title('微软 Bing 搜索 - 国内版') // Verify that the title is 'Bing'
//             .end() // This must be called to close the browser at the end
//     }
// }