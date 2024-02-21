import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { MENU_LIST } from "../pages/ListMenuSort";

const ListMenu = ({ menuCategory, menuSubCategory, listHeader }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { category_id } = useParams();

  const changeValueToQuery = (select) => {
    const paramsString = new URLSearchParams(search);

    if (select.target.value === "sortBasic") {
      paramsString.delete("sort");
    } else if (select.target.value === "sortHigh") {
      paramsString.delete("sort");
      paramsString.append("sort", "-price");
    } else if (select.target.value === "sortLow") {
      paramsString.delete("sort");
      paramsString.append("sort", "price");
    }
    navigate(`/productlist?${paramsString.toString()}`);
  };

  const changeCategory = (value, id) => {
    navigate(
      `/productlist?category=${
        value === "Category" ? id : `1&sub_category=${id}`
      }`
    );
  };

  return (
    <div className="listMenu">
      <div className="listTitle">
        <h2>{listHeader.name}</h2>
        <select defaultValue="sortBasic" onChange={changeValueToQuery}>
          {MENU_LIST.map((menu) => (
            <option key={menu.id} value={menu.value}>
              {menu.name}
            </option>
          ))}
        </select>
      </div>
      <ul className="listCategory">
        <li onClick={() => changeCategory("Category", category_id)}>
          전체 ({menuCategory.count})
        </li>
        {menuSubCategory.map((menu) => (
          <li
            key={menu.sub_category_id}
            onClick={() => changeCategory("SubCategory", menu.sub_category_id)}
          >
            {menu.name} ({menu.count})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
