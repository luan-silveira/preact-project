import { logout } from '../../components/auth';

const Logout = () => {
	logout();
	location.href = '/login';
};

export default Logout;