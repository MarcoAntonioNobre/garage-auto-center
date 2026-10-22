# Garage Auto Center

Site institucional da **Garage Auto Center**, oficina automotiva localizada em Governador Valadares, MG. A página apresenta os serviços, a estrutura da oficina, diferenciais, avaliações e um formulário que prepara uma mensagem para contato pelo WhatsApp.

**Site publicado:** https://garage-auto-center.vercel.app/

## Funcionalidades

- Página inicial com apresentação da oficina.
- Seção de serviços: alinhamento, balanceamento, pneus e rodas e manutenção.
- Apresentação da estrutura e da localização.
- Seção sobre os diferenciais da Garage.
- Área de avaliações.
- Links para contato pelo WhatsApp e para consultar a localização no Google Maps.
- Formulário de orçamento com nome, modelo do veículo, ano e descrição do problema. Ao enviar, os dados são organizados em uma mensagem e abertos no WhatsApp.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- Git e GitHub
- Vercel para hospedagem

## Requisitos

- Node.js
- npm

## Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/MarcoAntonioNobre/garage-auto-center.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd garage-auto-center
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O terminal mostrará o endereço local para abrir no navegador.

## Comandos úteis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run preview
```

Executa uma prévia local da versão compilada, se esse script estiver configurado no `package.json`.

## Imagens

As imagens utilizadas no site ficam em `public/images/` e são referenciadas a partir da raiz do site:

```text
public/
└── images/
    ├── gac-bmw-audi.jpg
    ├── gac-corolla.jpg
    ├── gac-fachada.jpg
    └── garage-auto-center-logo.png
```

Exemplo de referência no código:

```tsx
<img
  src="/images/gac-fachada.jpg"
  alt="Fachada da Garage Auto Center"
/>
```

**Importante:** os caminhos são sensíveis a maiúsculas e minúsculas no ambiente de hospedagem. Ao adicionar imagens, confira o nome do arquivo e mantenha os caminhos consistentes.

## Publicação

O projeto está hospedado na Vercel. Com o repositório conectado à Vercel, novos commits enviados para a branch configurada podem iniciar um novo deploy automaticamente.

Para enviar alterações ao GitHub:

```bash
git add .
git commit -m "Descreve as alterações"
git push origin main
```

Depois, confira o resultado do deploy no painel da Vercel.

## Contato

- **Empresa:** Garage Auto Center
- **Localização:** Rua José Carlos Pereira, 341 — Vila Bretas, Governador Valadares, MG
- **Telefone:** (33) 3014-3580
- **WhatsApp:** [Iniciar conversa](https://wa.me/553330143580)

---

Projeto de site institucional da Garage Auto Center.
