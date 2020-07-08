
  const showAdvertising = () => {
    console.log("Show ads")
  }

  const maybeShowAdvertising = () => {
    console.log("Maybe")
  }

  if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', event => {
      // User has an open payment stream

      // Connect to backend to validate the session using the request id
      const { paymentPointer, requestId } = event.detail
      if (!isValidSession(paymentPointer, requestId)) {
        console.error('Invalid requestId for monetization')
        showAdvertising()
      }
    })

    document.monetization.addEventListener('monetizationprogress', event => {
      // A payment has been received

      // Connect to backend to validate the payment
      const {
        paymentPointer,
        requestId,
        amount,
        assetCode,
        assetScale
      } = event.detail
      if (
        isValidPayment(paymentPointer, requestId, amount, assetCode, assetScale)
      ) {
        // Hide ads for a period based on amount received
        suspendAdvertising(amount, assetCode, assetScale)
      }
    })
    // Wait 30 seconds and then show ads if advertising is no longer suspended
    setTimeout(maybeShowAdvertising, 3000)
  } else {
    showAdvertising()
  }