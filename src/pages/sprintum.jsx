import Head from "next/head"
import Image from "next/image"

import SlideBar from "@/components/slidebar"

export default function sprintUm() {
    return(
        <>
            <Head>
                <title>1º Sprint</title>
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <main>
                <div className="w-full h-2">
                <Image
                    width={100}
                    height={100}
                    alt="faixa Bosch"
                    className="h-full w-full object-cover"
                    src="/image/bosch_faixa.svg"
                />
                </div>
                <div className='flex'>
                <SlideBar/>
                    <div className='pt-12 pl-10 w-[90%]'>
                        <h1 className='text-5xl mb-8'>
                            1º Sprint
                        </h1>
                        <h2 className="text-3xl mb-3">
                            🏆 Metas Definidas:
                        </h2>
                        <ul className="list-disc pl-8 text-gray-500 mb-8">
                            <li>Estudo de Ferramentas;</li>
                            <li>Resposta para perguntas frequentes da Bosch/ETS;</li>
                            <li>Grade de cursos;</li>
                            <li>Agenda da semana;</li>
                            <li>Interatividade por voz;</li>
                            <li>Interface.</li>
                        </ul>
                        <h2 className="text-3xl mb-3">
                            🎯 Divisão de Tarefas:
                        </h2>
                        <ul className="list-disc pl-8 text-gray-500 mb-20">
                            <li>
                                <strong>Daniel Dante: </strong>
                                Projetos da ETS e Grade dos Cursos;
                            </li>
                            <li>
                                <strong>Giovanna Freitas: </strong>
                                Interface e Grade de Cursos;
                            </li>
                            <li>
                                <strong>João Montanari: </strong>
                                Agenda da semana e interatividade por voz;
                            </li>
                            <li>
                                <strong>Maitê Favaro: </strong>
                                Resposta para perguntas frequentes da Bosch/ETS;
                            </li>
                            <li>
                                <strong>Naiury Chaves: </strong>
                                Resposta para perguntas frequentes da Bosch/ETS;
                            </li>
                        </ul>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                💡 Resposta para perguntas frequentes:
                            </h2>
                            <strong>Descrição: </strong>
                                É imprescindível que o usuário possa sanar as suas principais dúvidas acerca da empresa Bosch e sua planta. Ademais ele deve apresentar respostas precisas com relação a ETS (Escola técnica de engenharia), setor da Bosch responsável pelos aprendizes. Inclusive, o projeto não deve apenas se limitar a perguntas relacionadas ao universo Bosch, mas como também deve apresentar respostas que envolvem temas didáticos e técnicos tais como eletroeletrônica, mecânica, programação, administração, economia e metodologias de trabalho.
                            <p className="font-bold mt-3">
                                Modo de funcionamento:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">Para que o sistema responda as perguntas, primeiro ele deverá recebê-las por meio de áudio ou texto, o sistema deve procurar a reposta para a mesma e reproduzi-la em áudio e texto;</li>
                                <li className="mt-1">O sistema deve conter um botão com imagem de microfone para que o usuário clique antes de falar a pergunta, ao clicar o usuário já pode falar;</li>
                                <li className="mt-1">Pode ser que o usuário prefira digitar, por isso o sistema deve conter um botão com imagem de teclado ao lado do botão de microfone, para que quando for clicado apareça a caixa de texto onde o usuário poderá digitar com um “escreva aqui sua pergunta” de tom claro escrito na caixa de texto;</li>
                                <li className="mt-1">Assim que o usuário informar a sua pergunta, o sistema deve informar no centro da tela em formato de texto qual a resposta da pergunta, assim como deverá reproduzi-la por meio de áudio. A pergunta permanecerá na tela, só que agora na parte de cima;</li>
                                <li className="mt-1">Caso a pergunta não tenha sido encontrada no banco de perguntas e respostas, o sistema deve retornar “Desculpe, ainda não temos resposta para a sua pergunta! Mas já a enviamos para nosso sistema e estaremos trabalhando em respostas para a mesma”. E cadastrar a pergunta no banco de perguntas para que posteriormente seja analisada pelos manutentores.</li>
                            </ul>
                        </div>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                🎙️ Interatividade por voz:
                            </h2>
                            <strong>Descrição: </strong>
                                Para que a interatividade ocorra com o usuário é preciso realizar questionamentos e perguntas por voz para o totem, de forma que o microfone dele possa captá-la. Para que o sistema entenda que está havendo uma conversação com ele é preciso falar o comando "Avila" com a pergunta logo em seguida. Exemplo: "Avila, que dia é hoje?" ou "Avila, que horas são?".
                                O retorno da resposta do assistente virtual deve ser realizado por meio de um alto-falante instalado no totem, assim dando a resposta da pergunta de forma falada ao usuário, ademais por meio da tela instalada no totem o sistema deve apresentar a resposta de forma escrita assim criando um ambiente de mais inclusão no projeto.
                            <p className="font-bold mt-3">
                                Modo de funcionamento:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">O sistema deve diferenciar a fala do usuário de ruídos externos;</li>
                                <li className="mt-1">O sistema deve conter um botão com imagem de microfone para que o usuário clique antes de falar a pergunta, ao clicar o usuário já pode falar;</li>
                                <li className="mt-1">Quando o botão for clicado o sistema deve exibir “aguarde” escrito na parte central superior da tela e uma imagem de ondas sonoras para que o usuário saiba que já pode falar;</li>
                                <li className="mt-1">Quando for reproduzir a resposta, o sistema deve reproduzi-la em forma de áudio;</li>
                                <li className="mt-1">O sistema deve ter um microfone acoplado para que consiga captar o áudio;</li>
                                <li className="mt-1">O sistema deve ter um fone caso o usuário prefira escutar a resposta no fone;</li>
                                <li className="mt-1">O sistema deve ter auto falantes como padrão de saída de áudio.</li>
                            </ul>
                        </div>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                🎒 Agendamento de aulas:
                            </h2>
                            <strong>Descrição: </strong>
                                Para que a agenda esteja sempre atualizada é preciso que os instrutores da ETS (Escola técnica de engenharia) agendem as suas aulas através de um UserForm (Interface gráfica do Excel) em Excel que vai estar disposto em suas máquinas de trabalho cotidianas, para o agendamento vai ser necessário informar a data da aula, o horário, o instrutor responsável, a sala que vai ser utilizada, o curso e a turma. Assim, com o registro da aula armazenado na planilha o sistema vai tratar esses dados e passar os mesmos para a interface do Assistente Virtual. O sistema deve ser capaz de informar a agenda da semana de forma clara e coesa em sua interface, de maneira que os aprendizes consigam localizar a sua aula rapidamente. Desta forma as aulas devem estar dispostas em uma grade horária que ocupe todo o período de trabalho das 07:30 até as 17:00 com pausa para o almoço das 11:30 até as 13:00. A grade deve estar disposta de forma a demonstrar a turma e o horário da aula de maneira a coincidirem na agenda, e nesta coincidência deve haver um card (elemento gráfico que representa um pedaço de informação ou conteúdo) que informe o instrutor responsável pela aula, a sala reservada, e o horário e dia, sendo que essas duas últimas informações já vão estar dispostas na interface de forma a ajudar o usuário a se localizar.
                            <p className="font-bold mt-3">
                                Modo de funcionamento:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">O sistema deve informar as aulas da semana decorrente em que está sendo acessado a agenda se orientando por turma e horário de aula;</li>
                                <li className="mt-1">O sistema deve separar as informações em 5 tabelas que vão de segunda a sexta;</li>
                                <li className="mt-1">O sistema deve ter um card que se encontre localizado entre o horário e a turma que ao ser clicado vai demonstrar detalhes do agendamento da aula;</li>
                                <li className="mt-1">Quando o card for acessado ele deve informar o instrutor responsável pela aula, o horário, o dia e a sala reservada para a aula.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}