import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css';
import React from 'react';
import styles from './Menu.module.scss';
import {MenuState} from "./Menu.model";
import {ROUTES} from "../../App.model";

class Menu extends React.Component<any, MenuState> {

    constructor(props: any) {
        super(props);
        this.state = this.createState(false);
        this.flipState = this.flipState.bind(this);
    }

    createState(isOpen: boolean) {
        return {
            isOpen: isOpen
        }
    }

    flipState() {
        this.setState((state) => {
            return this.createState(!state.isOpen)
        });
    }

    render() {
        const menuClassName = this.state.isOpen ? styles.Active : styles.Inactive;
        return (
            <div className={styles.Menu} >
                <Burger isOpen={this.state.isOpen} onClick={this.flipState} />
                <div className={menuClassName}>
                    <a href={ROUTES.play}>Play</a>
                    <a href={ROUTES.pick}>Pick</a>
                    <a href={ROUTES.add}>Add</a>
                </div>
            </div>
        );
    }
}

export default Menu;