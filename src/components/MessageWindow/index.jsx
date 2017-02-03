import React, { Component, PropTypes } from 'react'
import { MessageList, MessageForm } from '..'
import './style.css'

export default class MessageWindow extends Component {
	render() {
		const{ messages, socketsSend } = this.props
		return (
			<div className="panel panel-default message-window">
				<div className="panel-heading">Chat</div>
				<MessageList
					messages={messages} />
				<MessageForm
					send={socketsSend} />
			</div>
		)
	}
}

MessageWindow.propTypes = {
	messages: PropTypes.array.isRequired,
	socketsSend: React.PropTypes.func.isRequired
}
