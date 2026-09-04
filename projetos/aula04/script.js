const campoCep = document.getElementById('cep');
campoCep.addEventListener('input', function () {
    let valor = this.value.replace(/\D/g, ``);
    if (valor.length > 5) {
        valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
    }
    this.value = valor;
})

const campoCpf = document.getElementById('cpf');
campoCpf.addEventListener('input', function () {
    let valor = this.value.replace(/\D/g, ``);
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    if (valor.length > 9) {
        valor = valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, 9) + '-' + valor.slice(9);
    } else if (valor.length > 6) {
        valor = valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6);
    } else if (valor.length > 3) {
        valor = valor.slice(0, 3) + '.' + valor.slice(3);
    }
    this.value = valor;
});

function calcularIdade() {
    const inputNascimento = document.getElementById('nascimento');

    const hoje = new Date();
    const dataNascimento = new Date(inputNascimento.value);

    let idadeAtual = hoje.getFullYear() - dataNascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < hoje.getDate() < dataNascimento.getDate())) {
        idadeAtual = idadeAtual - 1;
    }

    document.getElementById('idade').value = idadeAtual + " anos";
}

campoCep.addEventListener('blur', async function () {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido.');
        return;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.uf;
        document.getElementById('ibge').value = dados.ibge;
    } catch (erro) {
        alert('Erro ao consultar o CEP.');
    }
});