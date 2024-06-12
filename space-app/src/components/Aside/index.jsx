import { NavItem } from "./NavItem";

export const Aside = () => {
  return (
    <aside>
      <nav>
        <NavItem
          activeIcon="/icons/home-ativo.png"
          inactiveIcon="/icons/home-inativo.png"
        >
        o  Início
        </NavItem>
        <NavItem
          activeIcon="/icons/mais-vistas-ativo.png"
          inactiveIcon="/icons/mais-vistas-inativo.png"
        >
            Mais Vistas
        </NavItem>
        <NavItem
          activeIcon="/icons/mais-curtidas-ativo.png"
          inactiveIcon="/icons/mais-curtidas-inativo.png"
        >
            Mais Curtidas
        </NavItem>
      </nav>
    </aside>
  );
};
