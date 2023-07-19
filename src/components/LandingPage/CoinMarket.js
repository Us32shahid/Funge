import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Avatar } from '@mui/material'

import axios from 'axios'

const CoinMarket = () => {

    const [id, setrank] = useState();
    const [name, setname] = useState();
    const [data, setdata] = useState([])


    const baseURL = `https://api.coinmarketcap.com/data-api/v3/nft/collections?start=0&limit=10&sort=volume&desc=true`;

    const columns = [
        {
            field: 'rank', 
            headerName: 'Rank', 
            width:300,
            renderCell: (params) => {
                return(
                    <div>
                        {params.row.rank}
                        <img alt="" src={params.row.logo} />
                    </div>
                )
            }
        },
        {field: 'name', headerName: 'Name', width: 200 },
        {field: 'volume', headerName: 'Volume', width: 200},
        {field: 'volumeChangePercentage', headerName: 'Volume Change', width:200}
    ]
    
    const rows = data.map((row) => ({
        rank:row.rank,
        name:row.name,
        volume:row.oneDay.volume,
        volumeChangePercentage: row.oneDay.volumeChangePercentage
    }))
       
    function getMarketData() {
        axios.get(baseURL)
        .then(response => {
            let collections = response.data.data.collections;
            setdata(collections)
            /*rows = collections.map((row) => ({
                id: row.rank,
                name: row.name
            }))*/
        })
    }

    useEffect(() => {
        getMarketData();
    },[])

    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row.rank}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );

}

export default CoinMarket;