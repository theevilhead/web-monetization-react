import React from 'react';
import useWMR from '@wmr/core';

export default function App() {
  const wmr = useWMR({
    paymentPointer: 'girish',
    isDebug: true,
    onStatusChange: console.log,
    onStart: console.log,
    onStop: console.log,
    inProgress: console.log,
  });

  const { isPaid, isSupported, totalAmount, mState } = wmr;

  // if(!wmr.isSupported) {
  //   return <h1>Web monetization is either not supported or not enabled in your browser</h1>;
  // }

  return (
    <div dangerouslySetInnerHTML={{
      __html: JSON.stringify(wmr)
    }}></div>
  );
}
