import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Some setup instructions
 * mState or MState => monetization state
 */

export default function useWMR(props) {
  /**
   * This can either be
   * 1. undefined
   * 2. stopped
   * 3. pending
   * 4. started
   */

  const {
    paymentPointer = null,
    isDebug = false,
    onStatusChange = null,
    onStart = null,
    onStop = null,
    inProgress = null,
  } = props;

  const isMStateEnabled = typeof document.monetization !== 'undefined';
  const mState = isMStateEnabled ? document.monetization.state : 'undefined';

  const [currentMState, setMState] = useState(mState);

  if (!paymentPointer) {
    isDebug && console.log("Please provide payment pointer");
    return null;
  }

  useEffect(() => {

    document
      .monetization
      .addEventListener('monetizationpending', onStatusChange)

    document
      .monetization
      .addEventListener('monetizationstart', onStart)
    
    document
      .monetization
      .addEventListener('monetizationstop', onStop)
    
    document
      .monetization
      .addEventListener('monetizationprogress', inProgress)
    
  })

  return ({ 
    isSupported: isMStateEnabled,
    mState: mState,
    isPaid: false, // TODO
    totalAmount: 0 // TODO
  });

}

useWMR.propTypes = {
  paymentPointer: PropTypes.string,
  isDebug: PropTypes.bool,
  onStatusChange: PropTypes.func
}