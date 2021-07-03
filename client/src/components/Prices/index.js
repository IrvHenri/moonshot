import Table from "react-bootstrap/Table";

const data = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  current_price: 34682,
  market_cap: 650869560416,
  market_cap_rank: 1,
  fully_diluted_valuation: 729087178650,
  total_volume: 22766841138,
  high_24h: 34924,
  low_24h: 33174,
  price_change_24h: 1257.03,
  price_change_percentage_24h: 3.76078,
  market_cap_change_24h: 24161151719,
  market_cap_change_percentage_24h: 3.85525,
  circulating_supply: 18747087,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 64805,
  ath_change_percentage: -46.42388,
  ath_date: "2021-04-14T11:54:46.763Z",
  atl: 67.81,
  atl_change_percentage: 51102.42751,
  atl_date: "2013-07-06T00:00:00.000Z",
  roi: null,
  last_updated: "2021-07-03T18:24:23.220Z",
};

const TableData = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th> Rank#</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Cap</th>
          <th>Volume(24h)</th>
          <th>Circulating Supply</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableData;
