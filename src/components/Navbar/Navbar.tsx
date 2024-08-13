import { FC } from "react";
import { Logo } from "../../assets";
import { navLinksdata } from "../../constants";

export const Navbar: FC = () => {
  return (
    <div className="w-full h-full mx-auto flex justify-between items-center">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300"
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
