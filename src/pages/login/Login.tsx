import './Login.css';

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-slate-800">
                <form className="flex justify-center items-center flex-col w-2/3 gap-6">
                    <h2 className="text-white text-5xl">Entrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-white">Usuário*</label>
                        <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Usuário"
                                className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-white">Senha*</label>
                        <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-indigo-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-slate-700 w-full" />

                    <p className="text-white">
                        Ainda não tem uma conta?{' '}
                        <span className="text-indigo-400 hover:text-indigo-500 cursor-pointer">
                            Cadastre-se
                        </span>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;
