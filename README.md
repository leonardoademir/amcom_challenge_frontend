# amcom_challenge_frontend

### :memo: Sobre a aplicação

Esta é uma aplicação FullStack para um desafio de admissão de vaga. Consiste num sistema de papelaria com cálculo de comissões e vendas, segue abaixo os critérios:</br>
O nosso cliente é uma papelaria hipotética que gostaria de registrar suas vendas e calcular a comissão de seus vendedores com base nas vendas feitas em dado período e nos percentuais de comissão cadastrados nos produtos vendidos.</br>
Um produto deve ter as seguintes informações: código, descrição, valor unitário e percentual de comissão, que pode variar entre 0 e 10%.</br>
Uma venda tem número da nota fiscal, data/hora, cliente, vendedor e uma lista de um ou mais produtos e suas quantidades vendidas.</br>
Clientes e vendedores têm nome, e-mail e telefone.</br>
O cálculo da comissão é feito aplicando-se o percentual cadastrado no produto ao valor total da venda do produto (qtd * valor unitário).</br>
Em alguns dias da semana, o percentual de comissão tem limites mínimos e máximos. Isso pode mudar com alguma frequência, por isso esses parâmetros devem ser configuráveis.</br>
Exemplo: Segundas-Feiras Min: 3% Max: 5%. Nesse caso uma venda nesse dia, de um produto de comissão 10% pagaria uma comissão de 5%. Já a venda de um produto de comissão 2% pagaria 3%.</br>
O total de comissão da venda é o total das somas das comissões dos itens da venda.</br>

### :hammer: **Configurando o Projeto**

Clone o projeto</br>
Com o projeto aberto, vamos executar os seguintes comandos de configuração</br>

### :computer: FRONTEND</br>
na raiz do projeto vá para /frontend</br>
*cd frontend</br>
npm i</br>
npm run dev</br>*

### 👨‍💻 Tecnologias Utilizadas</br>
- React-Router-Dom
- Vite
- Material UI
- Axios
- ESLint
- Prettier
- TypeScript
- ReactJS
- TailwindCSS
