import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error
    } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {

            try {
                dispatch(setLoading(true))
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.urls.full

                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.hits.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user || 'video',
                        thumbnail: item.videos.medium.thumbnail,
                        src: item.videos.medium.url,
                        url: item.videos.medium.url

                    }))

                }
                if (activeTab == 'gif') {
                    let response = await fetchGifs(query)
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title,
                        thumbnail: item.images.fixed_height_small.url,
                        src: item.images.original.url,
                        url: item.images.original.url

                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))

            }

        }
        getData()
    }, [query, activeTab, dispatch])

    if (error) return <h1 className='text-quaternary'>Error</h1>
    if (loading) return <h1 className='text-quaternary '>Loading...</h1>

    return (
        <div className="text-quaternary justify-between w-full px-10 flex flex-wrap gap-5 overflow-auto ">
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            }
            )}
        </div>
    )
}

export default ResultGrid