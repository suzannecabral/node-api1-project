import Axios from 'axios';

const UserForm = () => {
    return(
    <div className="UserForm">
        <h2>User Form</h2>
        <form>
            <input name="name" placeholder="Name" />
            <input name="bio" placeholder="Bio" />
            <button>Submit</button>
        </form>
    </div>
    );


}
export default UserForm;