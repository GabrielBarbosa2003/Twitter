import { FormEvent, useState } from "react"
import { Header } from "../componentes/Header"
import { Separador } from "../componentes/Separador"
import { Tweet } from "../componentes/Tweet"

import './Timeline.css'


  //SPA - Evitar redirecionamentos
  // Sempre que passamos variaveis js para react, sempre usar chaves {};

  interface ITweet{
    nome?:string;
    mensagem?:string;
    arroba?:string;
    image?:string;
  }


export function Timeline() {
    const [novoTweet, setNovoTweet]  = useState<ITweet>({});
    const [tweetsNames, setTweetsNames] = useState<ITweet[]>([
      {
        nome: 'Roy',
        mensagem: 'Fala ai galerinhaaa 😎',
        arroba: '@Roy',
        image:'https://i.pinimg.com/originals/cc/9c/23/cc9c23c0069b2d2d2da87c8bc7b629a3.jpg'
      },
      {
        nome: 'Pato Donald',
        mensagem: 'eitaaaa, estou aprendendo mexer nesse celular ainda viu 😁👍😜',
        arroba: '@Donald',
        image:'https://th.bing.com/th/id/OIP.N7amz4glATaMm7cpq5Ct0wHaHa?pid=ImgDet&rs=1'
      },
      {
        nome: 'Alice',
        mensagem: 'Que dia lido e maravilhoso!!!! 🏖🌞',
        arroba: '@Alice',
        image:'https://th.bing.com/th/id/OIP.g5ZXpilBHIhfU91fjkYfEAHaHa?pid=ImgDet&w=720&h=720&rs=1'
      },
      ])
      

      function criaNovoTweet(event: FormEvent){ // formEvent é do react, para entender o event

        event.preventDefault() //previne um evento padrao dentro do js, nesse caso redirecionar o user pra outra tela por conta do <form>ou atualizar a tela;
        setTweetsNames([...tweetsNames, novoTweet]) // ...tweets copia todos os dados do array // aqui pega os dados de tweets e coloca o novoTweet
        setNovoTweet({})
      }
      // function submitbyHotKey(event:KeyboardEvent){ // funçao para enviar o tweet com o ctrl + Enter
      //   if(event.key == 'Enter' && (event.ctrlKey || event.metaKey)){
      //       //submit
      //       setTweetsNames([novoTweet, ...tweetsNames]) 
      //       setNovoTweet('')
      //   }
      // }
      
      
    return (
        <main className='timeline'>
            <Header title='Home' />

            <form onSubmit={criaNovoTweet} className='formulario'>
                <label htmlFor='tweet'>
                  <img src='https://th.bing.com/th/id/OIP.4rTMKAxg04zQ6-C_iKlEVgHaJ4?pid=ImgDet&rs=1' alt='Mickey' />
                    <textarea 
                        id='tweet' 
                        placeholder='What are you thinking?' 
                        value={novoTweet?.mensagem || ''}
                        //onKeyDown={submitbyHotKey}
                        onChange={(event) => {
                          setNovoTweet({ ...novoTweet, mensagem: event.target.value, nome:'Gabriel', arroba:"@gabriel", image:"https://th.bing.com/th/id/OIP.4rTMKAxg04zQ6-C_iKlEVgHaJ4?pid=ImgDet&rs=1"})  // Pega o valor que está sendo escrito dentro da area de texto, e após enviar o formuláio, ele apaga a textarea
                        }}
                    />
                </label>
                <button type='submit'>Tweet</button>
            </form>
            <Separador />

            {tweetsNames.map(tweet => {
                return <Tweet key={tweet.nome} conteudo={tweet.mensagem} userName={tweet.nome} arroba={tweet.arroba} image={tweet.image}/>
            })}

        </main>
    )
}