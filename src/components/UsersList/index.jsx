import React, { Component } from 'react'
import './style.css'

export default class UsersList extends Component {
	onEditNicknameClick(){
		this.props.showNicknameForm()
	}
	onSaveNicknameClick(){
		const newNick = this.refs.nicknameForm.value.trim()
		if(newNick !== ''){
			this.props.changeNickname(newNick)
		}
		this.props.hideNicknameForm()
	}
	render() {
		const { usersList,
			nicknameFormShowed,
			nickname } = this.props

		const users = usersList.map((user, index) => {
			return(
				<tr key={index}><td>{user.nickname}</td></tr>
			)
		})

		const nicknameText = (
			<div className="nickname"
					onClick={::this.onEditNicknameClick}>
				<span className="nickname-text">
					{nickname + ' '}
					<span className="glyphicon glyphicon-edit"
						></span>
				</span>
			</div>
			)

		const nicknameForm = (
			<div className="form-group input-group btn-group nick-form">
				<input className="form-control" 
					placeholder={nickname}
					ref="nicknameForm"/>
				<button className="btn btn-primary"
					onClick={::this.onSaveNicknameClick}
				>OK</button>
			</div>
		)

		return (
			<div className="panel panel-default user-list">
				<div className="panel-heading">
					Users
				</div>
				<div className="panel-body">
					<table className="table">
						<thead>
							<tr>
								<th>
									{nicknameFormShowed ? nicknameForm : nicknameText}
								</th>
							</tr>
						</thead>
						<tbody>{users}</tbody>
					</table>
				</div>
			</div>
		)
	}
}

UsersList.propTypes = {
	usersList: React.PropTypes.array.isRequired,
	showNicknameForm: React.PropTypes.func.isRequired,
	hideNicknameForm: React.PropTypes.func.isRequired,
	nicknameFormShowed: React.PropTypes.bool.isRequired
}
