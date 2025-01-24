import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Postagem atualizada com sucesso','info')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar a Postagem', 'info')
                }
            }

        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Postagem cadastrada com sucesso', 'info');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar a Postagem', 'info');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center bg-slate-700">
    <h1 className="text-4xl text-center my-8 text-white">
        {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
    </h1>

    <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
        <div className="flex flex-col w-full">
            <label htmlFor="titulo" className="text-white">Título da Postagem*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Título"
                    className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
        </div>

        <div className="flex flex-col w-full">
            <label htmlFor="texto" className="text-white">Texto da Postagem*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
                <input
                    type="text"
                    id="texto"
                    name="texto"
                    placeholder="Texto"
                    className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
        </div>

        <div className="flex flex-col w-full">
            <label htmlFor="tema" className="text-white">Tema da Postagem*</label>
            <div className="p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
                <select
                    name="tema"
                    id="tema"
                    className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
                    onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                >
                    <option value="" selected disabled>Selecione um Tema</option>
                    {temas.map((tema) => (
                        <option value={tema.id}>{tema.descricao}</option>
                    ))}
                </select>
            </div>
        </div>

        <button
            type="submit"
            className="rounded disabled:bg-slate-400 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
            disabled={carregandoTema}
        >
            {isLoading ? (
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                />
            ) : (
                <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
            )}
        </button>
    </form>
</div>

    );
}

export default FormPostagem;