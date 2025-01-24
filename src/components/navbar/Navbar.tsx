import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
    const navigate = useNavigate();
    
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout();
        ToastAlerta('Sessão de usuário finalizada com sucesso!', 'info');
        navigate("/");
    }

    let component: ReactNode;

    if (usuario.token !== "") {

        component = (

            <div className="w-full flex justify-center py-4 bg-slate-900 font-bold text-white">
                <div className="container flex justify-between text-lg">
                    <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                        <Link to="/home" className="text-2xl font-bold flex items-center gap-2">
                            <img 
                                src="https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF" 
                                alt="Icone Home" 
                                className="w-5 h-5"
                            />
                            Página Inicial
                        </Link>
                    </div>
                    <div className="flex gap-8">
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to='/postagens' className='hover:underline flex  items-center gap-2'>
                            <img 
                                src="https://img.icons8.com/?size=100&id=93419&format=png&color=FFFFFF" 
                                alt="Icone Postagens" 
                                className="w-5 h-5"
                            />
                            Postagens
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to="/temas" className="hover:underline flex items-center gap-2">
                                <img 
                                    src="https://img.icons8.com/?size=100&id=38073&format=png&color=FFFFFF" 
                                    alt="Icone Temas" 
                                    className="w-5 h-5"
                                />
                                Temas
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to="/cadastrartema" className="hover:underline flex items-center gap-2">
                                <img
                                    src="https://img.icons8.com/?size=100&id=123831&format=png&color=FFFFFF"
                                    alt="Ícone Novo Tema"
                                    className="w-5 h-5"
                                />
                                Novo tema
                            </Link>
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2">
                            <Link to='/perfil' className='hover:underline flex items-center gap-2'>
                                <img 
                                    src="https://img.icons8.com/?size=100&id=7847&format=png&color=FFFFFF" 
                                    alt="Icone Perfil" 
                                    className="w-5 h-5"
                                 />
                                Perfil
                            </Link>
                        </div>
                            <Link
                                to=""
                                onClick={logout}
                                className="hover:underline transition-all duration-300 hover:scale-110 hover:text-violet-500 flex items-center gap-2"
                            >   
                                <img 
                                    src="https://img.icons8.com/?size=100&id=BvRKVanAagI0&format=png&color=FFFFFF" 
                                    alt="Icone Logout" 
                                    className="w-5 h-5"
                                />
                                Sair
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            { component }
        </>
    )
}

export default Navbar;
