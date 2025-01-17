import React, { ChangeEvent, FormEvent } from 'react';
import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
import { RootState } from '../store';
import { FiltersState } from 'types';

const SearchContainer: React.FC = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store: RootState) => store.allJobs);

    const { jobTypeOptions, statusOptions } = useSelector(
        (store: RootState) => store.job
    );

    const dispatch = useDispatch();

    const handleSearch = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        if (isLoading) return;
        const { name, value } = e.target;
        dispatch(
            handleChange({
                name: name as keyof FiltersState,
                value: e.target.value
            })
        );
    };
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(clearFilters());
    };

    return (
        <Wrapper>
            <form className='form'>
                <h4>search form</h4>
                <div className='form-center'>
                    <FormRow
                        type='text'
                        name='search'
                        value={search}
                        handleChange={handleSearch}
                    />
                    <FormRowSelect
                        labelText='status'
                        name='searchStatus'
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={['all', ...statusOptions]}
                    />

                    <FormRowSelect
                        labelText='type'
                        name='searchType'
                        value={searchType}
                        handleChange={handleSearch}
                        list={['all', ...jobTypeOptions]}
                    />
                    <FormRowSelect
                        name='sort'
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />
                    <button
                        className='btn btn-block btn-danger'
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
export default SearchContainer;
