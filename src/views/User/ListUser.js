import React, { useEffect, useState } from "react";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./ListUsers.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ListUser() {
    const [state, setState] = useState([])
    const hitory = useNavigate()

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1")
            .then((res) => {
                setState(res.data.data);
            });
    }, [])


    const handleUser = (user) => {
        hitory(`/user/${user.id}`)
    }
    return (

        <div className={cx("container")}>
            <div className={cx("title")}>List User</div>
            <div className={cx("list-users")}>
                {state &&
                    state.length > 0 &&
                    state.map((user) => (
                        <div
                            className={cx("user")}
                            key={user.id}
                            onClick={() => handleUser(user)}
                        >
                            {user.id} - {user.first_name}
                            {user.last_name}
                        </div>
                    ))}
            </div>
        </div>

    );
}

export default ListUser;

// class ListUser extends React.Component {
//     state = {
//         listUser: [],
//     };

//     componentDidMount() {
//         axios.get("https://reqres.in/api/users?page=1").then((res) => {
//             this.setState({
//                 listUser: res && res.data && res.data.data ? res.data.data : [],
//             });
//         });
//     }

//     handleUser = (user) => {
//         const history = useNavigate();
//         history(`/user/${user.id}`)
//     }
//     render() {
//         const { listUser } = this.state;
//         return (
//             <div className={cx("container")}>
//                 <div className={cx("title")}>List User</div>
//                 <div className={cx("list-users")}>
//                     {listUser &&
//                         listUser.length > 0 &&
//                         listUser.map((user) => (
//                             <div
//                                 className={cx("user")}
//                                 key={user.id}
//                                 onClick={() => this.handleUser(user)}
//                             >
//                                 {user.id} - {user.first_name}
//                                 {user.last_name}
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(ListUser);
