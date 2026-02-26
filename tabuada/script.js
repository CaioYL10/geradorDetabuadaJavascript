let execucao = false;
        function gerar() {
            if (execucao) {
                alert ('A função já executada!')
                return;
            } 
            execucao = true;
            let texto = '';
            for (i = 1; i <= 10; i++) {
                    texto += `<div class='exib'><p>Tabuada do ${i}</p><br>`;
                for (t = 1; t <= 10; t++) {
                    texto += `<p>${i} x ${t} = <strong>${i*t}</strong></p><br>`;
                }
                texto += '</div>'

            }

            document.getElementById('resultado').innerHTML = `${texto}`

        }