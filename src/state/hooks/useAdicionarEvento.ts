import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { listaDeEventosState } from "../atom";
import {useSetRecoilState} from 'recoil';


const useAdicionarEvento = () => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    const hoje = new Date()
    if(evento.inicio<hoje){
      throw new Error('Eventos não podem ser cadastradas com datas anteriores da atual')
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento