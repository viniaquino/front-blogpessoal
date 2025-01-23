import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("Sessão de usuário finalizada!");
        navigate("/");
    }

    return (
        <>
            <div className="w-full flex justify-center py-4 bg-slate-900 font-bold text-white">
                <div className="container flex justify-between text-lg">
                    <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                        <Link to="/home" className="text-2xl font-bold flex items-center gap-2">
                            <img 
                                src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000" 
                                alt="Icone Home" 
                                className="w-5 h-5"
                            />
                            Blog Pessoal
                        </Link>
                    </div>
                    <div className="flex gap-8">
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to='/postagens' className='hover:underline flex  items-center gap-2'>
                            <img 
                                src="https://img.icons8.com/?size=100&id=93419&format=png&color=000000" 
                                alt="Icone Postagens" 
                                className="w-5 h-5"
                            />
                            Postagens
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to="/temas" className="hover:underline flex items-center gap-2">
                                <img 
                                    src="https://img.icons8.com/?size=100&id=38073&format=png&color=000000" 
                                    alt="Icone Temas" 
                                    className="w-5 h-5"
                                />
                                Temas
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to="/cadastrartema" className="hover:underline flex items-center gap-2">
                                <img
                                    src="https://img.icons8.com/?size=100&id=123831&format=png&color=000000"
                                    alt="Ícone Novo Tema"
                                    className="w-5 h-5"
                                />
                                Novo tema
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <img 
                                src="https://img.icons8.com/?size=100&id=7847&format=png&color=000000" 
                                alt="Icone Perfil" 
                                className="w-5 h-5"
                            />
                            Perfil
                        </div>
                            <Link
                                to=""
                                onClick={logout}
                                className="hover:underline transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2"
                            >   
                                <img 
                                    src="https://img.icons8.com/?size=100&id=BvRKVanAagI0&format=png&color=000000" 
                                    alt="Icone Logout" 
                                    className="w-5 h-5"
                                />
                                Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
