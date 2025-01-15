function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-slate-900 font-bold text-white'>
                <div className="container flex justify-between text-lg">
                    <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                        Blog Pessoal
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
                        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
                            Sair
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
