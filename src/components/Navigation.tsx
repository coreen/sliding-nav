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
	public render(): React.ReactNode {
		const { data } = this.props;
		const menuItems = data.map((item: Item) =>
			<span className="nav-item">{item.label}</span>);

		return (
			<div className="nav-menu">
				{menuItems}
			</div>
		);
	}
}