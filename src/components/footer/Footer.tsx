import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

                <div className="flex justify-center bg-slate-900 text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold'>
                            Blog Pessoal | Vinicius | Copyright: &copy; {new Date().getFullYear()}
                        </p>
                        <div className='flex gap-6 mt-5'>
                            <a href="https://www.linkedin.com/in/vini-aquino/" target="_blank">
                                <LinkedinLogo 
                                    size={48} 
                                    weight='bold' 
                                    className="transition-all duration-300 transform hover:scale-110 hover:text-blue-500" 
                                />
                            </a>
                            <a href="https://www.instagram.com/quinofrombrazil/" target="_blank">
                                <InstagramLogo 
                                    size={48} 
                                    weight='bold' 
                                    className="transition-all duration-300 transform hover:scale-110 hover:text-pink-500" 
                                />
                            </a>
                            <a href="https://github.com/viniaquino" target="_blank">
                                <GithubLogo 
                                    size={48} 
                                    weight='bold' 
                                    className="transition-all duration-300 transform hover:scale-110 hover:text-yellow-700" 
                                />
                            </a>
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <>
            { component }
        </>
    )
}

export default Footer
