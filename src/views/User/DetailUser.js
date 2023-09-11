import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './DetailUser.module.scss'

import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles)


function DetailUser() {
    const [state, setState] = useState({})
    let isEmptyObj = Object.keys(state).length === 0
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            axios.get(`https://reqres.in/api/users/${id}`)
                .then(res => (
                    setState(res.data.data)
                ))
        }
    }, [id])
    return (
        <>
            <div>Personal information</div>
            {!isEmptyObj && <div className={cx('container')}>
                <div className={cx('user')}>
                    <div className={cx('use_img')}><img src={state.avatar} alt={state.last_name} /></div>
                    <div className={cx('user_dec')}>
                        <p className={cx('use_name')}>FullName: {state.first_name} {state.last_name}</p>
                        <p className={cx('user_email')}>Email: {state.email}</p>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default DetailUser;

// class DetailUser extends React.Component {

//     state = {
//         user: {}
//     }

//     async componentDidMount() {
//         if (this.props.params) {
//             let id = this.props.params.id;

//             let res = await axios.get(`https://reqres.in/api/users/${id}`)
//             this.setState({
//                 user: res.data ? res.data.data : {}
//             })
//         }
//     }

//     render() {
//         let { user } = this.state
//         let isEmptyObj = Object.keys(user).length === 0
//         return (
//             <>
//                 <div>Personal information</div>
//                 {!isEmptyObj && <div className={cx('container')}>
//                     <div className={cx('user')}>
//                         <div className={cx('use_img')}><img src={user.avatar} alt={user.last_name} /></div>
//                         <div className={cx('user_dec')}>
//                             <p className={cx('use_name')}>FullName: {user.first_name} {user.last_name}</p>
//                             <p className={cx('user_email')}>Email: {user.email}</p>
//                         </div>
//                     </div>
//                 </div>}
//             </>
//         );
//     }
// }

// export default withRouter(DetailUser);