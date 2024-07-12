function validarForm() {
    const selectFrutas = document.getElementById('frutas');
    const inputOutraFruta = document.getElementById('outraFruta');
    const botaoEnviar = document.getElementById('enviar');
  
    const frutasSelecionadas = [];
    for (let i = 0; i < selectFrutas.options.length; i++) {
      if (selectFrutas.options[i].selected) {
        frutasSelecionadas.push(selectFrutas.options[i].value);
      }
    }
  
    if (frutasSelecionadas.length < 2) {
      alert('Selecione pelo menos duas frutas!');
      return false; // Impedir envio do formulário
    }
  
    if (selectFrutas.value === 'Outra') {
      if (inputOutraFruta.value.length < 3) {
        alert('Digite uma fruta com pelo menos 3 caracteres!');
        return false; // Impedir envio do formulário
      }
  
      frutasSelecionadas.push(inputOutraFruta.value);
    }
  
    const frutasTexto = frutasSelecionadas.join(', ');
    alert(`Frutas selecionadas: ${frutasTexto}`);
  
    // Permitir envio do formulário
    return true;
  }