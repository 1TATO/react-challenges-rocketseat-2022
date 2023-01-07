import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { CyclesContext } from '../../../../contexts/CyclesContext';

import { CountdownContainer, Separator } from './styles';

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext);

  // converte o numero de minutos em segundos
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  // calcula quantos segundos ja se passaram
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  // transforma a quantidade de segundos pra minutos
  const minutesAmount = Math.floor(currentSeconds / 60);
  // calcula a quantidade de segundos que sobraram da quantidade de minutos
  const secondsAmount = currentSeconds % 60;

  // preenche os minutos e segundos com o 0 na frente
  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  // atualiza o titulo da pagina com o tempo do timer
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
