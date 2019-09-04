/* eslint-disable no-console */
import { Component } from 'preact';
import { setAuthenticated } from '../../components/auth';
// import { route } from 'preact-router';

export default class Login extends Component {

	state = {
		login: '',
		password: ''
	}

	showAlert = (message) => {
		let alert = document.getElementById('alert');
		alert.style.display = !message ? 'none' : 'block';
		alert.innerHTML = message;
	}

	onInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitForm = e => {
		e.preventDefault();

		// let form = new FormData(document.getElementById('formLogin'));
		fetch('http://192.168.0.11/luan/WSPlataformaESC/rest.php?class=WSTeste&method=login',{
			method: 'POST',
			mode: 'cors',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(this.state)
		}).then(res => res.json())
			.then(json => {
				if (json.logged){
					setAuthenticated(true);
					location.href = '/home';
					// route('/profile', true);
				}
				else {
					this.showAlert(json.retorno);
				}
			}).catch(e => {
				this.showAlert('Erro: ' + e.message);
			});
	}

	render(_, { login, password }) {
		return (
			<div class="jumbotron" style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 200 }}>
				<form id="formLogin" onSubmit={this.submitForm}>
					<h2 class="form-title">Login</h2>
					<div class="form-group">
						<label>E-mail</label>
						<input class="form-control" type="text" value={login} name="login" onInput={this.onInput} />
					</div>
					<div class="form-group">
						<label>Senha</label>
						<input class="form-control" type="password" value={password} name="password" onInput={this.onInput} />
					</div>
					<div class="alert alert-danger" role="alert" id="alert" style={{ display: 'none' }}  />
					<button class="btn btn-primary" type="submit">Entrar</button>
				</form>
			</div>
		);
	}
}