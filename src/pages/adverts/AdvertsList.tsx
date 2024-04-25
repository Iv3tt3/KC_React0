import { useEffect, useState } from 'react';
import { getAdverts } from './service';
import { Advert } from '../../utils/interfaces';

export function AdvertsList() {
    const [adverts, setAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    getAdverts()
    .then(adverts => setAdverts(adverts));
    }, []);

  return (
    <div title="Adverts in AdPop">
        {adverts.length 
        ? (
          <ul>
            {adverts.map(({ id, ...advert }) => (
              <li key={id}>
                  <p {...advert} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No adverts yet</p>
        )}
      </div>
  );
}