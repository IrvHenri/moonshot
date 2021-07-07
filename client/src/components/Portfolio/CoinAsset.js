const CoinAsset = ({coin}) => {
  const {name, image, symbol, current_price, quantity} = coin
  return <div>
    {name} | {quantity} | {current_price * quantity}
  </div>
}

export default CoinAsset