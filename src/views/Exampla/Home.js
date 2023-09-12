import React from "react";
import { connect } from "react-redux";

import Color from "../HOC/Color";
import logo from "~/assets/images/Anhnen.jpg";
class Home extends React.Component {

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }
    handleAddUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log(this.props);
        let listUser = this.props.dataRedux;
        return (
            <div>
                <div>Home Page</div>
                <div>{/* <img src={logo} alt="" /> */}</div>
                <div>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                <span onClick={() => this.handleDeleteUser(item)}> X</span>


                            </div>
                        ))
                    }
                    <button onClick={() => this.handleAddUser()}> Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE',
            payload: userDelete,
        }),
        addUserRedux: () => dispatch({
            type: 'ADD',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
