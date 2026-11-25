import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  py-6 px-10 bg-primary '>
            <Link className='text-quaternary text-2xl font-medium'>Media Search</Link>
            <div className='flex gap-5 text-xl items-center'>
                <Link className='text-base font-medium active:scale-95 bg-quaternary text-primary rounded px-4 py-2' to='/' >Search</Link>
                <Link className='text-base font-medium active:scale-95 bg-quaternary text-primary rounded px-4 py-2' to='/collection'>Collection</Link>

            </div>
        </div>
    )
}

export default Navbar