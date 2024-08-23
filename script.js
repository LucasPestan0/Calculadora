function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
         },


        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Invalida');
                    return;
                }   
                
                this.display.value = String(conta);
        
            } catch(e) {
                alert('Conta Invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        




        cliqueBotoes() {
            document.addEventListener('click', Event => {
                const el = Event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }


            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

let calculadora = criaCalculadora();
calculadora.inicia();