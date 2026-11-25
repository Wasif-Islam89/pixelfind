import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(setQuery(text))

        setText('')

    }


    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex bg-secondary py-10 px-10 gap-5 '>
                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    required
                    className='w-full px-6 py-3 text-xl bg-primary text-quaternary border-2
                      border-tertiary placeholder:text-quaternary/60 outline-none rounded'
                    type="text" placeholder="Search anything..." />
                <button className=' active:scale-95 bg-tertiary hover:bg-quaternary hover:text-primary text-white px-4 py-2 ml-2 cursor-pointer'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
