---
sidebar_label: Problemas na análise
sidebar_position: 3
---

# Problemas relacionados à análise das imagens

Aqui, encontrará uma lista de problemas relacionados à análise das imagens, contendo as etapas de baixar as imagens, marcar asteroides e relatório. Se você estiver enfrentando algum problema relacionado à análise das imagens, como dificuldades para identificar os asteroides, dúvidas sobre os critérios para marcar um objeto como asteroide ou qualquer outra questão relacionada à análise, confira as soluções abaixo.

## Ao clicar para marcar um asteroide, nada acontece

Assegure-se que o *Data reduction* foi realizado com sucesso na imagem. Se o *Data reduction* não for realizado, o software não conseguirá identificar os objetos nas imagens, o que pode impedir que você marque os asteroides. 

Para realizar o *Data reduction*, siga as orientações descritas na seção [Abrindo imagens](../../03-tutorial-pratico/abrir-imagens.md) do tutorial prático.

## Ao marcar um asteroide, a marcação não aparece na imagem

Assegure-se que a opção *Select markings* está configurada corretamente. Para isso, siga as orientações descritas na seção [Configurações iniciais](../../02-comecando/configuracoes.md).

## O pacote de imagens não tem nenhum asteroide

Se um pacote de imagens não tiver nenhum objeto que atenda aos critérios para ser considerado um asteroide, um relatório ainda deve ser submetido. Para isso, siga as orientações descritas na seção [Enviando relatório](../../03-tutorial-pratico/enviar-relatorio.md) do tutorial prático, onde há um passo a passo detalhado de como enviar um relatório mesmo quando não forem encontrados asteroides nas imagens.

## Fiz uma marcação errada

Se você marcou um objeto e depois verificou que clicou errado ou o objeto não atende aos critérios para ser considerado um asteroide, infelizmente não há como desfazer a marcação. O que você pode fazer, **se tiver certeza de qual marcação é errada** é excluir a linha errada do relatório antes de enviá-lo.

Entretanto, a opção mais segura é fechar as imagens, limpar o relatório e começar a análise do pacote de imagens novamente.

## Esqueci de marcar um asteroide

Se você esqueceu de marcar um asteroide e já enviou o relatório, infelizmente não há como corrigir o relatório enviado. O que você pode fazer é tentar conversar com a equipe de suporte para verificar se está sendo aceita uma correção do relatório, mas isso não é garantido.

Então, sempre analise com muita atenção as imagens para ter certeza que encontrou todos os asteroides presentes antes de enviar o relatório.

## Não há nenhum dado na tabela de objetos próximos (*Object Designation*)

Isso indica que provavelmente a base de dados MPCORB não foi baixada corretamente. Para resolver isso:

- Feche o *Astrometrica* e abra novamente. Verifique se na janela preta que abre apresenta alguma mensagem de erro relacionada ao download dos dados da MPCORB. Se houver algum erro, contate a equipe de suporte para obter assistência.

- Nas configurações do software, na aba **Internet**, clique em **Download MPCORB** para tentar baixar a base de dados novamente. Depois que finalizar, feche o software e abra novamente para verificar se o problema foi resolvido.

- É possível que o erro esteja relacionado à conexão com o servidor, portanto verifique sua conexão de internet e tente novamente. Também tente esperar um tempo e tentar novamente, pois pode ser um problema temporário com o servidor.

## Cliquei para marcar um asteroide e apareceu o erro *Floating point error*

É provável que tenha clicado em uma área acinzentada da imagem, ou seja, em uma área onde não há dados. Para evitar isso, certifique-se de clicar apenas em áreas onde há dados, ou seja, onde é possível ver objetos. **Nunca tente prever a posição de um objeto que você acredita que seja um asteroide, clicando em uma área onde não há dados.**

## Um objeto se movendo não aparece em todas as imagens

O mínimo de aparições necessárias para catalogar um objeto como asteroide é que ele apareça em pelo menos 3 das 4 imagens. Se um objeto se move, mas não aparece em pelo menos 3 imagens, isso pode indicar que o objeto não é um asteroide ou que há algum problema com as imagens, não tente reportar esse objeto. **Nunca tente prever a posição de um objeto que você acredita que seja um asteroide, clicando em uma área onde não há dados.**