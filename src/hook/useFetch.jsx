import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api';

export default function useFetch(point) {
    const [data, useData] = useState([]);
    const dataApi = () => {
        fetchDataFromApi(point).then(
          (res) => {
            useData(res.data);
          }
        );
      };
      useEffect(() => {
        dataApi()
      }, [point]);
  return data
}
