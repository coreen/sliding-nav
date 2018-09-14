import * as React from "react";

interface NavProps {
	data: Item[]
}

interface Item {
	label: string,
	contents?: SubItem[]
}

interface SubItem {
	label: string,
	items: string[]
}

// TODO find ways to add React.PureComponent and React.SFC implementations to example

export class Navigation extends React.Component<NavProps, {}> {
	// actual type used by React, JSX.Element is used if create const without specifying via type inference
	public render(): React.ReactNode {
		const { data } = this.props;
		const menuItems = data.map((item: Item) =>
			<li className="nav-item">{item.label}</li>);

		return (
			<div className="nav-menu">
				<ul>{menuItems}</ul>
			</div>
		);
	}
}