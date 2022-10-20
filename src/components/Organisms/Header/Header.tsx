import React, { useEffect, useRef, useState } from "react";
import { User } from "../../../interfaces/Board.interface";
import { fetchUserList } from "../../../utils/Functions/DataStore";
import OverlapAvatars from "../../Atoms/OverlapAvatars/OverlapAvatars";
import ToggleSwitch from "../../Atoms/ToggleSwitch/ToggleSwitch";
import Dropdown from "../../Molecules/Dropdown/Dropdown";
import ItemTitle from "../../Molecules/ItemTitle/ItemTitle";
import Searcher from "../../Molecules/Searcher/Searcher";
import "./Header.css";

const Header = (props: any) => {
  const dataFetchedRef = useRef(false);
  const [users, setUsers] = useState<User[]>([]);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  async function fetchData() {
    const users: User[] = await fetchUserList();
    setUsers(users);
  }

  const getPriority = (e: any) => {
    props.onChange(e.target.value);
  };

  const getTheme = (e: any) => {
    setTheme(e.target.checked);
    props.onChangeTheme(e.target.checked);
  };

  return (
    <div
      className={
        theme
          ? "sticky-top border-bottom header-dark text-white"
          : "sticky-top border-bottom header"
      }
    >
      <div className="container px-5 pt-5 pb-3">
        <div className="row mb-1">
          <div className="col">
            <h3>Stripe payments</h3>
          </div>
          <div className="col">
            <div className="float-end">
              <ToggleSwitch onChange={getTheme} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Dropdown onChange={getPriority} />
          </div>
          <div className="col-3">
            <ItemTitle title="Created on:" children="May 13" />
          </div>
          <div className="col">
            <ItemTitle
              title="Teams:"
              children={<OverlapAvatars users={users} header={true} />}
            />
          </div>
          <div className="col-4">
            <div className="float-end">
              <Searcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
