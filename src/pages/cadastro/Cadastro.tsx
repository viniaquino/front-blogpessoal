import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'

function Cadastro() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const[confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold bg-slate-800">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-6" onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-white text-5xl">Cadastrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-white">Nome*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="w-full bg-white dark:bg-zinc-900 text-white  border-none rounded p-2 focus:outline-none"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-white">Usuario*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="w-full bg-white dark:bg-zinc-900 text-white border-none rounded p-2 focus:outline-none"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-white">Foto</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="w-full bg-white dark:bg-zinc-900 text-white border-none rounded p-2 focus:outline-none"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
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
                className="w-full bg-white dark:bg-zinc-900 text-white border-none rounded p-2 focus:outline-none"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-white">Confirmar Senha*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="w-full bg-white dark:bg-zinc-900 text-white border-none rounded p-2 focus:outline-none"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded text-white bg-red-400 
                  hover:bg-red-700 w-1/2 py-2">
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center">
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> : <span>Cadastrar</span>
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
