import { useEffect, useState } from 'react';
import { getAdverts } from './service';
import { Advert } from '../../utils/interfaces';

const example = {
    "id": "9a7a5614-871e-4506-a332-61adcc19c4cf",
    "createdAt": "2024-04-24T18:50:44.000Z",
    "name": "Bike",
    "sale": true,
    "price": 200,
    "tags": [
        "lifestyle"
    ],
    "photo": "http://localhost:3001/public/1713984644031-437908861.jpeg"
    }


export function AdvertsList() {

    return (
        <div title="Adverts in AdPop">
            
        </div>
    );
}