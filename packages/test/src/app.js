import React from 'react';
import { useWMR } from 'web-monetization-react';

export default function App() {

  const handleInProgress = (e, totalAmountPaid) => {
    // console.log(e.type, e.timestamp, e.detail)
    console.log(amountRef, totalAmountPaid)
    amountRef.innerText = totalAmountPaid;
  }

  const handleStatusChange = e => {
    console.log(e.type, e)
  }

  const handleOnStart = e => {
    console.log(e.type, e)
  }

  const handleOnStop = e => {
    console.log(e.type, e)
  }

  const wmr = useWMR({
    paymentPointer: '$ilp.uphold.com/K8629aeFGqEQ',
    isDebug: true,
    onStatusChange: handleStatusChange,
    onStart: handleOnStart,
    onStop: handleOnStop,
    inProgress: handleInProgress,
    startOnLoad: false
  });

  const {
    hasPaid,
    isSupported,
    totalAmount,
    startMonetization,
    stopMonetization,
    currency,
    getGlobalConfig
  } = wmr;

  let amountRef = null;

  if(!wmr.isSupported) {
    return <h1>Web monetization is either not supported or not enabled in your browser</h1>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: JSON.stringify(wmr)
      }}></div>
      <h1 ref={r => amountRef = r}></h1>
      <button onClick={startMonetization}>start</button>
      <button onClick={stopMonetization}>stop</button>
    </>
  );
}
