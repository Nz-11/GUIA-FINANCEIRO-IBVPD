// Conteúdo extraído de "Um_Novo_Comeco_guia_revisado.pdf".
// Os textos e referências bíblicas foram preservados do documento original.

export const hero = {
  title: 'Um Novo Começo',
  subtitle: 'Guia cristão e prático para organizar as finanças e sair das dívidas',
  lead: 'Você não precisa resolver tudo hoje. Você só precisa começar com verdade, sabedoria e um passo de cada vez.',
  verse: { text: 'Os planos do diligente tendem à abundância.', ref: 'Provérbios 21:5 — trecho' },
};

export const intro = {
  title: 'Uma palavra antes de começar',
  paragraphs: [
    'Se você está endividado, talvez esteja sentindo medo, vergonha, cansaço ou até vontade de evitar olhar para as contas. Respire. Este guia não foi feito para julgar você. Foi feito para ajudar você a dar os primeiros passos com clareza.',
    'Ter dívidas não define seu valor, sua fé ou seu futuro. Muitas situações financeiras são agravadas por imprevistos, perda de renda, juros altos, problemas familiares ou falta de orientação. O importante agora é olhar para a realidade com honestidade e escolher um próximo passo possível.',
    'A fé pode trazer esperança e direção, e a organização ajuda a transformar essa esperança em atitudes concretas. Ore, peça sabedoria e registre os números na planilha preparada para este processo.',
  ],
  howTo:
    'Leia sem pressa, acompanhe as atividades e, se puder, reserve de 20 a 30 minutos para conversar com alguém confiável. Você não precisa compartilhar detalhes íntimos com todo mundo. Escolha uma pessoa madura, discreta e respeitosa.',
  helper:
    'Escute sem julgar, preserve a privacidade da pessoa e evite prometer resultados garantidos. Se a situação envolver sofrimento intenso, violência financeira, risco de perder moradia ou questões legais, ajude-a a procurar apoio especializado e serviços confiáveis.',
  truth: {
    title: 'Comece pela verdade, não pela culpa',
    text: 'O primeiro passo é parar de fugir dos números. Não é necessário resolver tudo hoje, mas é importante descobrir o que está acontecendo. A clareza pode assustar no início, porém ela permite tomar decisões melhores.',
    verse: { text: 'Conhece bem o estado das tuas ovelhas...', ref: 'Provérbios 27:23 (trecho)' },
    prayer:
      'Senhor, dá-me coragem para enxergar minha realidade sem desespero, humildade para aprender e sabedoria para agir. Ajuda-me a dar o próximo passo com responsabilidade. Amém.',
  },
};

export type Week = {
  id: string;
  number: number;
  name: string;
  summary: string;
  tasks: { id: string; label: string }[];
};

export const plan = {
  title: 'Plano de 30 dias: um passo por semana',
  lead: 'Você não precisa resolver todas as dívidas em 30 dias. A meta é sair da confusão e começar a agir com um plano.',
  weeks: [
    {
      id: 'enxergar',
      number: 1,
      name: 'Enxergar',
      summary: 'Reúna e registre as informações de renda, despesas e dívidas. Não esconda números de si mesmo.',
      tasks: [
        { id: 'w1-renda', label: 'Reunir e registrar as informações de renda' },
        { id: 'w1-despesas', label: 'Reunir e registrar as despesas' },
        { id: 'w1-dividas', label: 'Reunir e registrar as dívidas' },
        { id: 'w1-verdade', label: 'Não esconder números de mim mesmo' },
      ],
    },
    {
      id: 'organizar',
      number: 2,
      name: 'Organizar',
      summary: 'Separe as necessidades essenciais, revise gastos possíveis de ajustar e escolha uma estratégia de pagamento.',
      tasks: [
        { id: 'w2-essenciais', label: 'Separar as necessidades essenciais' },
        { id: 'w2-ajustes', label: 'Revisar gastos possíveis de ajustar' },
        { id: 'w2-estrategia', label: 'Escolher uma estratégia de pagamento' },
      ],
    },
    {
      id: 'conversar',
      number: 3,
      name: 'Conversar',
      summary: 'Entre em contato com os credores por canais oficiais, compare propostas e peça tudo por escrito.',
      tasks: [
        { id: 'w3-contato', label: 'Entrar em contato com os credores por canais oficiais' },
        { id: 'w3-comparar', label: 'Comparar as propostas recebidas' },
        { id: 'w3-escrito', label: 'Pedir tudo por escrito' },
      ],
    },
    {
      id: 'continuar',
      number: 4,
      name: 'Continuar',
      summary: 'Acompanhe o orçamento, teste uma possibilidade realista de renda extra e marque uma data para revisar o plano.',
      tasks: [
        { id: 'w4-orcamento', label: 'Acompanhar o orçamento' },
        { id: 'w4-renda', label: 'Testar uma possibilidade realista de renda extra' },
        { id: 'w4-revisao', label: 'Marcar uma data para revisar o plano' },
      ],
    },
  ] satisfies Week[],
  commitment: [
    { id: 'oque', label: 'Uma coisa que vou fazer' },
    { id: 'quando', label: 'Quando vou fazer' },
    { id: 'como', label: 'Como vou saber que avancei' },
  ],
};

export const diagnosis = {
  title: 'Diagnóstico: entenda sua situação financeira',
  lead: 'Antes de escolher qual dívida pagar, registre todos os dados. O objetivo não é se condenar pelo passado; é saber de onde você está partindo.',
  incomeHints: [
    'Salário, aposentadoria, benefício ou renda de trabalho.',
    'Renda variável ou dinheiro extra que realmente costuma entrar.',
    'Se a renda muda de mês para mês, use uma estimativa conservadora.',
  ],
  essentialHints: [
    'Moradia, água, luz, alimentação e gás.',
    'Transporte para trabalhar, saúde e necessidades das crianças.',
    'Outras despesas indispensáveis da família.',
  ],
  debtHints: [
    'Nome do banco, loja ou credor.',
    'Valor aproximado devido e parcela atual.',
    'Taxa de juros, atraso e vencimento, se souber.',
    'Se existe cobrança, processo, garantia ou risco de perder um bem essencial.',
  ],
  warning:
    'Não contrate um novo empréstimo só porque a parcela parece menor. Compare o custo total, os juros, as tarifas e as condições. Proteja primeiro as necessidades básicas da família e procure orientação confiável se houver risco jurídico ou ameaça de perda de moradia ou bem essencial.',
};

export const strategy = {
  title: 'Estratégia: faça um plano que caiba na vida real',
  lead: 'Um plano bom não é aquele que parece perfeito; é aquele que você consegue cumprir sem deixar de comprar comida, pagar a moradia ou cuidar da saúde.',
  priorities: [
    'Garanta as necessidades essenciais da família.',
    'Entenda quais dívidas têm juros mais altos e quais podem trazer consequências urgentes.',
    'Entre em contato com os credores para conhecer opções realistas.',
    'Defina um valor mensal possível para pagamento, sem depender de dinheiro que talvez não entre.',
  ],
  methods: {
    snowball: {
      name: 'Método da bola de neve',
      text: 'Depois de manter os pagamentos acordados das demais dívidas, direcione o dinheiro extra à menor dívida. Quitá-la pode dar motivação para continuar.',
    },
    avalanche: {
      name: 'Método dos juros mais altos',
      text: 'Direcione o dinheiro extra à dívida com maior custo de juros, mantendo os demais compromissos conforme os acordos. Isso costuma reduzir o custo total, desde que você considere as consequências e as condições de cada dívida.',
    },
  },
  caution:
    'Escolha o método considerando sua situação. Se houver atraso em contas essenciais, risco de perder um bem ou cobrança judicial, procure orientação adequada antes de decidir.',
  firstStep: [
    { id: 'dia', label: 'Vou revisar meu orçamento no dia' },
    { id: 'credor', label: 'Vou entrar em contato com este credor' },
    { id: 'valor', label: 'O valor que consigo separar sem comprometer o essencial é' },
    { id: 'pessoa', label: 'A pessoa de confiança com quem posso conversar é' },
  ],
  remember:
    'Não é fracasso precisar ajustar o plano. Se sua renda diminuir ou surgir uma emergência, revise os valores e negocie antes de assumir compromissos impossíveis.',
};

export const negotiation = {
  title: 'Negociação: converse com o credor com calma',
  lead: 'Você pode pedir informações e avaliar propostas sem aceitar a primeira oferta. Procure os canais oficiais do banco ou da empresa e anote o protocolo do atendimento.',
  questions: [
    'Qual é o valor atualizado da dívida?',
    'Há desconto para pagamento à vista?',
    'Qual será o valor de cada parcela e o total pago ao final?',
    'Existem juros, tarifas ou outras condições?',
    'O acordo ficará registrado por escrito?',
    'O que acontece se eu atrasar uma parcela?',
  ],
  script:
    'Olá. Quero entender as opções para regularizar minha dívida. Estou reorganizando meu orçamento e preciso de uma proposta que eu consiga cumprir. Por favor, informe o saldo atualizado, as opções de desconto ou parcelamento, os juros e o valor total que pagarei. Gostaria de receber as condições por escrito para avaliar antes de decidir.',
  cautions: [
    'Não prometa um pagamento que você já sabe que não poderá fazer. Uma parcela baixa pode esconder um prazo longo ou um custo total elevado. Leia tudo com atenção e guarde os comprovantes.',
    'No Brasil, você também pode consultar canais oficiais de defesa do consumidor, como o Procon da sua região, e verificar os serviços oficiais de negociação disponíveis.',
    'Tenha cuidado com links recebidos de desconhecidos e nunca compartilhe senhas ou códigos de segurança.',
  ],
};

export type IdeaIcon =
  | 'food' | 'sewing' | 'iron' | 'pet' | 'tools' | 'class' | 'organize' | 'beauty' | 'digital';

export const extraIncome = {
  title: 'Renda extra: descubra o que já está ao seu alcance',
  lead: 'Quando a renda não cobre nem as necessidades básicas, cortar pequenos gastos pode não ser suficiente. Buscar renda adicional pode ajudar, mas é importante começar com cuidado e evitar investir dinheiro que você não tem.',
  questions: [
    'O que sei fazer bem e outras pessoas precisam?',
    'Que serviço posso oferecer com pouco ou nenhum investimento?',
    'Tenho tempo, transporte e ferramentas para fazer isso com segurança?',
    'Quanto gastarei para produzir ou prestar o serviço?',
    'Quanto sobra de lucro depois dos custos?',
  ],
  ideas: [
    { icon: 'food', title: 'Alimentos por encomenda', text: 'Preparar alimentos sob pedido, começando por quem já conhece seu trabalho.' },
    { icon: 'sewing', title: 'Costura', text: 'Ajustes, consertos e pequenas confecções.' },
    { icon: 'iron', title: 'Passar roupas', text: 'Um serviço simples, com pouco ou nenhum investimento.' },
    { icon: 'pet', title: 'Cuidar de animais', text: 'Passeios e cuidados para vizinhos e conhecidos.' },
    { icon: 'tools', title: 'Pequenos reparos', text: 'Manutenções domésticas com as ferramentas que você já tem.' },
    { icon: 'class', title: 'Aulas e reforço escolar', text: 'Ensinar o que você domina bem.' },
    { icon: 'organize', title: 'Organizar ambientes', text: 'Ajudar famílias a organizar casas e espaços.' },
    { icon: 'beauty', title: 'Serviços de beleza', text: 'Atendimentos compatíveis com sua experiência.' },
    { icon: 'digital', title: 'Trabalhos digitais', text: 'Tarefas on-line compatíveis com suas habilidades.' },
  ] satisfies { icon: IdeaIcon; title: string; text: string }[],
  tip: 'Escolha algo adequado à sua realidade e teste se há clientes antes de gastar.',
  warning:
    'Cuidado com promessas de dinheiro fácil, oportunidades que exigem pagamento antecipado para liberar ganhos ou propostas que pedem seus dados bancários. Não assuma empréstimos para começar uma atividade sem entender os riscos.',
  record: [
    { id: 'habilidade', label: 'Habilidade ou serviço que pretende testar' },
    { id: 'quem', label: 'Quem poderia precisar disso' },
    { id: 'custo', label: 'Custo inicial estimado' },
    { id: 'acao', label: 'Primeira ação que fará esta semana' },
  ],
};

export const principles = {
  title: 'Fé e vida financeira: princípios para caminhar',
  lead: 'A Bíblia não promete que toda dificuldade financeira desaparecerá de um dia para o outro. Ela oferece princípios de sabedoria, trabalho, prudência, contentamento e cuidado com o próximo que podem orientar nossas escolhas.',
  items: [
    {
      title: 'Planejamento e prudência',
      ref: 'Lucas 14:28',
      text: 'Fala sobre calcular o custo antes de construir.',
      practice: 'Antes de assumir uma parcela, veja se ela cabe no orçamento completo, não apenas no mês atual.',
    },
    {
      title: 'Diligência e constância',
      ref: 'Provérbios 21:5',
      text: 'Valoriza os planos bem elaborados e a diligência.',
      practice: 'Faça um plano simples, acompanhe-o toda semana e ajuste o que não estiver funcionando.',
    },
    {
      title: 'Contentamento e domínio próprio',
      ref: 'Filipenses 4:11-13',
      text: 'Fala sobre aprender a viver em diferentes circunstâncias.',
      practice: 'Seu valor não depende do que você compra ou possui. Aprender a esperar e distinguir desejo de necessidade pode proteger sua paz e seu orçamento.',
    },
    {
      title: 'Responsabilidade sem condenação',
      ref: 'Provérbios 22:7',
      text: 'Alerta para a dependência que a dívida pode gerar. Esse texto não deve ser usado para humilhar quem está endividado.',
      practice: 'Use-o como convite à prudência, à busca de soluções e ao cuidado para não entrar novamente no mesmo ciclo.',
    },
    {
      title: 'Generosidade com sabedoria',
      ref: 'Valor cristão',
      text: 'A generosidade é um valor cristão, mas não deve ser usada para pressionar uma pessoa endividada a dar dinheiro que precisa para alimentação, moradia, saúde ou compromissos essenciais.',
      practice: 'Cada família precisa agir com responsabilidade e liberdade de consciência.',
    },
  ],
  truth:
    'Pedir ajuda não é falta de fé. Buscar orientação, aprender a organizar o dinheiro e negociar com responsabilidade também podem fazer parte de uma caminhada de sabedoria.',
};

export const prayer = {
  title: 'Uma oração para este tempo',
  lines: [
    'Senhor Deus, venho diante de Ti com a realidade da minha vida financeira.',
    'Dá-me serenidade para enfrentar o que preciso enfrentar, sabedoria para tomar decisões, disciplina para seguir um plano e humildade para pedir ajuda quando necessário.',
    'Guarda minha família do desespero e ajuda-me a agir com honestidade, prudência e esperança.',
    'Que eu aprenda a administrar melhor os recursos que tenho e a construir, um passo de cada vez, um caminho de maior estabilidade.',
  ],
  amen: 'Amém.',
};

export const closing = {
  title: 'Você pode recomeçar',
  paragraphs: [
    'Talvez sua caminhada leve mais tempo do que você gostaria. Pode haver meses difíceis, negociações frustradas e ajustes no plano. Isso não significa que você falhou. Significa que será necessário olhar para a realidade, rever as possibilidades e continuar com responsabilidade.',
    'Não compare sua vida com a de outras pessoas. Dê valor a cada avanço: entender uma conta, fazer uma ligação, recusar uma compra impulsiva, negociar uma condição melhor ou pedir ajuda com humildade.',
    'A liberdade financeira não é apenas quitar dívidas. É aprender a tomar decisões mais conscientes, cuidar das necessidades da família e construir hábitos que ajudem a evitar novos ciclos de endividamento.',
  ],
  wish: 'Que este guia seja um começo de conversa, aprendizado e cuidado mútuo em sua comunidade.',
  signature: 'Preparado para acolher, orientar e encorajar — com fé, sabedoria e passos práticos.',
};

export const video = {
  title: 'Assista ao Guia: Um Novo Começo',
  lead: 'Em pouco mais de um minuto, o vídeo apresenta o caminho deste guia. Assista com calma — se puder, ao lado de alguém de confiança — e depois dê o primeiro passo do plano.',
  duration: '1 minuto',
  src: '/videos/um-novo-comeco-ibvpd-narrado.mp4',
  poster: '/videos/um-novo-comeco-capa.jpg',
};

// Descrição fiel ao conteúdo do arquivo (abas e legenda de cores lidas da própria planilha).
export const spreadsheet = {
  title: 'Sua Planilha de Organização Financeira',
  lead: 'Uma planilha simples para acompanhar sua vida financeira. Preencha com calma, sem julgamento: ela ajuda a enxergar quanto entra, quanto sai e o que você deve, para que você organize suas finanças um passo de cada vez.',
  sheets: [
    { name: 'Comece aqui', text: 'Seu resumo, que se atualiza sozinho, e o passo a passo de uso.' },
    { name: 'Meu mês', text: 'Anote quanto entra e quanto sai, mesmo com valores aproximados.' },
    { name: 'Minhas dívidas', text: 'Liste cada dívida separadamente, com saldo e parcela.' },
    { name: 'Meu plano', text: 'Escreva uma ação pequena e uma data para fazê-la.' },
  ],
  colors: 'Células em laranja claro são para você preencher; as cinza são calculadas sozinhas.',
  href: '/arquivos/planilha_vida_financeira_vida_plena.xlsx',
  fileName: 'planilha_vida_financeira_vida_plena.xlsx',
  fileInfo: 'Arquivo Excel (.xlsx) · 118 KB',
  instruction: 'O arquivo pode ser aberto no Microsoft Excel ou em um aplicativo compatível.',
};

export const navLinks = [
  { href: '#guia', label: 'O guia' },
  { href: '#video', label: 'Vídeo' },
  { href: '#plano', label: 'Plano' },
  { href: '#planilha', label: 'Planilha' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#estrategia', label: 'Estratégia' },
  { href: '#negociacao', label: 'Negociação' },
  { href: '#renda-extra', label: 'Renda extra' },
  { href: '#principios', label: 'Princípios' },
  { href: '#oracao', label: 'Oração' },
];
