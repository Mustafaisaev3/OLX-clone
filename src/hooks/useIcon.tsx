import {HiOutlineUser} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'

interface useIconInterface {
    size: number,
    color: string,
    className?: string
}

const useIcon = () => {
    const Icons = {
        userIcon: (props: useIconInterface) => <HiOutlineUser {...props} />,
        down: (props: useIconInterface) => <IoIosArrowDown {...props} />,
    }

    return Icons
}

export default useIcon