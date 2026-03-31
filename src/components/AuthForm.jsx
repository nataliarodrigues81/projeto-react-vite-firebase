const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleLogin,
  handleRegister,
  loading,
  error 
}) => {
  return (
    <div className="card">

      <h3>
        {isLogin
          ? "Acesse a sua conta para continuar"
          : "Crie sua conta"}
      </h3>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {isLogin ? (
        <button onClick={handleLogin} disabled={loading}>
          Acessar
        </button>
      ) : (
        <button onClick={handleRegister} disabled={loading}>
          Cadastrar
        </button>
      )}

      <p>
        {isLogin ? "Não possui conta?" : "Já possui conta?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Cadastrar" : "Acessar"}
        </button>
      </p>

      {/* ✅ ERRO AGORA DENTRO DO CARD */}
      {error && <p className="error">{error}</p>}

    </div>
  );
};

export default AuthForm;