import { TheoryPoint } from './types';

export const QUESTION_THEORY: TheoryPoint[] = [
  {
    title: "📊 Հարցական բառեր",
    table: [
      { armenian: "Ո՞վ", spanish: "Quién" },
      { armenian: "Ո՞վքեր", spanish: "Quiénes" },
      { armenian: "Ի՞նչ", spanish: "Qué" },
      { armenian: "Ո՞րը", spanish: "Cuál" },
      { armenian: "Որո՞նք", spanish: "Cuáles" },
      { armenian: "Որտե՞ղ", spanish: "Dónde" },
      { armenian: "Ուր(դեպի)", spanish: "Adónde" },
      { armenian: "Որտեղի՞ց", spanish: "De dónde" },
      { armenian: "Ե՞րբ", spanish: "Cuándo" },
      { armenian: "Ինչո՞ւ", spanish: "Por qué" },
      { armenian: "Ինչի՞ համար", spanish: "Para qué" },
      { armenian: "Ինչպե՞ս", spanish: "Cómo" },
      { armenian: "Ինչքա՞ն", spanish: "Cuánto/a/os/as" }
    ]
  },
  {
    title: "⚠️ Կարևոր կանոն",
    rules: [
      "👉 Բոլոր հարցական բառերը ունեն շեշտ (´)",
      "* qué / quién / dónde / cuándo / cómo / cuánto",
      "❌ que, quien, donde — ոչ հարցական",
      "✅ qué, quién, dónde — հարցական"
    ]
  },
  {
    title: "🧠 Փոքր հիշեցում",
    rules: [
      "* Qué → ինչ",
      "* Cuál → որն (ընտրություն)",
      "* Cuánto → ինչքան / քանի"
    ]
  },
  {
    title: "📝 Հարցեր",
    simpleExamples: [
      { q: "¿Quién eres?", qArm: "Ո՞վ ես դու։" },
      { q: "¿Quiénes son ellos?", qArm: "Ո՞վքեր են նրանք։" },
      { q: "¿Qué haces?", qArm: "Ի՞նչ ես անում։" },
      { q: "¿Cuál es tu libro?", qArm: "Ո՞րն է քո գիրքը։" },
      { q: "¿Cuáles son tus libros?", qArm: "Որո՞նք են քո գրքերը։" },
      { q: "¿Dónde estás?", qArm: "Որտե՞ղ ես։" },
      { q: "¿Adónde vas?", qArm: "Որտե՞ղ ես գնում։" },
      { q: "¿De dónde eres?", qArm: "Որտեղի՞ց ես։" },
      { q: "¿Cuándo vienes?", qArm: "Ե՞րբ ես գալիս։" },
      { q: "¿Por qué estudias?", qArm: "Ինչո՞ւ ես սովորում։" },
      { q: "¿Para qué es esto?", qArm: "Ինչի՞ համար է սա։" },
      { q: "¿Cómo estás?", qArm: "Ինչպե՞ս ես։" },
      { q: "¿Cuánto cuesta?", qArm: "Ինչքա՞ն արժե։" },
      { q: "¿Cuántos años tienes?", qArm: "Քանի՞ տարեկան ես 👍" }
    ]
  },
  {
    title: "💬 Հարց ու Պատասխան",
    fullExamples: [
      { q: "¿Quién eres?", a: "Soy Lilit.", qArm: "¿Quién eres? — Ո՞վ ես դու։", aArm: "Soy Lilit. (Ես Լիլիթ եմ։)" },
      { q: "¿Quiénes son ellos?", a: "Son mis amigos.", qArm: "¿Quiénes son ellos? — Ո՞վքեր են նրանք։", aArm: "Son mis amigos. (Նրանք իմ ընկերներն են։)" },
      { q: "¿Qué haces?", a: "Estudio español.", qArm: "¿Qué haces? — Ի՞նչ ես անում։", aArm: "Estudio español. (Ես իսպաներեն եմ սովորում։)" },
      { q: "¿Cuál es tu libro?", a: "Es mi libro.", qArm: "¿Cuál es tu libro? — Ո՞րն է քո գիրքը։", aArm: "Es mi libro. (Սա իմ գիրքն է։)" },
      { q: "¿Cuáles son tus libros?", a: "Son mis libros.", qArm: "¿Cuáles son tus libros? — Որո՞նք են քո գրքերը։", aArm: "Son mis libros. (Սրանք իմ գրքերն են։)" },
      { q: "¿Dónde estás?", a: "Estoy en casa.", qArm: "¿Dónde estás? — Որտե՞ղ ես։", aArm: "Estoy en casa. (Տանն եմ։)" },
      { q: "¿Adónde vas?", a: "Voy a la escuela.", qArm: "¿Adónde vas? — Որտե՞ղ ես գնում։", aArm: "Voy a la escuela. (Գնում եմ դպրոց։)" },
      { q: "¿De dónde eres?", a: "Soy de Armenia.", qArm: "¿De dónde eres? — Որտեղի՞ց ես։", aArm: "Soy de Armenia. (Ես Հայաստանից եմ։)" },
      { q: "¿Cuándo vienes?", a: "Vengo mañana.", qArm: "¿Cuándo vienes? — Ե՞րբ ես գալիս։", aArm: "Vengo mañana. (Գալիս եմ վաղը։)" },
      { q: "¿Por qué estudias?", a: "Porque me gusta.", qArm: "¿Por qué estudias? — Ինչո՞ւ ես սովորում։", aArm: "Porque me gusta. (Որովհետև ինձ դուր է գալիս։)" },
      { q: "¿Para qué es esto?", a: "Es for estudiar.", a: "Es para estudiar.", qArm: "¿Para qué es esto? — Ինչի՞ համար է սա։", aArm: "Es para estudiar. (Սա սովորելու համար է։)" },
      { q: "¿Cómo estás?", a: "Estoy bien.", qArm: "¿Cómo estás? — Ինչպե՞ս ես։", aArm: "Estoy bien. (Լավ եմ։)" },
      { q: "¿Cuánto cuesta?", a: "Cuesta diez euros.", qArm: "¿Cuánto cuesta? — Ինչքա՞ն արժե։", aArm: "Cuesta diez euros. (Արժե 10 եվրո։)" },
      { q: "¿Cuántos años tienes?", a: "Tengo doce años.", qArm: "¿Cuántos años tienes? — Քանի՞ տարեկան ես", aArm: "Tengo doce años. (Ես 12 տարեկան եմ )" }
    ]
  }
];
