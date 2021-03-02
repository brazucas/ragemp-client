import { writable } from "svelte/store";
import { Creditos, Dinheiro, Fome, ForcaFisica, Jogador, Sede, Sono, VoiceChatListener } from "../interfaces/brazucas";
import Swal from 'sweetalert2';
import { BehaviorSubject } from "rxjs";

export const playerHudMenuAtivo = new BehaviorSubject<boolean>(false);
export const voiceChatListeners = writable<Array<VoiceChatListener>>([]);

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

export const mostrarErro = (error: any) => {
  console.error(error);
  Swal.fire({
    title: 'Oops!',
    text: obterMensagemDeErro(error),
    icon: 'error',
    confirmButtonText: 'Fechar',
  })
}

const obterMensagemDeErro = (e) => {
  return 'Um erro ocorreu ao processar sua solicitação, tente novamente mais tarde.';
}
