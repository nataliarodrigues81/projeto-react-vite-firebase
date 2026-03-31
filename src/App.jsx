import "./App.css";

import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { login, register, logout } from "./services/auth";

import AuthForm from "./components/AuthForm";
import UserContent from "./components/UserContent";
import Loading from "./components/loading"; // 

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError("");
    setAuthLoading(true);

    try {
      await login(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Usuário não encontrado");
      } else if (error.code === "auth/wrong-password") {
        setError("Senha incorreta");
      } else {
        setError("Erro ao fazer login");
      }
    }

    setAuthLoading(false);
  };

  const handleRegister = async () => {
    setError("");
    setAuthLoading(true);

    try {
      await register(email, password);
      setIsLogin(true);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email inválido");
      } else if (error.code === "auth/weak-password") {
        setError("Senha fraca");
      } else {
        setError("Erro ao cadastrar");
      }
    }

    setAuthLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) return <Loading />;

  return (
    <div className="page">
      <div className="container">

        {authLoading && <Loading />}

        {!user ? (
          <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            loading={authLoading}
            error={error} // ✅ PASSANDO O ERRO
          />
        ) : (
          <UserContent user={user} handleLogout={handleLogout} />
        )}

      </div>
    </div>
  );
}

export default App;