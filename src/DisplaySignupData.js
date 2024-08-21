import { useEffect, useState } from "react";
import axios from "axios";

const DisplaySignupData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:2004/signup-data');
                setUsers(response.data);
            } catch (error) {
                console.log('Error Fetching signup data:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Registered Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Paassword</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        // Using index as a fallback for unique ID
                        <tr key={user.id || index}> 
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.password}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplaySignupData;