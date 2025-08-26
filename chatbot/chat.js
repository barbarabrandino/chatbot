import venom from "venom-bot";

venom.create().then((client) => iniciar(client));

function iniciar(client) {
  client.onMessage((message) => {
    const texto = message.body.toLowerCase().trim();


    if (texto === "menu") {
      client.sendText(
        message.from,
        "📋 *Menu de Atendimento*\n\n" +
        "1️⃣ - Falar com *Compras*\n" +
        "2️⃣ - Ver *Catálogo*\n" +
        "3️⃣ - *Horários* de atendimento\n" 
        "4️⃣ - *Sair*"
      );
    }

    
    else if (texto === "1") {
      client.sendText(message.from, "📞 Você será transferido para o setor de *Vendas* com Antonia. Aguarde...");
      
    } 
    else if (texto === "2") {
      client.sendText(message.from, "📦 Aqui está nosso catálogo: ");
      
    } 
    else if (texto === "3") {
      client.sendText(message.from, "🕗 Nosso horário de atendimento é das 8h às 17h00 de segunda à sexta.");
    } 
 
    else if (texto === "4") {
      client.sendText(message.from, "✅ Obrigado pelo contato! Até mais 👋");
    } 

    else {
      client.sendText(
        message.from,
        "🤖 Olá! Essa é uma mensagem automática. Digite *menu* para ver as opções."
      );
    }
  });
}
