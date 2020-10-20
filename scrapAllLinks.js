const axios = require("axios");
const cheerio = require("cheerio");
let urls = [
  "https://www.interviewbit.com/courses/programming/topics/arrays/",
  "https://www.interviewbit.com/courses/programming/topics/math/",
  "https://www.interviewbit.com/courses/programming/topics/binary-search/",
  "https://www.interviewbit.com/courses/programming/topics/strings/",
  "https://www.interviewbit.com/courses/programming/topics/bit-manipulation/",
  "https://www.interviewbit.com/courses/programming/topics/two-pointers/",
  "https://www.interviewbit.com/courses/programming/topics/linked-lists/",
  "https://www.interviewbit.com/courses/programming/topics/stacks-and-queues/",
  "https://www.interviewbit.com/courses/programming/topics/backtracking/",
  "https://www.interviewbit.com/courses/programming/topics/hashing/",
  "https://www.interviewbit.com/courses/programming/topics/heaps-and-maps/",
  "https://www.interviewbit.com/courses/programming/topics/tree-data-structure/",
  "https://www.interviewbit.com/courses/programming/topics/dynamic-programming/",
  "https://www.interviewbit.com/courses/programming/topics/greedy-algorithm/",
  "https://www.interviewbit.com/courses/programming/topics/graph-data-structure-algorithms/",
];

let links = [];

oneTopic = (url) => {
  const request = axios.get(url);
  return request
    .then((html) => {
      html = html.data;
      const $ = cheerio.load(html);
      // console.log($(".locked.problem_title").length);
      $(".locked.problem_title").each((index, value) => {
        let link = $(value).attr("href");
        // console.log(link)
        links.push(link);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

createRawURLS = () => {
  for (url of urls) {
  }
};

appendLinks = (links) => {
  links.map((link) => {
    return "https://www.interviewbit.com/" + link;
  });
};

async function solve() {
  try {
    console.log(links.length);
    await createRawURLS();
    console.log(links.length);
    appendLinks(links);
    // for (link of links) {
    //   console.log(link);
    // }
  } catch (err) {
    console.log("BETEEEEE ERROOOORR");
  }
}

solve();
