import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoadding, setIsSellerLoadding] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/seller/${email}`)
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