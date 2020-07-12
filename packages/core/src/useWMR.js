import React, { useState, useEffect } from 'react';
import {
  calculateAmount,
  getMonetizationTag,
  stopMonetization
} from './utils';

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
    startOnLoad = false
  } = props;

  const isMStateEnabled = !!document.monetization;
  const mState = isMStateEnabled ? document.monetization.state : 'undefined';

  let globalConfig = { totalAmountPaid: 0 };

  if (!paymentPointer) {
    isDebug && console.log("Please provide payment pointer");
    return;
  }

  // isDebug && console.log("getMonetizationTag()", getMonetizationTag())

  const getGlobalConfig = () => globalConfig;

  const handleStatusChange = (e) => {
    globalConfig = Object.assign(globalConfig, e.detail);
    onStatusChange && onStatusChange(e, globalConfig);
  }

  const handleStart = (e) => {
    console.log("asdasdsa", e)
    globalConfig = Object.assign(globalConfig, e.detail);
    onStart && onStart(e, globalConfig);
  }

  const handleStop = (e) => {
    const formatedAmount = calculateAmount(globalConfig.totalAmountPaid, e.detail.assetScale)
    onStop && onStop(e, formatedAmount);
  }

  const handleProgress = (e) => {
    globalConfig.totalAmountPaid += Number(e.detail.amount);
    const formatedAmount = calculateAmount(globalConfig.totalAmountPaid, e.detail.assetScale);
    globalConfig = Object.assign(globalConfig, { totalAmount: formatedAmount });
    inProgress && inProgress(e, globalConfig);
  }

  const attachListeners = () => {
    document
      .monetization
      .addEventListener('monetizationpending', handleStatusChange)

    document
      .monetization
      .addEventListener('monetizationstart', handleStart)

    document
      .monetization
      .addEventListener('monetizationstop', handleStop)

    document
      .monetization
      .addEventListener('monetizationprogress', handleProgress)
  };

  const startMonetization = (e) => {

    if (!getMonetizationTag() && !paymentPointer) {
      isDebug && console.log("Please provide a payment pointer to start monetization");
      return;
    }

    if (!getMonetizationTag()) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'monetization')
      meta.setAttribute('content', paymentPointer)
      document.head.appendChild(meta);
      attachListeners();
    }
  };

  useEffect(() => {
    if (startOnLoad) {
      startMonetization();
    } else {
      attachListeners();
    }
  }, []);

  return ({
    hasPaid: (globalConfig.totalAmountPaid && globalConfig.totalAmountPaid > 0), // TODO
    isSupported: isMStateEnabled,
    startMonetization,
    stopMonetization,
    getGlobalConfig
  });

}
