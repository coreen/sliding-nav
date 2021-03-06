import * as React from "react";
import * as classNames from "classnames";
import { Navigation } from "./Navigation";

interface DashboardState {
	showNav: boolean;
}

export class Dashboard extends React.Component<{}, DashboardState> {
	constructor(props: any) {
		super(props);
		this.state = { showNav: false };
	}

	private onClick = () => this.setState({ showNav: !this.state.showNav });

	public render(): React.ReactNode {
		const contentClasses = {
			"dashboard-contents": true,
			"nav-open": this.state.showNav
		};

		return (
			<>
				<button onClick={this.onClick}>Menu</button>
				<div className="page">
					{
						this.state.showNav &&
						<Navigation data={require("../data.json")} />
					}
					<img className={classNames(contentClasses)} src={require("../DashboardContent.png")} />
				</div>
			</>
		);
	}
}