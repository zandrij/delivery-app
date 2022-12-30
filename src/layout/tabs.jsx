import { Icon, Tabbar, TabbarLink } from "konsta/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { tabsList } from "./tabslist";
export const Tabs = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState("/");

  const redirect = (e) => {
    navigate(`${e}`);
    setActive(e);
  };

  const location = useLocation();

    useEffect(()=>{
        setActive(location.pathname)
    },[location]);


  return (
    <Tabbar className="left-0 bottom-0 fixed tabbar">
      {tabsList.map((item, index)=>
        <TabbarLink
            key={index}
            className={`tabbar-link ${active === item.url && "active-nav"}`}
            label={item.name}
            onClick={() => redirect(item.url)}
            icon={
              <Icon
                material={
                  <item.icon className={`w-6 h-6 ${active === item.url && "active-nav"}`} />
                }
                ios={
                  <item.icon className={`w-6 h-6 ${active === item.url && "active-nav"}`} />
                }
              />
            }
        />
      )}
    </Tabbar>
  );
};
