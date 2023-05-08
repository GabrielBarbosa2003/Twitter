import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../componentes/Header"
import { Separador } from "../componentes/Separador"
import { Tweet } from "../componentes/Tweet"



import './Status.css'

/**
 * 
 *  Fluxo de renderizaçao
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado
 * 2. Toda vez que o seu componente PAI renderizar
 * 3. Toda vez que alguma das sua propriedades mudarem
 */

/**
 *  Algoritimo de reconciliaçao
 * 
 * 1. Criar em memória a nova versao do HTML do componente
 * 2. Compara essa nova versao com a versao anterior do HTML (diff)
 * 3. Aplicar as operaçoes JavaScript para alterar somente o necessário do HTML
 */
interface ITweet{
  nome?:string;
  mensagem?:string;
  arroba?:string;
  image?:string
}


export function Status(){

    const [novaResposta, setNovaResposta] = useState<ITweet>({});
    const [Resposta, setResposta] = useState<ITweet[]>([
      {
        nome: 'Roy',
        mensagem: 'Fala tu meu mano',
        arroba: '@roy',
        image:'https://i.pinimg.com/originals/cc/9c/23/cc9c23c0069b2d2d2da87c8bc7b629a3.jpg'
      },
      {
        nome: 'Pato Donald',
        mensagem: 'HEHEHEHE',
        arroba: '@Donald',
        image:'https://th.bing.com/th/id/OIP.N7amz4glATaMm7cpq5Ct0wHaHa?pid=ImgDet&rs=1'
      },
      {
        nome: 'Alice',
        mensagem: 'Fala ai maninho',
        arroba: '@Alice',
        image:'https://th.bing.com/th/id/OIP.g5ZXpilBHIhfU91fjkYfEAHaHa?pid=ImgDet&w=720&h=720&rs=1'
      },
    ])

      function criaNovaReposta(event: FormEvent){ 
        event.preventDefault();
        setResposta([...Resposta, novaResposta]) 
        setNovaResposta({})
      }
      console.log('resposta',Resposta);
      console.log('novaResposta',novaResposta)
      // function submitbyHotKey(event:KeyboardEvent){ // funçao para enviar o tweet com o ctrl + Enter
      //   if(event.key == 'Enter' && (event.ctrlKey || event.metaKey)){
      //       //submit
      //       setResposta([novaResposta, ...Resposta]) 
      //       setNovaResposta('')

      //   }
      // }

    return(
        <main className='status'>
        <Header title='tweet' />
        <Separador />
        <form onSubmit={criaNovaReposta} className='formulario-resposta'>
            <label htmlFor='tweet'>
                <img src='https://th.bing.com/th/id/OIP.4rTMKAxg04zQ6-C_iKlEVgHaJ4?pid=ImgDet&rs=1' alt='Mickey' />
                <textarea 
                    id='tweet' 
                    placeholder='Tweet your answer' 
                    value={novaResposta?.mensagem || ''}
                    //onKeyDown={submitbyHotKey}
                    onChange={(event) => {
                        setNovaResposta({ ...novaResposta, mensagem: event.target.value, nome:'Mickey', arroba:"@Mickey", image:"https://th.bing.com/th/id/OIP.4rTMKAxg04zQ6-C_iKlEVgHaJ4?pid=ImgDet&rs=1" })
                    }}
                />
            </label>
            <button type='submit'>
                <PaperPlaneRight/>
                <span>answer</span>
            </button>
        </form>

        {Resposta.map(resp => {
            return <Tweet key={resp.nome} conteudo={resp.mensagem} userName={resp.nome} arroba={resp.arroba} image={resp.image}/>
        })}

    </main>
    )
}