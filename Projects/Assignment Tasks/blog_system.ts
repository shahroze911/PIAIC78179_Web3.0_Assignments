interface Author {
  id: number;
  name: string;
  bio: string;
}
interface Comment {
  author: Author;
  content: string;
  timestamp: Date;
}
type cmt = Comment[];
interface Post {
  post_id: number;
  title: string;
  content: string;
  author: Author;
  comments: cmt;
}
const authors: Author[] = [
  {
    id: 1,
    name: "Shah",
    bio: "Software Developer",
  },
  {
    id: 2,
    name: "Sahotra",
    bio: "Business Analyst",
  },
  {
    id: 3,
    name: "Kamran",
    bio: "Designer",
  },
];

const post: Post[] = [
  {
    post_id: 1,
    title: "Benefits of Typescript",
    content: "Content of post 1",
    author: authors[0],
    comments: [
      {
        author: authors[1], // Author with id 2
        content: "Informative",
        timestamp: new Date(),
      },
      {
        author: authors[2], // Author with id 2
        content: "Nice article",
        timestamp: new Date(),
      },
    ],
  },
  {
    post_id: 2,
    title: "What is Metaverse?",
    content: "Content of post 1",
    author: authors[1],
    comments: [
      {
        author: authors[0], 
        content: "Mind Blowing",
        timestamp: new Date(),
      },
      {
        author: authors[1], 
        content: "Pakistan Zindabad",
        timestamp: new Date(),
      },
      {
        author: authors[2],
        content: "Nice",
        timestamp: new Date(),
      },
    ],
  },
];

// Function to sort posts based on the number of comments
function sortPostsByComments(posts: Post[]): Post[] {
  return posts
    .slice()
    .sort((postA, postB) => postB.comments.length - postA.comments.length);
}

// Sort the posts
const sortedPosts = sortPostsByComments(post);
console.log("Posts Sorted on the basis of number of Comments");
sortedPosts.forEach((post, postIndex) => {
  console.log(`Post ID: ${post.post_id}`);
  console.log(`Post ${postIndex + 1}: `);
  console.log(`Title ${post.title}`);
  console.log(`Author ${post.author.name} : ${post.author.bio}`);
  console.log(`Content ${post.content}`);
  console.log(`No of Comments: ${post.comments.length} comments`);
  console.log(`Comments`);
  post.comments.forEach((comment, commentIndex) => {
    console.log(`  Comment ${commentIndex + 1}:`);
    console.log(`  Author: ${comment.author.name}`);
    console.log(`  Content: ${comment.content}`);
    console.log(`  Timestamp: ${comment.timestamp}`);
  });
  console.log("========================");
});
