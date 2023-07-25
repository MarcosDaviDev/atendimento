/*Data e hora */
function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
    
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    dataFormat = vdia + " / " + vmes + " / " + vano;
    horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()",1000);
}

/*Botão para copiar */
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    exibirRegistro();
  });
  
  let dadosRegistrados = {};
  
  function exibirRegistro() {
    const nome = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const acess = document.getElementById('acess').value;
    const telefone = document.getElementById('telefone').value;
    const problem = document.getElementById('problem').value;
    const solution = document.getElementById('solution').value;
  
    dadosRegistrados = {
      nome,
      company,
      acess,
      telefone,
      problem,
      solution
    };
  
    const saidaDiv = document.getElementById('saida');
    saidaDiv.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Acesso:</strong> ${acess}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Problema:</strong> ${problem}</p>
      <p><strong>Solução:</strong> ${solution}</p>
    `;
  
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
  }
  
  function copiar() {
    const tempInput = document.createElement('textarea');
    document.body.appendChild(tempInput);
    tempInput.value = formatarDados(dadosRegistrados);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    alert('Campos copiados para a área de transferência:\n' + tempInput.value);
  }
  
  function fecharRegistro() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  
  function formatarDados(dados) {
    return `Nome: ${dados.nome} - Empresa: ${dados.company}\nAcesso: ${dados.acess}\nTelefone: ${dados.telefone}\nProblema: ${dados.problem}\nSolução: ${dados.solution}`;
  }
  
