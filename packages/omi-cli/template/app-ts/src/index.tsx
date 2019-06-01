import { WeElement, render, h, define, tag } from 'omi'
import './hello-omi'
import './index.css'
import * as css from './_index.less'
import * as logo from './logo.svg'
import '@omim/core/text-field'
import '@omim/core/button'
import '@omim/core/dialog'
import '@omim/core/switch'
import '@omim/core/radio'
import '@omim/core/tree'

interface MyAppProps {
	name: string
}

interface MyAppData {
	abc: string
}

@tag('my-app')
export default class extends WeElement<MyAppProps, MyAppData> {

	static css = css

	onAbc = (evt: CustomEvent) => {
		this.data.abc = ` by ${evt.detail.name}`
		this.update()
	}

	render(props) {
		return (
			<div class="app">
				<header class="app-header">
					<img
						src={logo}
						class="app-logo"
						alt="logo"
					/>
					<h1 class="app-title">Welcome to {props.name}</h1>
				</header>
				{this.data.abc}
				<hello-omi onAbc={this.onAbc} msg="Omi"></hello-omi>

				<m-text-field helper-text='Helper Text' label='Label1' />
      			<m-text-field label='Label1' helper-text='Helper Text' />
				{/* <m-dialog show={true}><h1>jane</h1></m-dialog> */}
			</div>
		)
	}
}

render(<my-app name='Omi'></my-app>, '#root')
