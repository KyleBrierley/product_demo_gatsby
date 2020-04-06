import React from 'react'

export default class Trace extends React.Component{
    constructor() {
        super();
        this.state = {
            account: '',
            profile: '',
            event: '',
            trace: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);

        fetch("https://collect.tealiumiq.com/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tealium_account": this.state.account,
                "tealium_profile": this.state.profile,
                "tealium_event": this.state.event,
                "tealium_trace_id": this.state.trace
            })
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
    <section id="trace">
        <div className="inner">
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div className="field half first">
                        <label htmlFor="account">tealium_account</label>
                        <input type="text" name="account" id="name" value={this.state.account} onChange={this.handleInputChange}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="profile">tealium_profile</label>
                        <input type="text" name="profile" id="profile" value={this.state.profile} onChange={this.handleInputChange}/>
                    </div>
                    <div className="field half first">
                        <label htmlFor="event">tealium_event</label>
                        <input type="text" name="event" id="event" value = {this.state.event} onChange={this.handleInputChange}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="trace">Trace ID</label>
                        <input type="text" name="trace" id="trace" value={this.state.trace} onChange={this.handleInputChange}/>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Event" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
        </div>
    </section>
// )
    )
}
}

// export default Trace