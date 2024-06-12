import * as S from './style.js'

export const NavItem = ({children, activeIcon, inactiveIcon, isActive = false}) => {
    return (
        <S.itemList isActive={isActive}>
        <img src={isActive ? activeIcon : inactiveIcon} />
        {children}
        </S.itemList>
    )}