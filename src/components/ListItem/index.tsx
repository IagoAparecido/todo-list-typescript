import React, { useState } from "react";
import "./style.css";

import { Item } from "../../types/Item";

type Props = {
  item: Item;
};

function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <div className="container_item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </div>
  );
}

export default ListItem;
