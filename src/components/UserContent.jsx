const UserContent = ({ user, handleLogout }) => {
  return (
    <div className="card">
      <p>Usuário autenticado</p>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default UserContent;