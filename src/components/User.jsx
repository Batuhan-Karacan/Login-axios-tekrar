export default function User({ user }) {
  return (
    <div>
      <img src={user.avatar} /> <p>{user.first_name}</p>
    </div>
  );
}
