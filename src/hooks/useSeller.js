import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoadding, setIsSellerLoadding] = useState(true)
    useEffect(() => {
        fetch(`https://dream-shop-server.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsSeller(data.isSeller)
                setIsSellerLoadding(false)
                console.log(data.isSeller)
            })
    }, [email])
    return [isSeller, isSellerLoadding]
}

export default useSeller