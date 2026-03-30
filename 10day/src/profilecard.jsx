function ProfileCard({ username, age, profession, bio, image }) {
  return (
    <div className="card">
      <img src={image} alt={username} className="card-image" />

      <h2>{username}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Profession:</strong> {profession}</p>
      <p>{bio}</p>
      <p>
        <strong>Status:</strong> {age < 18 ? "Minor" : "Adult"}
      </p>

      <button>Follow</button>
    </div>
  );
}

export default ProfileCard;