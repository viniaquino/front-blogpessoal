import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

    const navigate = useNavigate;
    const{handleLogout} = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Sessão de usuário finalizada!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 bg-slate-900 font-bold text-white'>
                <div className="container flex justify-between text-lg">
                    <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                        <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                    </div>
                    <div className='flex gap-8'>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Postagens
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Temas
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Novo tema
                        </div>
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Perfil
                        </div>
                        <Link to='' onClick={logout} className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
