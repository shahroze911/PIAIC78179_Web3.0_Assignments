interface User {
  id: number;
  username: string;
}
interface Comment {
  id: number;
  user: User;
  content: string;
  timestamp: Date;
}
interface Like {
  user: User;
  timestamp: Date;
}
interface Post {
  post_id: number;
  title: string;
  content: string;
  likes: Like[];
  author: User;
  comments: Comment[]; // Add the comments property
}
// List of users
const users: User[] = [
  { id: 1, username: "zohaib302" },
  { id: 2, username: "shah007" },
  { id: 3, username: "naveed7" },
  { id: 4, username: "hamza4" },
  { id: 5, username: "sameer5" },
  { id: 6, username: "ali8" },
];

const comments: Comment[] = [
  {
    id: 1,
    user: users[0],
    content: "Nice picture",
    timestamp: new Date(),
  },
  {
    id: 2,
    user: users[1],
    content: "Great Job",
    timestamp: new Date(),
  },
  {
    id: 3,
    user: users[0],
    content: "😂",
    timestamp: new Date(),
  },
];

const posts: Post[] = [
  {
    post_id: 1,
    title: "Feeling Happy",
    content: "Test Content",
    likes: [
      { user: users[0], timestamp: new Date() },
      { user: users[1], timestamp: new Date() },
      { user: users[3], timestamp: new Date() },
      { user: users[2], timestamp: new Date() },
    ],
    author: users[0],
    comments: [comments[0], comments[1]], // Add comments to the post
  },
  {
    post_id: 2,
    title: "Travelling",
    content: "Travelling to Skardu",
    likes: [
      { user: users[0], timestamp: new Date() },
      { user: users[1], timestamp: new Date() },
      { user: users[2], timestamp: new Date() },
      { user: users[3], timestamp: new Date() },
      { user: users[4], timestamp: new Date() },
      { user: users[5], timestamp: new Date() },
    ],
    author: users[1],
    comments: [comments[2],comments[0], comments[1]], // Add comments to the post
  },
  {
    post_id: 3,
    title: "Going to University",
    content: "Air University",
    likes: [
      { user: users[0], timestamp: new Date() },
      { user: users[1], timestamp: new Date() },
      { user: users[4], timestamp: new Date() },
      { user: users[5], timestamp: new Date() },
    ],
    author: users[1],
    comments: [comments[2], comments[0], comments[1]], // Add comments to the post
  },
];

function findMostLikedPost(posts: Post[]): {
  post: Post | null;
  user: User | null;
  likedBy: string[];
  comments: Comment[];
} {
  let mostLikedPost: Post | null = null;
  let mostLikesCount = 0;

  for (const post of posts) {
    const likesCount = post.likes.length;

    if (likesCount > mostLikesCount) {
      mostLikedPost = post;
      mostLikesCount = likesCount;
    }
  }

  const likedBy: string[] = mostLikedPost
    ? mostLikedPost.likes.map((like) => like.user.username)
    : [];

  return {
    post: mostLikedPost,
    user: mostLikedPost ? mostLikedPost.author : null,
    likedBy: likedBy,
    comments: mostLikedPost ? mostLikedPost.comments : [],
  };
}

const result = findMostLikedPost(posts);

if (result.post && result.user) {
  console.log(`Most Liked Post: ${result.post.title}`);
  console.log(`Content of the Post: ${result.post.content}`);
  console.log(`Number of Likes: ${result.post.likes.length}`);
  console.log(`Posted by User: ${result.user.username}`);
  console.log(`Liked by: ${result.likedBy.join(", ")}`);
  console.log("Comments:");
  result.comments.forEach((comment) => {
    console.log(`- ${comment.user.username}: ${comment.content}`);
  });
} else {
  console.log("No posts found.");
}
