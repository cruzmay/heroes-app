import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import  queryString  from 'query-string'
import { getHeroByName } from '../../selectors/getHeroByName'


export const SearchScreen = ({history}) => {

        
    
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    console.log(q)

    const [{search}, handleInputChange, reset ] = useForm({ search: q } ) 

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${search}`)
        reset()
    }

    const filteredHero = useMemo(() => getHeroByName(q), [q])

    

    return (
        <div>
            <h2>Search your hero</h2>
            <hr/>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="search"
                    className="form-group col-10 p-1"
                    autoComplete="off"
                    placeholder="search..."
                    value={search}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary m-1"
                >
                    Search
                </button>
            </form>
            <div className="row animate__animated animate__fadeIn">
                {
                    q ==='' && <div
                        className="alert alert-info"
                    >Search your hero</div>
                }
                {
                    (q !=='' && filteredHero.length === 0) 
                    && 
                    <div
                        className="alert alert-danger"
                    >There is not hero with {q}</div>
                }   
                {
                    filteredHero.map( filtHero => 
                      <HeroCard
                        key={filtHero.id}
                        {...filtHero}
                      />
                    )
                }
            </div>        
        </div>
    )
}
