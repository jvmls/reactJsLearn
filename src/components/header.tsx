import nlwUnitedIcon from "../assets/nlw-unite-icon.svg";
import { Navlink } from "./nav-link";
export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUnitedIcon} />
      <nav className="flex items-center gap-5">
        <Navlink href="/eventos">Eventos</Navlink>
        <Navlink href="/participantes">Participantes</Navlink>
      </nav>
    </div>
  );
}
