# Pendencias de implementacao - LP Menopausia Con Claridad

## Objetivo da proxima rodada

Reposicionar a LP para vender o produto como um webapp com criador de rotina personalizada para menopausia, com guia digital e materiais praticos como apoio. A pagina nao deve parecer uma venda de PDF/guia comum.

Prioridade: melhorar clareza da primeira dobra, acelerar o entendimento da oferta e antecipar CTA/preco/garantia antes da metade da pagina.

## Contexto de copy - Amanda

Analise de Amanda ja realizada nesta frente:

- O posicionamento atual baixa valor quando usa demais termos como "guia", "material", "leer" e "usar a tu ritmo".
- A promessa deve ser o resultado pratico: criar uma rotina diaria simples e personalizada.
- O mecanismo central precisa aparecer cedo: webapp + criador de rotina personalizada.
- Manter tom acolhedor, anti-pressao e anti-dietas extremas.
- Manter a ideia: "No estas fallando. Tu cuerpo esta cambiando."

Hero recomendado:

```text
Convierte la confusion de la menopausia en una rutina diaria simple
```

Subheadline recomendado:

```text
Menopausia Con Claridad es un webapp con creador de rutinas personalizado, guia digital y materiales practicos para ayudarte a organizar tus comidas, habitos y cuidados diarios sin presion ni reglas extremas.
```

CTA principal recomendado:

```text
Empezar mi rutina personalizada
```

## Contexto Clarity

Painel antigo do Microsoft Clarity analisado em 2026-08-24:

- 544 sessoes.
- 449 usuarios unicos.
- 85,29% usuarios novos: trafego frio/frio-morno.
- 1,15 paginas por sessao: quase ninguem navega alem da primeira pagina.
- Scroll medio 48,40%: a metade inferior da LP provavelmente nao esta sendo vista pela maioria.
- Tempo ativo medio 53s: decisao rapida, copy precisa ser direta.
- Cliques mortos 7,17%, 39 sessoes: ha elementos que parecem clicaveis e nao sao.
- Trafego majoritariamente mobile/social:
  - InstagramApp: 44,85%, 244 sessoes.
  - FacebookApp: 33,09%, 180 sessoes.
- Performance: 84/100.
- LCP: 2,7s, precisa melhorar.
- Erros JS: 4,23%, 23 erros.

Interpretacao operacional: primeira dobra e primeira metade da pagina precisam carregar a venda. O usuario chega por Instagram/Facebook, decide rapido e nao rola ate o fim com consistencia.

## Checklist priorizado

- [ ] Reescrever hero para vender "webapp + rotina personalizada", nao "guia".
- [ ] Trocar CTA principal para "Empezar mi rutina personalizada" ou "Crear mi rutina personalizada".
- [ ] Inserir mockup/screenshot/visual do webapp ou do fluxo de rotina na primeira dobra.
- [ ] Criar secao "Como funciona" logo apos o hero, em 3 passos:
  - Responde um cuestionario rapido.
  - Recebe uma rotina diaria personalizada.
  - Usa guia e materiais praticos como apoio.
- [ ] Antecipar oferta/preco/garantia para antes de 48% de scroll.
- [ ] Reorganizar blocos longos para mobile social: frases curtas, hierarquia clara, menos texto corrido.
- [ ] Revisar elementos com aparencia de clique: transformar em CTA real ou remover comportamento visual de botao/card clicavel.
- [ ] Padronizar CTAs ao longo da pagina com a mesma promessa.
- [ ] Adicionar exemplo concreto de rotina gerada para aumentar tangibilidade.
- [ ] Revisar FAQ para reduzir objecoes:
  - "Esto es una dieta?"
  - "Necesito experiencia con apps?"
  - "Sirve para premenopausia?"
  - "Es contenido medico?"
  - "Que recibo despues de comprar?"
- [ ] Melhorar LCP: reduzir peso/imagens acima da dobra e revisar assets externos.
- [ ] Conferir erros JS em browsers in-app de Instagram/Facebook.

## Ordem recomendada da LP

1. Hero: promessa pratica + webapp + rotina personalizada + CTA.
2. Prova visual curta: mockup/screenshot do criador de rotina ou exemplo de plano diario.
3. Como funciona: 3 passos simples.
4. Oferta compacta: o que recebe, preco, garantia, CTA.
5. Problema: confusao, conselhos soltos, corpo mudando.
6. Ponte: de conselhos soltos para uma rotina clara.
7. O que vem dentro: webapp primeiro, guia/material depois.
8. Para quem e / para quem nao e.
9. Beneficios praticos.
10. FAQ.
11. Disclaimer medico.
12. CTA final.

## Arquivos provaveis a editar neste repo

- `App.tsx`: conteudo principal da LP, ordem das secoes e CTAs.
- `components/`: revisar componentes de cards/secoes se a LP usa componentes compartilhados.
- `index.css`: ajustes leves de responsividade, espaçamento e performance visual.
- `public/`: adicionar mockups/imagens otimizadas se necessario.
- `vercel.json`: manter headers ja aplicados; nao alterar sem necessidade.

## Eventos Clarity/analytics a adicionar

Adicionar eventos para descobrir onde a venda quebra:

- `view_hero`
- `click_hero_cta`
- `view_how_it_works`
- `click_routine_example`
- `view_offer`
- `click_offer_cta`
- `click_checkout`
- `view_faq`
- `click_faq_item`

Eventos conectados ao app/gerador, quando aplicavel:

- `click_start_routine`
- `start_quiz`
- `finish_quiz`
- `routine_generated`
- `routine_generation_fallback`
- `routine_generation_error`

## Criterios de aceite

- Primeira dobra deixa claro em ate 5 segundos que o produto e um webapp com criador de rotina personalizada.
- O CTA principal aparece acima da dobra e usa linguagem consistente.
- Preco/garantia/oferta aparecem antes da metade da pagina.
- Em mobile, nenhuma secao essencial depende de scroll longo para ser entendida.
- Elementos visuais clicaveis executam acao real ou deixam de parecer botao.
- Build local passa com `npm run build`.
- A pagina continua com headers de seguranca no deploy.
- Nenhum segredo/env local e adicionado ao repo.

## Pendencia POS-LP - app e gerador de rotina

Depois da rodada da LP, revisar o app `App-Menopausia-Con-Claridad`.

Contexto atual:

- Oseias notou que o gerador de rotinas nao estava aparecendo dentro do webapp.
- Foi feita correcao local no repo `repos/App-Menopausia-Con-Claridad`.
- Correcao local adicionou card `Mi Rutina con IA` na home do app.
- O card abre o `RoutineModal` ja existente.
- O fluxo usa `/api/generate-routine` e nao volta a chamar Gemini diretamente no frontend.
- `npm run build` passou localmente.
- Ainda falta revisao final, commit/push e deploy production, se Oseias aprovar.

Checklist POS-LP:

- [ ] Revisar visual do card `Mi Rutina con IA` no app.
- [ ] Confirmar fluxo completo: card -> RoutineModal -> QuizModal -> `/api/generate-routine` -> rotina salva/exibida.
- [ ] Testar fallback quando n8n falhar.
- [ ] Confirmar que Gemini nao e chamado no frontend nesse fluxo.
- [ ] Commitar/pushar a correcao do app, se aprovado.
- [ ] Publicar em production na Vercel, se aprovado.
- [ ] Validar headers e endpoint publico apos deploy.

## Nota para o proximo agente

Nao comece por refatoracao grande. A maior alavanca e reposicionamento e ordem da LP. Primeiro ajuste hero, CTA, mockup/rotina, "Como funciona" e oferta antecipada. So depois refinamentos de design, FAQ e instrumentacao.
