import React from 'react'
import FamilyPackages from './FamilyPackages'
import TopPackages from './TopPacakges'
import { useBaseQuery } from '../../../api/BaseRequest'
export const Packages = () => {
    const { data, isLoading } = useBaseQuery(`/health/packages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return (
        <>
            <FamilyPackages data={data} isLoading={isLoading} />
            <TopPackages data={data} isLoading={isLoading} />
        </>
    )
}
