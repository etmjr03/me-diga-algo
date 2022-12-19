import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { useContext } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useContext(AuthContext)

    async function handleCreateRoom() {
        if(!user) {
          await signInWithGoogle()
        }
        navigate("/rooms/new")
    }
        
    return(
        <div id="page-auth">
            <aside>
               <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
               <strong>Crie salas de Q&amp;A ao vivo!</strong>
               <p>
                Crie tópicos para compartilhar seus conhecimentos,
                dúvidas e opiniões.
               </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="me diga algo" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}