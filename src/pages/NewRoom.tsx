import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
import { useContext } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useContext(AuthContext)
    
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
                    <h2>{user?.name}</h2>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p className="text-p">
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}