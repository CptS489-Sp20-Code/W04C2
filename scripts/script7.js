const Button = (props) => {
    return <button className="btn btn-primary">
        <span className="fa fa-plus"></span>&nbsp;{props.name}</button>
}

const Header = (props) => {
    return <h1>{props.name}</h1>
}

const App = () => {
    return <div>
        <Header name="Hello Pullman"/>
        <Button name="Pullman Button"/>
        <Header name="Hello Moscow"/>
        <Button name="Moscow Button"/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
