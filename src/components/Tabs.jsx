import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab)



    return (
        <div className='flex gap-5 p-10'>
            {tabs.map(function (elem, idx) {
                return (
                    <button className={`${activeTab === elem ? 'bg-tertiary text-white' : 'bg-secondary text-quaternary'} cursor-pointer
                active:scale-95 px-5 py-2 rounded uppercase transition`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTab(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}
export default Tabs
