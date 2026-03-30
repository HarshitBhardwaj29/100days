import ProfileCard from "./profilecard.jsx";

function App() {
  const users = [
    {
      id: 1,
      username: "Harsh",
      age: 22,
      profession: "Frontend Developer",
      bio: "Love building web apps",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      username: "Rahul",
      age: 17,
      profession: "Student",
      bio: "Learning React",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      username: "Ankit",
      age: 25,
      profession: "Backend Developer",
      bio: "Node.js enthusiast",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {users.map((user) => (
        <ProfileCard key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;