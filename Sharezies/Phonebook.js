import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: 'collapse'
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
}

function PhoneBookForm({addEntryToPhoneBook}) {

    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        phone: ''
    });

    const {firstName, lastName, phone} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        addEntryToPhoneBook(user);
    }

    return (
        <form onSubmit={e => onSubmit(e)} style={style.form.container}>
            <label>First name:</label>
            <br/>
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='firstName'
                type='text'
                onChange={e => onChange(e)}
            />
            <br/>
            <label>Last name:</label>
            <br/>
            <input
                style={style.form.inputs}
                className='userLastname'
                name='lastName'
                type='text'
                onChange={e => onChange(e)}
            />
            <br/>
            <label>Phone:</label>
            <br/>
            <input
                style={style.form.inputs}
                className='userPhone'
                name='phone'
                type='text'
                onChange={e => onChange(e)}
            />
            <br/>
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable({users}) {
    let count = 0;
    return (
        <table style={style.table} className='informationTable'>
            <thead>
            <tr>
                <th style={style.tableCell}>First name</th>
                <th style={style.tableCell}>Last name</th>
                <th style={style.tableCell}>Phone</th>
            </tr>
            {users.length > 0 ? users.map(user => {
                count++;
                return (
                    <tr key={count}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                    </tr>)
            }) : null}
            </thead>
        </table>
    );
}

function Application(props) {

    const [users, setUsers] = React.useState([]);

    const addEntryToPhoneBook = (user) => {
        setUsers([...users, user]);
    };

    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
            <InformationTable users={users}/>
        </section>
    );
}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);