export const photosData = async() => {
    const res = await fetch('https://pixgen-code-next.vercel.app/data.json')
    return res.json()
}