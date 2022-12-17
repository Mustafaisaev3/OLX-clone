import React, { useEffect } from "react"

type Event = MouseEvent | TouchEvent

export const useLocationOutsideClick = (currentRef: any, handler : any) => {
    
    useEffect(() => {
        const listener = (e: Event) => {
            e.stopPropagation()
            
            const el = currentRef.current
            if (el.contains(e?.target as Node)) {
                return
            }
                
            console.log('hello')
            handler()
        }

        document.addEventListener('click', listener)

        return () => {
            document.removeEventListener('click', listener)
        }
    }, [])

}
