import React from 'react';

// Sample data
const posts = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Fluffy',
    species: 'Cat',
    gender: 'Female',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Max',
    species: 'Dog',
    gender: 'Male',
  },
  // Add more posts as needed
];

const PostList = () => {
  const handleApprove = (id) => {
    console.log('Approve post with id:', id);
  };

  
  const handleDelete = (id) => {
    console.log('Delete post with id:', id);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap bg-white shadow-md rounded-lg border-4 border-red-500">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center p-4 border-b border-gray-200">
            <img src={post.imageUrl} alt={post.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 ml-4">
              <p className="text-lg font-semibold">{post.name}</p>
              <p className="text-gray-600">Species: {post.species}</p>
              <p className="text-gray-600">Gender: {post.gender}</p>
            </div>
            <div className="ml-4 space-x-2">
              <button
                onClick={() => handleApprove(post.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
