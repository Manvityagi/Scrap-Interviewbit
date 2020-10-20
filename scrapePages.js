const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.interviewbit.com/courses/programming/";

let pages = [];

axios
  .get(url)
  .then((html) => {
    html = html.data;
    const $ = cheerio.load(html);
    console.log($('div[class="topic-box  programming locked"]').length);
    // $(".topic-box.programming.locked").each((index, value) => {
    //     console.log('hello')
    //   let page = $(value).attr("href");
    //   pages.push(page);
    // });
  })
  .catch((err) => {
    console.log(err);
  });
