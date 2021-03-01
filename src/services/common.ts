import { writable } from "svelte/store";
import { Creditos, Dinheiro, Fome, ForcaFisica, Jogador, Sede, Sono } from "../interfaces/brazucas";
import Swal from 'sweetalert2';

export const jogador = writable<Jogador>({
  nome: 'Carregando...',
  email: '',
  fome: Fome.MAXIMO,
  sono: Sono.MAXIMO,
  forcaFisica: ForcaFisica.MAXIMO,
  sede: Sede.MAXIMO,
  dinheiro: Dinheiro.MINIMO,
  creditos: Creditos.MINIMO,
});

export const mostrarErro = (mensagem: string) => Swal.fire({
  title: 'Oops!',
  text: obterMensagemDeErro(mensagem),
  icon: 'error',
  confirmButtonText: 'Fechar',
})

const obterMensagemDeErro = (e) => {
  return 'Um erro ocorreu ao processar sua solicitação, tente novamente mais tarde.';
}