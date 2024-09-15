export default async function PostsPage() {
  let data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit_10"
  );
  let posts = await data.json();
  return (
    <div>
      <h1 className="text-center text-5xl mb-4">ALl Posts: {posts.length}</h1>
      <div>
        <ul className="grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-green-300 p-4 rounded-md">
              <li className="text-xl font-bold mb-3">{post.title}</li>
              <li>{post.body}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
