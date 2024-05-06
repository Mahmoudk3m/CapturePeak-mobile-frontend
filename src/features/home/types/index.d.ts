declare namespace Home {
  type PostProps = {
    image: string;
    username: string;
    userImage: string;
    likes: number;
    liked: boolean;
    id: string;
    last: boolean;
  };
  type Post = {
    title: string;
    path: string;
    likes: number;
    liked: boolean;
    authorId: {username: string; image: string; _id: string};
    cloudinaryPublicId: string;
    _id: string;
  };
  type UploadPost = {
    title: string;
    type: string;
    uri: string;
  };
  type ReactPost = {
    postId: string;
    action: 'add' | 'remove';
  };
}
