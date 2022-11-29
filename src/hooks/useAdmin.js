import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoadding, setIsAdminLoadding] = useState(true)
    useEffect(() => {
        fetch(`https://dream-shop-server.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data.isAdmin)
                setIsAdminLoadding(false)
            })
    }, [email])
    return [isAdmin, isAdminLoadding]
}

export default useAdmin